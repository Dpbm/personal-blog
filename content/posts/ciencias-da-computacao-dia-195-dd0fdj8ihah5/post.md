---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







#### Compilador

-   é difícil reinventar a sintaxe de uma linguagem, por isso várias
    linguagens utilizam estruturas semelhantes, como if, for, etc.
-   métodos formais → especificação sintática (autômatos com regras pré
    definidas)
-   métodos informais → semântica (necessário entender o contexto do
    programa para identificar os erros)

#### Expressões

poderíamos configurar regras de expressões da seguinte maneira

``` {code-block-mode="0" spellcheck="false"}
E = conjunto das expressões

1 - a e b são expressões (a,b ∈ E)
2 - se a e b são expressões então a+b e a*b também são(a+b, a*b ∈ E)
3 - (a) também é uma expressão ((a) ∈ E)

sendo assim E pode ser --> a | b | E+E | E*E | (E)
```

com essas regras podemos montar uma árvore para, por exemplo, a seguinte
expressão, a + (a \* b)

![image](image_321.png)


