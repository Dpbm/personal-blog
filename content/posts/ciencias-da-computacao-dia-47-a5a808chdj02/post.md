---
title: Ciências da computação dia 47
date: 2025-04-28
tags: ["computer science"]
draft: false
---





![image](https://cdn-images-1.medium.com/max/800/0*zlKa5GMb08o7yokz)


algoritmos gulosos

Os algoritmos gulosos, são algoritmos usados para escolher sempre o
melhor valor, seja este o maior/menor, mais rápido, etc (tudo dependendo
do seu objetivo).

Mesmo parecendo muito bom, temos um problema, o algoritmo ele não pensa
no futuro e muito menos volta passos para trás (não possui
backtracking), ou seja, a cada vez que o programa iterar o algoritmo vai
enxergar apenas os dados disponíveis naquele momento e pegar aquele que
parece mais apetitoso (melhor para o objetivo dele).

Com isso, ele pode acabar não alcançando a melhor solução (global
optimal).

Sendo assim a duas coisas que você deve pensar antes de usar esse
algoritmo:

1.  A cada iteração do programa, se eu escolher o valor mais apetitoso
    eu alcançarei a melhor solução?
2.  A cada pequeno problema (bloco de código ou mesmo iteração) há o
    valor (local optimal) que me levará ao global optimal?

se esses dois fatores forem verdadeiros você poderá utilizar
tranquilamente o algoritmo guloso.








Existem alguns algoritmos famosos que usam essa tatica, como o algoritmo
Dijkstra's, que tenta encontrar o menor caminho para um local e o
algoritmo de Huffman que tenta encodar mensagens baseadas em frequencias
e probabilidades de um caractere aparecer.

Além de alguns problemas como o do caixeiro viajante que também podem
ser resolvidos usando algoritmos gulosos.

Muito usado também em alguns algoritmos de inteligencia artifical como
A\* e o prórpio algoritmo de Dijkstra.








Um exemplo simples que podemos pensar para algoritmos gulosos é o
problema do trco do mercado.

Imagine que você tenha que dar troco para uma pessoa usando moedas, e
você quer encontrar a maneira mais fácil de fazer isso.

A maneira como o algoritmo guloso agiria seria, pegando primeiro os
valores maiores como, R\$1,00 e R\$0,50, e depois partindo de forma
descrecente para os valores menores como R\$0,10 e R\$0,05.

**Referências:**


[**Greedy Algorithms \| Brilliant Math & Science Wiki**\
*A greedy algorithm is a simple, intuitive algorithm that is used in
optimization problems. The algorithm makes
the...*brilliant.org](https://brilliant.org/wiki/greedy-algorithm/)[](https://brilliant.org/wiki/greedy-algorithm/)



[**Método guloso**\
*A greedy algorithm starts with a solution to a very small subproblem
and augments it successively to a solution for
the...*www.ime.usp.br](https://www.ime.usp.br/~pf/analise_de_algoritmos/aulas/guloso.html)[](https://www.ime.usp.br/~pf/analise_de_algoritmos/aulas/guloso.html)



[**A\* Search \| Brilliant Math & Science Wiki**\
*A\* (pronounced as \"A star\") is a computer algorithm that is widely
used in pathfinding and graph traversal.
The...*brilliant.org](https://brilliant.org/wiki/a-star-search/)[](https://brilliant.org/wiki/a-star-search/)



