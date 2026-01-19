---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







### SQL (Structured query language)

-   geralmente usado em bancos relacionais;
-   feito pela IBM para implementar o modelo relacional;
-   SQL é padronizado pela ANSI e ISO, sendo que a versão padrão é
    chamada de SQL ANSI.








### DDL

-   linguagem que define a estrutura do banco;
-   comandos: create, alter, drop, comment;
-   os comandos são usados para manipular objetos como: tables,
    procedures, views, functions, triggers, etc.








### DML

-   manipulação dos dados;
-   comandos: insert, update, delete, etc.








### DQL

-   consulta dos dados;
-   comando: select.








### DCL (data control language)

-   controla acessos;
-   comandos: grant, revoke;
-   isso pode ser usado para deixar um usuário acessar, apenas um table,
    apenas algumas colunas, etc.








### DTL (data transaction language)

-   define um escopo de transformações do banco que só seria aplicado
    quando todas as transações forem feitas com sucesso;
-   comandos: Begin transaction, commit, rollback.
-   Isso garante que todas as transações sejam feitas de forma integra,
    mesmo que aconteçam problemas, como falta de energia.

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
#cria um banco

CREATE DATABASE test;
#ou
CREATE SCHEMA test; #(a partir da V8 do mysql)


# muda para o banco criado
USE test;


# criando tabelas
CREATE TABLE test1 (
  id INT UNSIGNED NOT NULL,
  name VARCHAR(80) NOT NULL,
  age INT UNSIGNED NULL,
  sex CHAR(1) NULL 'M',
  
  
  #chaves
  CONSTRAINT pk_test1_id PRIMARY KEY(id),
  CONSTRAINT chk_test1_age CHECK(age > 18), #garante que todos sejam 18+
  CONSTRAINT fk_test1_test2 FOREIGN KEY(id) #chave estrangeira
    REFERENCES test2(id)
);


CREATE TABLE test2 (
  id INT UNSIGNED NOT NULL,
  card_number CHAR(16) NOT NULL
);


#Mostra os tipos das colunas e suas configurações
DESCRIBE test1;
DESCRIBE test2;
#ou
DESC test1;
DESC test2;
```








### UNIQUE

-   constraint semelhante à PK;
-   não aceita valores duplicados;
-   aceita NULL.








### CHECK

-   constraint;
-   defini uma relação entre uma coluna e um valor (que pode ser o de
    outra coluna também).








### Alguns tipos de dados

-   TINYINT → 1 byte;
-   SMALLINT → 2 bytes;
-   MEDIUMINT → 3 bytes;
-   INT → 4 bytes;
-   BIGINT → 8 bytes;
-   DECIMAL → DECIMAL(N, M), N é total de números com default em 10, M é
    o total de números depois da vírgula com default em 0;
-   FLOAT → possui mesmo formato do DECIMAL;
-   DOUBLE;
-   DATE → formato YYYY-MM-DD;
-   DATETIME → data e hora no formato YYYY-MM-DD HH:MI:SS
-   CHAR → string com tamanho fixo( CHAR(N) );
-   VARCHAR → string com tamanho variável ( VARCHAR(N) ), apenas os
    espaços ocupados serão usados;
-   TEXT;
-   BLOB → binários;
-   BIGBLOB;
-   BIGTEXT;


