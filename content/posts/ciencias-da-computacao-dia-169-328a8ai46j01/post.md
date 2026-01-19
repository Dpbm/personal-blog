---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







#### Sequence

-   objeto presente em alguns SGBD(o Oracle tem)
-   usado para a criação de valores sequênciais (como aquele AUTO
    INCREMENT do MYSQL).

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
CREATE SEQUENCE sequence_name
  START WITH 0 --valor para começar
  INCREMENT BY 1 --valor do increment, pode ser negativo para fazer uma sequência inversa
  MAXVALUE 10 --valor maximo
  CYCLE --quando chegar no 10 ele volta para o minimo (padrao do min é 1)
  CACHE 2; --já aloca os dois proximos valores em cache


-- de preferência a usar NO CYCLE e NO CACHE

INSER INTO table (id, name)
  VALUES(sequence_name.NextVal, 'test'); -- sequence.NextVal pega o próximo valor da sequência

SELECT * FROM sys.user_sequences; -- mostra as sequences criadas

SELECT sequence_name.NextVal, 
       sequence_name.currval; -- valor atual da sequence
  FROM dual;

CREATE SEQUENCE inverse_sequence
  START WITH 10
  INCREMENT BY -1 
  MAXVALUE 0 
  NO CYCLE 
  NO CACHE; 

SELECT * from dba_sequences; -- todas as sequences do banco
                             -- necessario ser DBA
```


