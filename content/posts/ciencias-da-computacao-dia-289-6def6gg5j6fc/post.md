---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







#### Memória virtual

-   há a sensação de ter mais memória disponível
-   muitas vezes é implementado em hardware

![image](image_478.png)

#### Paginação

![image](image_479.png)

Como os endereços virtuais de estão paginados, ao usar algo de dentro da
EEV de A, a tabela de páginas dirá o endereço da MP em que aquela parte
especifica está

#### Tabela de páginas

![image](image_480.png)

-   bit presente/ausente diz se a página está mapeada para um endereço
    físico
-   cache da MMU é chamado de TLB
-   page fault → quando tenta-se acessar dados que não estão na RAM
    devido ao SWAP ou coisa do gênero








### Algoritmos para a substituição de páginas

-   para performance é melhor não remover uma página usada com
    frequência

#### Algoritmo NRU

-   usa os bits de status Reference e modified
-   ao receber um page fault ele classifica as paginas em:

> classe 0 → R=0, M=0

> classe 1 → R=0, M=1

> classe 2 → R=1, M=0

> classe 3 → R=1, M=1

-   remove aleatoriamente da classe mais baixa possível

#### FIFO

-   fila de páginas
-   remove a primeira (mais antiga)
-   não é usado já que pode remover uma página usada frequentemente

#### Second Chance

-   baseado na FIFO e bit Reference
-   antes de remover verifica se o bit R é 1, se for ele vai para o fim
    e R vira 0
-   se todas estiverem com R=1, haverá uma volta completa

#### Relógio

-   baseado no Second Chance com uma implementação melhor para a fila
    (fila circular)
-   ponteiro aponta para a pagina mais antiga
-   se a página possui R=0 então substitui esse e o ponteiro vai para o
    próximo
-   se a página possui R=1, seta R=0 e roda até achar um página com R=0

#### LRU/MRU

-   substitui páginas a mais tempo sem uso
-   mantém uma lista de paginas na memória
-   usadas recentemente vão para o começo
-   lista é reordenada a cada referencia
-   substitui a ultima da lista
-   pode ser lidada usando um contador C na tabela que conta cada acesso
    a certa página. Assim, no page fault basta pegar o que tem menor C
-   outra maneira é usar uma matriz que conta o acesso as páginas dentro
    de uma moldura (frame). Assim, a linha com menor valor binário é a
    que foi usada menos recentemente

#### Aging

-   bit R indicam as páginas acessadas durante uma interrupção
-   cada bit R é relativo a uma página
-   cada página tem um contador associado
-   bit do contador deslocam a direita somando um quando seu bit R for 1
-   no page fault a página com menor contador é substituída


