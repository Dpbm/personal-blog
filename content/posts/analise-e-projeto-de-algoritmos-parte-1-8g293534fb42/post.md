---
title: Análise
date: e tags: ["computer science"]
draft: false
---
**Algoritmo** → procedimento computacional bem definido que recebe
entrada(s) e devolve uma saída, sendo a descrição do problema a relação
entre a entrada e como deve ser sua saída;

**Problema** → descrição dos parâmetros e a descrição de como o
resultado deve ser apresentado;

**Instância de um problema** → todas as entradas possíveis de um
algoritmo que respeitam suas restrições;

> A velocidade de um programa depende de diversos fatores, mas não
> necessariamente vai depender do hardware usado ou da tecnologia.

**Considerações para a avaliar um algoritmo** → se todas as vezes ele
vai retornar o valor certo e quantas instruções serão necessárias no
pior caso;

**Invariante de um laço** → estado das variáveis a cada execução
completa de um laço, usado para ver o quão correto seu algoritmo está
sendo executado. Para provar a qualidade do algoritmo ele não pode
conter variâncias quanto ao contexto do programa;

**Invariantes auxiliares** → você pode usar invariantes auxiliares caso
exista mais de um laço em um mesmo bloco;

**Tempo de execução (complexidade de tempo)** → número de instruções
básicas executadas a partir de uma entrada. Para isso é necessário ver
quantas vezes cada linha será executada, logo o tempo total de execução
é a soma do tempo de execução de cada linha (quantas vezes ela vai ser
executada);

**Melhor caso** → quando seu algoritmo não precisa de muito esforço para
verificar que algo já é verdadeiro, já que por padrão ele é verdadeiro;

**Pior caso** → quando seu algoritmo precisa percorrer todo o espaço
possível para retornar verdadeiro;

**Comportamento assintótico** → o quanto a complexidade de tempo de seu
algoritmo muda conforme suas entradas mudam. Quanto maior a complexidade
em menos tempo pior. Importante analisar o algoritmo com dados que
tendem ao infinito;

**Modelo computacional** → quais recursos estão disponíveis, quais as
instruções básicas e quanto tempo cada instrução básica vai levar.
Análise de complexidade depende do modelo computacional;

Máquinas RAM (modelo RAM, Arquitetura de von Neumann) → modelo
idealizado que simula uma máquina real. Possui: acesso direto à memória,
único processador que executa sequencialmente, possui os tipos
primitivos números inteiros e reais e suas instruções possuem tempos
constantes;

**Indução matemática** → método usado para recursão. Consiste em provar
que certa função funcionará para todos os elementos de um conjunto
analisando apenas o primeiro valor.

> Obs: os laços gastam n unidades de tempo pois precisam de uma a mais
> para sair do loop, já as demais consome n-1

### Referências 

https://www.ic.unicamp.br/\~lee/mc448/\
https://blog.pantuza.com/artigos/invariante-de-laco-loop-invariants\
https://algol.dev/comportamento-assintotico/\
https://www.ime.usp.br/\~pf/algoritmos/aulas/footnotes/algoritmoeficiente.html \
https://www.ime.usp.br/\~leo/mac2166/2017-1/introducao_eficiencia_algoritmos.html \
http://www.decom.ufop.br/marco/site_media/uploads/pcc104/01_aula_01.pdf\
https://youtu.be/186lPQE-h64\
http://www.decom.ufop.br/marco/site_media/uploads/pcc104/05_aula_05.pdf

