#!/usr/bin/env bash
set -e
set -o pipefail

GREEN='\033[0;32m'
END='\033[0m'


find_posts(){
	find . -regextype posix-extended -regex ".*post.(mdx|md)" -printf "%p\n"
}

move_mdx_to_md(){
	local POST_PATH=$1
	if [[ $POST_PATH =~ ".mdx" ]]; then
		local NEW_PATH=$(echo "$POST_PATH" | sed 's/\.mdx/.md/')
		echo "Moving post from $POST_PATH to $NEW_PATH"
		mv $POST_PATH $NEW_PATH 
	fi 
}

add_header(){
	local FILE=$1
	local TITLE=$2
	local DATE=$3

	cat <<EOF > tmp && cat $FILE >> tmp && mv tmp $FILE
---
title: $TITLE
date: $DATE tags: ["computer science"]
draft: false
---
EOF
}

get_slug(){
	local FILE=$1
	echo $FILE | sed -r 's/^(([^\/]*.){3})|(\/post\.mdx?)//g'
}

get_data(){
	local USER=$1
	local PASS=$2
	local URI=$3
	local SLUG=$4

	local TARGET_RESULTING_FILE=/tmp/result.txt

	echo -e "${GREEN}Getting data for: $SLUG$END" >&2
	
	mongosh "mongodb+srv://$URI/posts" --apiVersion 1 --username $USER --password "$PASS" --eval "db.posts.find({slug: '$SLUG'});" > $TARGET_RESULTING_FILE &
	local PID=$!

	while [ -d /proc/$PID ]; do
		echo "Waiting PID: $PID" >&2
		sleep 1
	done

	cat $TARGET_RESULTING_FILE
}

parse_title(){
	local INPUT=$1
	sed -nE "s/^[[:space:]]*title: '([^']+)'./\1/p" <<< "$INPUT"
}

parse_date(){
	local INPUT=$1
	local DATE=$(sed -nE "s/^[[:space:]]*date: ([0-9]+)./\1/p" <<< "$INPUT")

	date -d "@$((DATE / 1000))" +%Y-%m-%d
}

grep_images(){
	local FILE_PATH=$1
	cat $FILE_PATH | sed -nE 's|.*(/image/[^"\)]+).*|\1|p' | sort | uniq
}

get_image_file_from_path(){
	local IMG=$1
	echo $IMG | sed 's/^.*\///g'
}

move_images(){
	local FILE=$1
	local TARGET_FOLDER="$(dirname $FILE)/"
	
	for img in $(grep_images $FILE); do
		local IMG_WHOLE_PATH="./public$img"
		echo "Moving file $IMG_WHOLE_PATH to $TARGET_FOLDER"
		mv "$IMG_WHOLE_PATH" "$TARGET_FOLDER"
		local IMAGE_FILE=$(get_image_file_from_path $img)
		sed -i "s|${img}|${IMAGE_FILE}|g" $FILE
	done
}

TARGET_POSTS_FOLDER=./content/posts
OLD_POSTS_FOLDER=./app/content

if [ ! -d $TARGET_POSTS_FOLDER ]; then
	echo -e "${GREEN}Creating folder: $TARGET_POSTS_FOLDER$END"
	mkdir -p $TARGET_POSTS_FOLDER
fi

echo -e "${GREEN}Moving old mdx files from $OLD_POSTS_FOLDER to $TARGET_POSTS_FOLDER"
mv "$OLD_POSTS_FOLDER/*" "$TARGET_POSTS_FOLDER"

echo -e "${GREEN}Deleting path $OLD_POSTS_FOLDER"
rm -rf $OLD_POSTS_FOLDER

echo -e "$GREEN+++++++++++++++++++++++++++++++++++++++++++++$END"

for post in $(find_posts); do
	USER=$1
	PASS=$2
	URI=$3
	
	echo -e "${GREEN}FILE: $post$END"

	SLUG=$(get_slug $post)
	echo -e "${GREEN}slug: $SLUG$END"

	DATA=$(get_data $USER $PASS $URI $SLUG)
	echo -e "${GREEN}Got data: $DATA$END"
	
	TITLE=$(parse_title "$DATA")
	DATE=$(parse_date "$DATA")
	echo -e "${GREEN}title: $TITLE$END"
	echo -e "${GREEN}date: $DATE$END"

	add_header $post $TITLE $DATE
	move_images $post
	move_mdx_to_md $post

	echo -e "$GREEN--------------------------------------------$END"

	sleep 1
done

OLD_IMAGES_PATH=./public/image
echo -e "${GREEN}Deleting path $OLD_IMAGES_PATH"
rm -rf $OLD_IMAGES_PATH
