---
title: Ciências da computação dia 108
date: 2025-04-28
tags: ["computer science"]
draft: false
---







### Inserir valores

``` {code-block-mode="0" spellcheck="false"}
INSERT INTO table_name (campo1, campo2, ...) VALUES (valor1, valor2, ...);
```

Para inserir múltiplos valores repita o comando várias vezes.

Para string e dates use aspas simples e para valores decimais use o
ponto para separar.

Valores NULL não precisam ser colocados nem como campo nem valor. Ao
contrario dos NOT NULL, que a não ser que possuam um valor DEFAULT,
precisam ser inseridos.

Você também pode omitir os campos:

``` {code-block-mode="0" spellcheck="false"}
INSERT INTO table_name VALUES (valor1, valor2, ...);
```

Mas nesse caso você precisa colocar todos os campos, até os NULL, na
mesma sequência que está no banco.








### Deletar valores

DELETE deleta uma linha toda.

Para deletar uma tabela toda faça:

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
DELETE FROM table;
```








### Atualizar valores

``` {code-block-mode="0" spellcheck="false"}
UPDATE table SET campo1=valor1, campo2=valor2, ...;
```








### WHERE

Todos os exemplos dados acima, os do delete e do update, ao serem
executados, todos os dados do banco serião afetados. Para que isso não
ocorra, usamos o commando WHERE para limitar os dados que serão
afetados.

``` {code-block-mode="0" spellcheck="false"}
comando... WHERE clausula;
```

a cláusula pode ser qualquer tipo de relação entre dados, como =, !=
(que também pode ser escrito como \<\>), \>, \<, ≥, etc. Repare que para
valores iguais não usamos == mas sim =.

Além disso, podemos juntar várias cláusulas de relação com operadores
lógicos, como AND, OR e NOT.








### OBS

CONSTRAINTs não precisam de nome.


