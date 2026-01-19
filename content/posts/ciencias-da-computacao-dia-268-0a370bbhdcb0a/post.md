---
title: Ciências da computação dia 268
date: 2025-04-28
tags: ["computer science"]
draft: false
---







#### Threads

-   fluxo de controle dentro de um processo (linha de execução)
-   possui um inicio e um fim, como um programa em sequência
-   permite paralelismo → permite utilizar vários cores
-   permite que o programa seja responsivo → faz com que outras tarefas
    continuem em execução
-   Pode ajudar a simplificar o código, dividindo-o em partes menores e
    independentes
-   pode usar memória compartilhada para trocada de informações e etc
-   pode haver conexão inter-threads (usando memória compartilhada e
    mecanismos de sincronia)
-   representa a execução de um programa também
-   menor unidade agendavel de um processo
-   todos os threads dentro de um processo compartilham dos mesmo
    recursos do processo
-   executado a partir de um processo
-   mais leve e eficiente que processos, já que compartilha recursos ao
    invés de pedir novos
-   contexto é menor, já que utiliza apenas parte do contexto do
    processo em si
-   Troca de contexto é mais rápida e eficiente
-   criação é mais rápida
-   contexto é composto por → conjunto de registradores, pilha, PC,
    ponteiro para tabela de processos, ponteiro para arquivos, etc.
    Apenas o especifico para cada tarefa de cada thread

#### Estados de um thread

-   new → criado, mas não iniciado
-   runnable → pronto para ser executado
-   running → está em execução
-   waiting → aguardando recurso externo
-   terminated → acabou a execução

#### Transições de estados de um thread

-   execução para aguardando
-   aguardando para pronto
-   execução para terminated
-   execução para pronto → foi interrompido

![[geeksforgeeks](https://www.geeksforgeeks.org/lifecycle-and-states-of-a-thread-in-java/)](image_445.png)

### Tipos de threads

#### Modo user

-   implementado na zona do user
-   usa libs locais
-   virtualiza as threads usando código
-   não interage com o kernel
-   Ao usar I/O o processo inteiro é bloqueado
-   escalonador só toma conta do processo (não sabe que há threads a
    serem executadas)
-   cada processo tem sua tabela de threads
-   cada processo usa seu algoritmo para escalonar threads
-   menor overhead do kernel
-   não usa os multi-cores com as threads
-   melhor para processos CPU bound

#### Modo Kernel

-   threads são geridas pelo SO
-   troca de contexto é mais lenta
-   apenas uma thread é bloqueada ao usar I/O
-   aproveita os multi-cores
-   mais portável
-   mais escalável
-   mais complexo de implementar
-   melhor para processos I/O bound








#### Processo

-   cada um tem sua memória virtual endereçável
-   possui contexto maior → PC, pilha, tabela de paginas, etc.
-   um processo único possui no mínimo uma thread (uma linha de
    execução)
-   usa IPC ou RPC para se comunicarem entre si
-   melhores para isolar tarefas
-   mais seguros por terem um espaço de memória diferente para cada um
    (são mais isolados entre si)


