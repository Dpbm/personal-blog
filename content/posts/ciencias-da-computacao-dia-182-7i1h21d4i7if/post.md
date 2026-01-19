---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







#### Exceptions

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
NO_DATA_FOUND -- exceção que informa que nenhum dado foi encontrado
CASE_NOT_FOUND -- variavel do case não existe
TOO_MANY_ROWS -- quando um SELECT INTO retorna varias linhas
OTHERS -- error generico

DECLARE
...
BEGIN

  -- se voce tiver varios inserts, e você quer que a alteração já seja salva
  -- use o commit depois dele, lembrando que se for apenas um comando, não
  -- há necessidade de fazer isso
  INSERT ....
  COMMIT;

  INSERT ...


EXCEPTION
  WHEN <error> THEN
    ...
  WHEN NO_DATA_FOUND THEN
    ...
  WHEN CASE_NOT_FOUND THEN
    ...
  WHEN TOO_MANY_ROWS THEN
    ...
  WHEN OTHERS THEN --erro generico
    ...
END;



-- para levantar um erro use o seguinte comando
raise application_error(<number>, <message>, [TRUE|FALSE]);
-- o numero vai de -20000 ate -20999
-- e o TRUE/FALSE diz se é pegar pegar todos os erros (TRUE) ou só 
-- o primeiro (FALSE)
```








#### Cursor

-   cursor implícito → consultas em PL/SQL que retorna 1 linha
-   cursor explicito → usado quando for retornar várias rows

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
CURSOR <cursor_name> [parametro1, parametro2, ...] IS SELECT ...;

OPEN cursor_name; -- executa a query do cursor e faz com que os valores 
                  -- virem um array

FETCH cursor_name INTO variavel1, variavel2; -- pega uma linha do cursor
CLOSE cursor_name; -- finaliza o cursor
cursor_name%FOUND -- TRUE quando o fetch retorna sucesso
cursor_name%NOTFOUND -- TRUE quando não foi possivel pegar mais nada (ultimo fetch)
cursor_name%ISOPEN -- TRUE quando o cursor esta em uso
cursor_name%ROWCOUNT -- total de fetchs com sucesso
cursor_name%status -- status/eventos do cursor


RAPD(value, total, pad); -- padding de texto

%ROWTYPE -- deixa mais pesad a execucao
```


