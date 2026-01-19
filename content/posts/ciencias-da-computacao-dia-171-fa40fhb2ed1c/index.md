---
title: Ciências da computação dia 171
date: 2025-04-28
tags: ["computer science"]
draft: false
---







#### MYSQL

-   não possui transactions por padrão








#### Oracle

-   usa transactions por padrão
-   comandos internos são tratados atomicamente, ou seja, caso a
    transaction não seja concluída, tudo será descartado
-   transaction inicia com o primeiro DML e termina ao: COMMIT,
    ROLLBACK, comando DDL, quando o user sai ou quando o sistema cai
-   voce pode criar savepoints e dar rollback para pontos especificos
    desfazendo alterações
-   duas sessões diferentes não conseguem editar a mesma parte do banco
    até que uma delas dé um COMMIT ou ROLLBACK

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
DELETE + COMMIT -- deleta definitivamente

START TRANSACTION;
...
...
SAVEPOINT savepoint_name;
...
COMMIT;

ROLLBACK TO SAVEPOINT savepoint_name;

-----

-- da tablespace ilimitado para o user
ALTER user user_name QUOTA UNLIMITED ON tablescape;
```


