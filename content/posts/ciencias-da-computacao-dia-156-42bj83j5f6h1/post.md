---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







-   É recomendado criar pelo menos 2 tablespaces para cada sistema,
    sendo um para dados e outro para indices, ajudando no balanceamento
    de carga
-   tablespace sysaux → informações auxiliares do sistema
-   tablespace undotbs → usado para rollbacks

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
CREATE TABLESPACE name
  datafile 'datafile'
  size 10M --tamanho inicial
  AUTOEXTEND ON NEXT 2M
  MAXSIZE 20M;

DROP TABLESPACE name INCLUDING CONTENTS AND datafiles;

SELECT * FROM dba_data_files; --just for admins

SELECT username, default_tablespace, temporary_tablespace
FROM user_users;
```


