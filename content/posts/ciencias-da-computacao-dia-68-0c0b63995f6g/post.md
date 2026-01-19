---
title: Ciências da computação dia 68
date: 2025-04-28
tags: ["computer science"]
draft: false
---







### Menor complementar

-   representador por Dij
-   Para cada valor você elimina a linha e a coluna relativos a ele e
    faz o determinante do restante

exemplo:

#### 1 0 4

#### 9 8 1

#### 7 3 3

*D11:*

#### 8 1

#### 3 3

24--3 → 19








### cofator

-   para cada elemento da matriz você faz (-1)\^i+j \* Dij
-   representado por Aij

exemplo:

#### 1 0 4

#### 9 8 1

#### 7 3 3

*D11:*

#### 8 1

#### 3 3

24--3 → (-1)² \* 19 → 1 \* 19 → 19








### Teorema de Laplace

-   Escolha uma linha ou uma coluna:
-   exemplo com a linha 1: det X = a11 \* A11 + a12 \* A12 + a13 \* A13,
    exemplo com a coluna 2: det X = a12 \* A12 + a22 \* A22 + a32 \* A32
-   Para ficar mais fácil os cálculos, escolha a linha com os valore
    mais próximos de zero, uma vez que se for zero você pode eliminar
    essa parte da equação.








### Regra de Sarrus

-   usado apenas para matrizes de ordem 3
-   det X = a11 \* a22 \* a33 + a12 \* a23 \* a31 + a13 \* a21 \* a
    32 --- (a31 \* a22 \* a13 + a32 \* a23 \* a11 + a33 \* a21 \* a12)








### Observações

-   Se você possui uma coluna ou uma linha com todos os valores 0, em
    uma matriz de ordem três o determinante sempre será 0.
-   Se todos os números de uma matriz são iguais, o determinante é 0.
-   1 1/2 é um número misto, para encontrar seu relativo como uma fração
    imprópria faça → 1 \* 2 + 1 /2 → 2 + 1 / 2 → 3/2 → 1.5


