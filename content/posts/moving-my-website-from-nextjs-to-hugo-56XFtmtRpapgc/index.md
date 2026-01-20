---
title: Moving my website from NextJS to HUGO
date: 2026-01-20
tags: ["computer science", "scripts", "bash", "hugo", "node"]
draft: false
---

So, it's been a long time since I first created my blog using `NextJs` and `MongoDB`. The previous setup was kind a mess. You can still check it on my github [966949eb6e321c5f8478d40fa07550b41351401f](https://github.com/Dpbm/personal-blog/tree/966949eb6e321c5f8478d40fa07550b41351401f).

This old version was relying deeply on `Nextjs` server components, `mdx` plugin and the amazing `api` capabilities. Wich was nice, and gave me a freedom I wouldn't have in other environments, however it was so complicated to create new posts.

## Previous workflow

For the previous setup, I had to follow these steps:

1. Create a post somewhere on my computer (using a `.mdx` file)
2. Use a script to get the file and move to the correct places for building, also adding some metadata to a `mongoDB` server ([addPost.ts](https://github.com/Dpbm/personal-blog/blob/966949eb6e321c5f8478d40fa07550b41351401f/app/posts/addPost.ts))
3. Build the project and verify if there were no issues
4. Deploy it

At the beginning, it was simple. But as I started to write it more often, I had some issues.

Some compoenents I was using in markdown had no styles or a direct translation for `mdx`. I had to think about responsiviness and everything like on my own. It was not a problem itself, but handling so much problems just to make a silly blog post was freaking me out. My main idea was to have a simple way to write and publish my own stuff. I thought about using a CMS, like `strapi`, moving to `wordpress`, creating a blog with `rails`, even moving back to `medium` or `substack`. 

> But what I wanted was to have my own blog with my own rules!

## New Version

One day, I was in a doctor with my mom and, since I had nothing to do, I was surfing through the internet when suddenly my eyes came accross this `golang` project, `HUGO`. I started reading the documentation, and got fascinated with this simple way to create a blog using `markdown` and a bunch of `templates`.

I made a plan, if this sudden change would worth it, and came to a conclusion that it would for sure. So, let's code.

I created a new branch:

```bash
git checkout -b new-version
```

Ran the scaffold command from hugo:

```bash
hugo new site dpbm-blog
```

And started doing the changes to my old posts. However, there were a lot of files, more than `200` to be precise. Updating all them with my own hands would be exhausting. So I spent two days, developing a `bash script` to move everything to its place in the new `hugo blog`.

In my former blog, the posts were stored in a folder like `app/content/posts/`, now with `HUGO` everything is int `content/posts/`. Not a big change.

However, previously I was storing every single image inside `public/image/`, but now I had either to move them to the post directory and rename the post file from `post.mdx` to `index.md`, or move every image into `static/`. Well, I've choosen the first one, since the static folder (more precisely `static/images/`) will be used for global assets.

Also, I had to take care of my posts header. Every single post (`index.md` file) has a metadata header containing things like `tags`, `title`, `date`, etc; but old posts had nothing, so I had to retrieve the metadata from mongo using `mongosh` and parse it using linux utilities (like `sed`, `grep`, etc.).

I did some tests with the functions I had made. Used a lot of `Chatgpt` and `Gemini` to debug some parts, which allowed me to discover some `bash` tricks during that, like the usage of `sed + <<<` to input a multiline string into sed. And, for sure, `git restore` was my allied here. I messed up with my old posts a lot, and relying on `git` to ensure no data was lost made me feel way more comfortable to test things and discover better ways to do something.

Anyways, after some time, I had a fully functional bash script which you can checkout out [here](https://github.com/Dpbm/personal-blog/blob/main/move-posts.sh).

---

With all posts ready to be shipped, I added the [shibui](https://github.com/ntk148v/shibui) theme and configured it.

I removed the favicon it come with by overwriting its `layouts/_partials/head.html` file. Added `google analytics` just to keep track of how many people has viewed my posts. And Added a Home page (`content/index.md`).

After it, I configured `vercel` to publish it. At first I was having troubles with it. But after changing the framework to `HUGO`, changing the build command to `hugo --gc --minify` and setting the `HUGO_VERSION`env just worked for me.

---

To enchance my setup even further, I defined some bash functions to help me generate new posts. I could use `hugo new conent` command, but I needed something tailored specificatilly for me.


```bash

# ~/.functions/posts.sh
#!/usr/bin/env bash

get_slug_random_part(){
	tr -dc 'A-Za-z0-9' </dev/urandom | head -c 13	
}

remove_spaces(){
	local INPUT=$(cat /dev/stdin)
	echo $INPUT | sed -E 's|[[:space:]]{2,}| |g' | tr '[:blank:]' '-'
}

remove_accents(){
	local INPUT=$(cat /dev/stdin)
	echo $INPUT | iconv -c -s -f UTF-8 -t ASCII//TRANSLIT
}

to_lowercase(){
	local INPUT=$(cat /dev/stdin)
	echo $INPUT | tr '[:upper:]' '[:lower:]'
}

remove_punctuation(){
	local INPUT=$(cat /dev/stdin)
	echo $INPUT | tr -d '[:punct:]'
}

parse_title(){
	local TITLE="$1"
	local PARSED_TITLE=$(echo $TITLE | remove_punctuation | remove_spaces | remove_accents | to_lowercase)
	echo "$PARSED_TITLE-$(get_slug_random_part)"
}

scaffold_post(){
	local POST_PATH="$1"
	local TITLE="$2"

	local SLUG=$(parse_title "$TITLE")
	local POST_SLUG_PATH="$POST_PATH/$SLUG"

	if [ ! -d "$POST_SLUG_PATH" ]; then
		mkdir -p "$POST_SLUG_PATH"
	fi
	
	local MAIN_MD_FILE="$POST_SLUG_PATH/index.md"
	local DATE=$(date -d 'now' +%Y-%m-%d)
	touch $MAIN_MD_FILE
	cat <<EOF > $MAIN_MD_FILE
---
title: $TITLE
date: $DATE
tags: ["computer science"]
draft: true
---
EOF

}

```

Now, with these functions, I run:

```bash
source ~/.zshrc # if didn't before
scaffold_post "./content/posts" "My new post title"
```

and it generates the new slug and the post skeleton for me. Pretty convenient don't you think?

Doing that also taught me how to use the `tr` command, which is amazing for string tasks.

If you want to check it out, it's available in my [config files repo](https://github.com/Dpbm/config-files/blob/main/.functions/posts.sh).


## The final workflow

Now, with this new `Hugo` blog, I do the following:

1. `scaffold_post "./content/posts" "my new post"
2. write the post
3. deploy it

It was a nice improvement, since everything just works fine and the theme itself gives a nice layout styling.

I'm so glad with my new blog :)
