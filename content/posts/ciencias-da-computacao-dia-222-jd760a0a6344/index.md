---
title: Ciências da computação dia 222
date: 2025-04-28
tags: ["computer science"]
draft: false
---







#### Core (núcleos dos processadores)

-   No começo dos Pentium, a intel usava um truque de software para
    simular como se houvessem mais núcleos (como as threads)
-   depois do core 2 duo começaram a ser usados multicores reais
-   processadores com muitos núcleos não necessariamente são melhores,
    já que há a possibilidade de um core atrapalhar o outro

#### CISC

-   complex instructions set computers
-   ampla variedade de instruções
-   executa muitas instruções complexas em sequência (tempo maior, mais
    pulsos de clock)
-   antiga, mas ainda usada
-   executa muito bem as tarefas
-   mais métodos de endereçamento(direto, indireto, relativo, etc.)
-   maior flexibilidade para o dev
-   maior complexidade para o hardware
-   tamanhos de instrução são variados
-   pode se criar microcódigo sequenciando múltiplas instruções em
    linguagem de máquina, dando mais flexibilidade mais aumentando a
    latência
-   maior possibilidade de CACHE
-   x86(intel, amd, 68k da motorola, etc.)
-   ajuda na otimização de código
-   é complexo de fazer
-   difícil de dizer qual será o desempenho
-   maior dificuldade para o compilador

#### CACHE

-   l1,l2 e l3 dizem respeito à distância dos módulos de cache
-   sendo assim o processador busca informações na seguinte ordem: L1,
    L2, L3, RAM, HD

#### RISC

-   reduced instructions set computers
-   operações mais limitadas
-   poucas instruções
-   mais simples
-   operações básicas e repetitivas
-   poucos modos de endereçamento
-   instruções de tamanho fixo dando resultados mais precisos
-   simplifica o processo de compilação
-   usa pipelines → quebra a instrução em instruções menores e executa
    elas em paralelo
-   muitos registradores de uso geral
-   pode ter problemas durante a execução, uma vez que é mais rápida que
    a CISC, e faz operações em paralelo ao invés de sequencial
-   necessita de menos energia
-   menor flexibilidade
-   maior carga para os compiladores
-   usado em ARM, MIPS, POWERPC, etc.


