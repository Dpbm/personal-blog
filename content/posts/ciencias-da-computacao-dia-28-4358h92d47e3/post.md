---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







**Lógica simples**

-   probabilidade usada apenas para um caso único

> P = n de casos satisfatórios / n de todos os casos (conjunto U)








**Teorema do OU**

-   soma de probabilidades
-   deixa mais fácil o evento desejado

> P(1) + P(2) +P(3) .... + P(n)








**Teorema do E**

-   multiplicação de probabilidades
-   deixa mais difícil o evento desejado

> P(1) \* P(2) \* P(3) ... \* P(n)








Além disso, em alguns tipos de eventos você pode ter devolução ou não
(dependendo do caso, claro), com devolução você manterá a mesma
probabilidade para todos os eventos

4/52 \* 4/52 \* 4/52

agora sem devolução sua fração deverá ir diminuindo em cima e em baixo
(vai ficando mais difícil do evento acontecer, já que a gente considera
que os eventos vão acontecer)

4/52 \* 3/51 \* 2/50








obs: lembre-se que na probabilidade você está lidando com eventos
únicos, ou seja se você for usar o E ou o OU, repare se não há elementos
duplicados, se houver lembre de somar tudo depois subtrair esses
elementos

exemplo:

1 carta 8 ou 1 copas

1 carta 8 → P¹ = 4/52

1 copas → p² = 13/52

4/52 + 13/52 = 17/52

mas tem 1 oito de copas então

17/52--1/52 = 16/52 → 4/13








**Combinações**

-   Quando você precisa achar uma quantidade de combinações pensando que
    a ordem não importa

> C x,y = x! / y! (x-y)!

exemplo:

grupos de 3 pessoas no total de 15 alunos

C 15, 3 = 15! / 3! 12!

C 15, 3 = 15 \* 14 \* 13 \* 12! / 3! 12!

C 15, 3 = 15 \* 14 \* 13 / 3 \* 2

C 15, 3 = 5 \* 7 \* 13 = 455 combinações possíveis








**Permutação**

-   quando a ordem importa
-   quando dizer você e eu e eu e você tem diferença

para isso você pode usar a notação posicional

exemplo:

grupos de 3 pessoas no total de 15 alunos, mas queremos um diretor, 1
vice e 1 tesoureiro

15 (direto) \* 14 (vice) \* 13 (tesoureiro) = 2730

muito mais combinações, já que no anterior a gente descartava aqueles
que tinham as mesmas pessoas mas em posições diferentes (1, 2, 3; 3, 2,
1; 1, 3, 2; ...), nesse caso cada posição é diferente, mesmo que
tenhamos as mesmas pessoas no grupo








**Binômio de Newton**

-   quando você precisa achar a probabilidade de acontecer dois eventos
    diferentes

exemplo:

lançamentos de 3 moedas, probabilidade de sair, 2 caras e 1 coroa

normalmente faríamos

1/2 \* 1/2 \* 1/2 → 1/8

no entanto não está correto, pois dessa forma estamos pensando na
primeira moeda, segunda moeda e terceira moeda, como se sempre a
primeira e a segunda fosse cara e a ultima coroa, mas a ordem aqui não
importa, queremos que caiam duas caras e 1 coroa. Para isso, vamos
utilizar um fator de ajuste

para achar esse fator devemos fazer um binômio de Newton

(p + q)³ → p e a probabilidade de caras e q a de coroas, o 3 e o tanto
de moedas nesse caso

(p + q)³ = (3 0) p³q⁰ + (3 1)p² q¹ + (3 2)p¹ q² + (3 3) p⁰q³

agora vemos o que segue aquele padrão de 2 caras(p²) e 1 coroa(q¹)

(3 1)p² q¹ sendo esse o que satisfaz

agora faça

(3 1) C 3, 1 = 3!/1! 2! = 3 ← fator de ajuste

p² = (probabilidade de apenas um evento)² = (1/2)² = 1/4

q¹ = (probabilidade de apenas um evento)¹ = 1/2 = 1/2

agora faça aquela conta anterior e multiplique pelo fator de ajuste

3 \* 1/2 \* 1/4 → 3/8








**Curiosidades**

por causa da peste bubônica que assolava a Inglaterra no século 14,
Newton não podia ir para a universidade estudar, já que todos estavam de
quarentena, então devido a isso, ele ficou recluso e começou a criar
teorias e varias ferramentas que usamos hoje, inclusive o binômio de
Newton

as cartas do baralho no total são 52, onde temos 4 naipes e 13 cartas de
cada naipe


