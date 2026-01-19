---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







#### LL(1)

-   gramática da esquerda para a direita
-   de cima para baixo (top-down) ou bottom-up
-   pega sempre o primeiro símbolo não terminal mais à esquerda
-   não aceita recursão à esquerda
-   o analisador utiliza uma estrutura de pilha para verificar a
    entrada, além de uma tabela first-follow
-   O sistema da pilha começa com um determinado símbolo de controle
    (\$) e vai empilhando e desempilhando os caracteres conforme as
    regras, a entrada é válida quando sobra apenas o caractere de
    controle na pilha

#### First

-   primeiro caractere que uma regra pode ter

``` {code-block-mode="2" spellcheck="false" code-block-lang="plaintext"}
S -> AB
A -> b | empty
B -> a


First - table
S  |  {a,b}
A  |  {b, empty}
B  |  {a}

repare que em S, não temos só o b, uma vez que A pode ser vazio também, 
sendo assim, caso A seja vazio, o primeiro caractere será a
```

#### Follow

-   próximo caractere após certo simbolo não terminal a direta

```` {code-block-mode="2" spellcheck="false" code-block-lang="markdown"}
S -> AB
A -> b | empty
B -> a

S  | {$}       
A  | {a}       
B  | {$}       


De uma forma algoritmica, podemos representar o padrão do follow da
 seguinte forma:

```
adicionar $ para o conjunto do simbolo inicial

para cada regra existente faça
  se termina com o B (A -> αB) então
    Follow de B tem tudo do Follow de A
  senão (A -> αBβ)
    Follow de B possui o First de β
    
    se 'empty' está em First de β então
      Follow de B tem tudo do Follow de A
```
````


