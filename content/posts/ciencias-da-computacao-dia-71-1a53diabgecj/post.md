---
title: Ciências da computação dia 71
date: 2025-04-28
tags: ["computer science"]
draft: false
---







### Equação Linear

-   Uma equação linear, é qualquer equação de grau 1.

exemplo: 10x + 3y --- 5z = 12








### Equação Linear Homogênea

-   Uma Equação linear Homogênea é a equação que tem como resultado o
    valor 0, sendo assim uma das soluções possíveis para essa equação é
    todos as incógnitas como 0.

exemplo: 2x + 3y = 0 (um dos resultados será, (0, 0))








### Maneiras de resolver uma Equação Linear

#### 1 incógnita

como 1 incógnita você pode usar a lógica e um pouco de matemática básica
para resolver, como no exemplo a seguir

3x = 3

x = 3/3 = 1

#### 2 incógnitas

A partir de duas incógnitas, você já tem a possibilidade de usar
sistemas lineares, mas dependendo da equação você também pode usar um
pouco de lógica ou ainda teste de valores

Podemos, então, utilizar o método de estimativas(teste de valores).
Digamos que temos a equação linear → 2x --- y = 4

podemos então pensar em alguns valores que podemos colocar em x, por
exemplo 1 e 2

quando 1

2 \* 1 --- y = 4

2 --- y = 4

agora podemos fazer da mesma maneira que era com apenas uma incógnita

-y = 4--2

-y = 2

y = -2

agora para o valor 2

2 \* 2 --- y = 4

4-y = 4

-y = 0

y = 0

sendo assim alguns dos resultados são (1, -2) e (2, 0)








### Sistema linear

-   é um conjunto de m equações lineares como n incógnitas;
-   se em uma equação uma incógnita é inexistente, significa que o valor
    daquela posição é 0;
-   é usado para encontrar as incógnitas das equações de uma só vez.

exemplo:

2x + 3y --- z = 0

x --- y + z = 5

x + y + z = -2








### Sistema linear homogêneo

-   Quando todas as equações tem como resultado 0








### Método da adição

Uma das maneiras mais comuns de resolver um sistema linear, é utilizando
o método da adição, do qual consiste em somar as partes das equações,
com o objetivo de remover pelo menos uma das incógnitas

exemplo:

2x --- y = 5

x + y = 7

3x + 0 = 12

x = 12/3 = 4

4 + y = 7

y = 7--4 = 3

No exemplo que utilizei, as equações estavam favoráveis para uma adição
por padrão, mas caso não estivesse, você poderia multiplicar uma das
equações por um número que consiga anular uma das incógnitas, ou ainda
multiplicar as duas equações, uma por um número positivo e a outra um
negativo, de forma que seja possível fazer o mesmo.

exemplo:

-x + 5y = 11 (3)

3x --- y = 9

-3x + 15y = 33

3x --- y = 9

0x + 14y = 42

y = 42/14 = 3

3x --- 3 = 9

3x = 12

x = 12/3 = 4








### Expressão matricial de um sistema linear

podemos, por fim, representar um sistema linear em formato de matriz
separando os fatores, as incógnitas e os termos independentes.

exemplo:

-x + 5y = 11

3x --- y = 9

a representação matricial seria algo como isso

    [ -1  5 ] * [ x ] = [ 11 ]
    [  3 -1 ]   [ y ]   [  9 ]

repare que se multiplicarmos as matrizes temos

    [ -1*x +  5*y ] = [ 11 ]
    [  3*x + -1*y ] = [  9 ]

que é o mesmo que

-x + 5y = 11

3x --- y = 9


