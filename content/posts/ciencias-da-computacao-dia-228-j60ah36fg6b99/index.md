---
title: Ciências da computação dia 228
date: 2025-04-28
tags: ["computer science"]
draft: false
---







#### Análise sintática ascendente (shift-reduce)

-   de baixo para cima (folha para a raiz)
-   reduz(reduce) ao invés de derivar
-   vai do terminal reduzindo a cadeia para um não terminal (chegando no
    símbolo não terminal inicial da cadeia, se a entrada for válida)
-   gramática LR(K)
-   por utilizar gramáticas LR(K), podemos verificar qualquer quantidade
    de simbolos a frente K, sendo 0 ou 1 os mais comuns e o suficiente
    para a maioria dos casos
-   São eficientes
-   podem ser usadas com uma grande variedade de gramáticas
-   aceita recursão à esquerda e ambiguidade
-   Por aceitar ambiguidade há várias maneiras de reduzir uma unica
    expressão, mas o resultando sempre deve ser o mesmo
-   usado por diversas linguagens
-   vai empilhando(shift) os símbolos e a partir da tabela sintática
    (dos produtos da expansão), o conjunto de símbolos(handle) é
    convertido para um único não terminal

``` {code-block-mode="2" spellcheck="false" code-block-lang="markdown"}
S -> [L] | a
L -> L;S | S

entrada = [a;a]

|  Pilha |  Entrada |  Ação   |
|--------|----------|---------|
| $      | [a;a]$   | shift [ |
| $[     | a;a]$    | shift a |
| $[a    | ;a]$     | reduce a to S |
| $[S    | ;a]$     | reduce S to L |
| $[L    | ;a]$     | shift ; |
| $[L;   | a]$      | shift a |
| $[L;a  | ]$       | reduce a to S |
| $[L;S  | ]$       | reduce L;S to S |
| $[L    | ]$       | shift ] |
| $[L]   | $        | reduce [L] to S |
| $S     | $        | reduce S to L |
| $L     | $        | ACCEPT |
```


