---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







### Índice

-   estrutura de dados que permite queries mais velozes;
-   não é necessário criar, mas para aumentar a perfomance, é
    recomendado;
-   é criado automaticamente quando você seta alguma coluna como PK ou
    UNIQUE, pois devido ao seu formato, ele garante que os dados não
    sejam repetidos;
-   Deixa mais rápido as pesquisas(queries), pois utilizam uma estrutura
    que já deixa os dados já organizados e linkados, como uma B-tree.
    Com isso, caso você não possua indices, ao fazer um select o mysql
    fará um FULL TABLE SCAN, ou seja, percorrerá todos os dados pegando
    aqueles que foram selecionados e filtrados;
-   Não é necessário selecionar o índice manualmente, ao fazer um select
    o mysql vai automaticamente usar o índice, caso ele veja que será
    mais rápido;
-   Você pode usar com cláusulas Where;
-   Ao fazer um update, insert ou delete na table, o indice será
    atualizado também.

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
CREATE [UNIQUE] INDEX name ON table(column);

#O unique é usado geralmente para PK e UNIQUE columns, sendo assim, geralmente não é usado
```








### View

-   Armazena uma query;
-   Dados são gerados dinamicamente quando você faz uma query usando a
    view;
-   Usado quando você possui uma query muito complexa que você precisa
    executar muitas vezes em diferentes momentos;
-   Também pode ser usado como uma maneira de limitar o acesso a certas
    tabelas (em conjunto com as regras de acesso);
-   Usado geralmente para select, mas pode ser usado para insert, update
    e delete também, basta tomar cuidados com muitas tables e funções de
    grupo;
-   Representa uma espécie de visão/ponto de vista dos dados;
-   Pode ser usado em conjunto com outras queries/cláusulas.

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
CREATE [OR REPLACE] VIEW view_name as <query>;

#para selecionar os dados da view
SELECT * FROM view_name;
```








### Cláusulas WHERE

#### BETWEEN

-   retorna os dados que estão entre um intervalo;
-   o valor menor precisa sempre vir antes.

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
SELECT id FROM users WHERE id BETWEEN 10 AND 100; #com numeros
SELECT insert_date FROM users WHERE insert_date BETWEEN '2005-01-04' AND '2022-01-03'; #com datas
SELECT name FROM users WHERE name BETWEEN 'Ana' AND 'Joana'; #com strings
```

#### LIKE

-   busca por padrões em strings;
-   possui dois caracteres de substituição (coringas): % substitui
    nenhum ou vários caracteres e \_ substitui exatamente 1 caractere.

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
SELECT name FROM users WHERE name LIKE '%Ana%'; #pega nomes que possuem Ana
SELECT name FROM users WHERE name LIKE '_ia'; #pega nomes que possuem 3 letras e a primeira pode ser qualquer uma e as duas ultimas sao ia 
```

#### IN

-   Filtra dados que estão em uma lista de valores.

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
SELECT id FROM users WHERE id IN (1, 2, 3, 5);
```

#### IS NULL

-   pega os dados que são null;
-   lembre-se que NULL é diferente de ' ' (vazio).

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
SELECT title FROM movies WHERE gender IS NULL;
```


