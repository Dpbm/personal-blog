---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







#### Procedures

-   procedimentos armazenados (como uma função sem retorno)
-   pode ser escrito em PL/SQL, C, JAVA, etc.
-   podem ser chamadas por softwares externos
-   são compilados
-   podem ser agendados
-   não é permitido COMMIT, ROLLBACK, SAVEPOINT dentro deles

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
CREATE OR REPLACE procedure_name [parametros] AS
[variaveis]
<bloco PL/SQL>;

-- parâmetros podem ser de entrada(IN) ou de saida(OUT)
-- por padrao ele é IN
<name> IN <type>;
<name> OUT <type>;
```








#### Triggers

-   gatilho atrelado à uma tabela
-   pode ser atrelado ao evento de INSERT, UPDATE e/ou DELETE
-   não necessita de privilégios
-   não é permitido COMMIT, ROLLBACK, SAVEPOINT dentro deles

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
BEFORE, AFTER, statement, row -- trigger type
INSERT, UPDATE, DELETE -- trigger event

BEFORE INSERT OR UPDATE    OF  salario, funcao   ON  empregado
-- type                           colunas             tabela

-- WHEN pode ser usado para dar uma restrição de quando o trigger vai ser 
-- rodado, exemplo:
BEFORE INSERT OR UPDATE OF salario, funcao ON empregado WHEN salario > 10000


-- ao usar o BEFORE, você pode pegar os novos dados passados pela query usando
-- o :NEW. essa clausula dara para você acesso à todos os novos dados
-- para a clausula WHEN no inicio, não é necessário usar :NEW basta usar NEW

BEFORE INSERT OR UPDATE OF salario, funcao ON empregado 
WHEN NEW.salario > 10000
...
IF(:NEW.salario == 2000) THEN ....
....

-- como certas queries podem modificar varias linhas
-- pode ser necessário utilizar a clausula FOR EACH ROW, aplicando o trigger 
-- para cada row modificada
CREATE OR REPLACE TRIGGER trigger_name BEFORE INSERT OR UPDATE 
  OF salario, funcao ON empregado FOR EACH ROW
  WHEN NEW.salario > 1000
....;

-- alem do NEW, há também o OLD, quando você vai deletar ou modificar algo
-- sendo assim:
-- INSERT: NEW
-- UPDATE: NEW OLD
-- DELETE:     OLD
-- obs: apenas os dados adicionados/editados são acessíveis por essas clausulas
CREATE OR REPLACE TRIGGER trigger_name BEFORE INSERT OR UPDATE 
  OF salario, funcao ON empregado FOR EACH ROW
  WHEN NEW.salario > 1000 AND OLD.funcao = 'RH'
....;


-- se um trigger possui mais de um evento atrelado a ele, você possui três
-- variaveis para verificar qual foi o evento:
INSERTING, UPDATING e DELETING


CREATE OR REPLACE TRIGGER trigger_name BEFORE INSERT OR UPDATE 
  OF salario, funcao ON empregado FOR EACH ROW
  WHEN NEW.salario > 1000 AND OLD.funcao = 'RH'
  BEGIN
    IF INSERTING THEN
      ...
    ELSE
      ...
    END IF;
....;
```


