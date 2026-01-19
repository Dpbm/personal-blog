---
title: Ciências
date: da tags: ["computer science"]
draft: false
---






lógica e algoritmos, então aqui vão algumas anotações:

Lógica:

-   Arte de pensar
-   maneiras de encontrar a solução para algum problema
-   o mais importante de um algoritmo é a lógica não a ferramenta
    (linguagem de programação)

Algoritmos:

-   maneiras de resolver um problema usando a lógica
-   passo a passo para resolver o problema
-   obs: podem existir vários algoritmos que resolvem o mesmo problema

Além de aprendermos os conceitos, foi dado uma breve explicação do que é
necessário para criar um algoritmo, sendo assim foi nos explicado que
para criar um algoritmo é necessário pensar em cada parte do problema o
que será necessário usar para resolve-lo

1.  O que é necessário para esse problema (dados)
2.  O que vou usar para resolver (ferramenta)
3.  Qual os passos serão necessários (algoritmo)








Seguindo essa linha foi nos apresentado um problema clássico em
algoritmos que são as Torres de Hanói.

Esse problema consiste em 3 hastes e n discos colocados em ordem
crescente (de baixo para cima) na primeira haste, e seu objetivo é
transportar todos os discos para a terceira haste deixando-os igual
quando estavam na primeira. No entanto para isso temos 2 regras:

1.  um disco maior não pode ficar em cima de um menor
2.  só pode ser movido um disco por vez

![fonte: Wikipedia](image_0.png)








Outro conceito abordado foi a solução ótima, esse conceito representa um
algoritmo que resolve um problema da melhor forma. No casso das Torres
de Hanói esse algoritmo pode conter apenas 2\^n-1 passos (onde né o
numero de discos).








O professor também começou a explicar o que é necessário para dizermos
que um algoritmo é computacional(já que os algoritmos estão em toda a
nossa vida em todos os momentos), para isso ele explicou que é
necessário um algoritmo seguir o **modelo computacional**, esse modelo é
composto por 3 partes:

1.  entrada de dados (teclado, discos, etc.)
2.  processamentos dos dados(onde serão feitas operações com a entrada,
    como uma CPU)
3.  saída de dados (onde o resultado será exibido, como um monitor)

Além disso foi passado que esse sistema pode ser cíclico, ou seja, a
saída pode pedir uma nova entrada.








Outro fator importante da aula foram os tipos de dados os quais são:

string

-   cadeias de caracteres
-   podem possuir também números ( no geral quando os números não
    precisam ser usados para cálculos é bom representa-los como strings)
-   concatenar → juntar strings

números

-   inteiros

--- não possuem casas decimais

--- são lidos 4x mais rápidos que os reais

-   reais

--- possuem casas decimais

--- necessitam de 4 pulsos de clock para processar, pois para chegar no
numero decimal é são necessários mais passos do processador

obs: pulsos de clock são os momentos onde a CPU está apta a realizar
processamentos.

-   Booleanos

--- apresentam apenas 1 bit de informação

--- valores true ou false








Em penúltimo foi mostrado algumas maneiras de representar (armazenar)
dados:

constantes

-   não consomem memória
-   valor que não se modificará

variáveis

-   consomem memória
-   valor pode ser modificado








E por fim, vimos alguns tipos de operadores os quais são

aritméticos

-   fazem cálculos matemáticos como subtração, adição, etc.
-   caso possível use a divisão inteira(// no Python, pois lhe salvará 4
    pulsos de clock)

atribuição

-   operador usado para atribuir valores a uma variável (no geral o
    sinal de =)

relacionais

-   fazem operações que checam coisas como maior que, igual que, maior
    ou igual que, etc.

lógicos

-   derivado das portas lógicas, temos os operadores, E, OU, etc.








**Detalhes finais**

código sequencial

-   código lido da maneira que foi escrito
-   de cima para baixo, da esquerda para a direita

input (Python)

-   função bloqueadora, pois ela trava o programa e espera sua entrada
    no teclado


