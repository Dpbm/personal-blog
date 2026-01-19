---
title: Ciências da computação dia 165
date: 2025-04-28
tags: ["computer science"]
draft: false
---







``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
--Criar usuário
CREATE USER 'username'@'host' IDENTIFIED BY 'password';
-- o host é o ip, podendo ser usado caracteres corringa como % e _
-- um usuário pode ter vários hosts diferentes

-- permissões de tabela
CREATE, ALTER, DROP

-- Permissões de dados
SELECT, INSERT, UPDATE, DELETE

-- outras permissões
ALL PRIVILEGES, 
GRANT OPTION -- dexa um user dar permissões para outros

-- dar permissões
GRANT permissao1, permissao2, ... ON database.table 
  TO 'username'@'host'
  IDENTIFIED BY 'password';
FLUSH PRIVILEGES; -- para limpar o cache de permissões

SHOW GRANTS FOR 'username'@'host'; -- mostra as permissões de um user

-- remover permissões
REVOKE permissao1, permissao2, ... ON database.table
  FROM 'username'@'host';
```


