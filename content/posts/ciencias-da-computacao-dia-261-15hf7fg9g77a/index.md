---
title: Ciências da computação dia 261
date: 2025-04-28
tags: ["computer science"]
draft: false
---







#### Tratamento de interrupção

1.  empilha o contador de programa atual
2.  carrega o novo contador de programa
3.  procedimento em assembly salva os registradores
4.  procedimento em assembly configura uma nova pilha
5.  executa serviço de interrupção escrito em C (lê e armazena a
    entrada)
6.  procedimento em C volta para o procedimento em asm
7.  procedimento em assembly inicia o novo processo








#### Classificação de processos

-   CPU Bound
-   I/O Bound
-   Sabendo o tipo do processo, é possível implementar rotinas no
    escalonador para otimizar o tempo ocioso
-   Para otimizar é possível utilizar: buffer, paralelismo real, etc.

#### CPU Bound

-   utiliza muita CPU
-   tempo de execução é dado por ciclos da CPU que foram(serão) usados
-   tem sensibilidade ao escalonador (performance depende dele, já que
    ele dirá quando o processo pode usar a CPU)

#### I/O Bound

-   realiza muito I/O
-   tempo de execução dado pela operação de Entrada e saída
-   é menos afetado pelo escalonador
-   tempo de espera da entrada ou saída é o limitante
-   Banco de dados, web server, etc.








#### Escalonador

-   sua função é não deixar a CPU ociosa
-   mudança de contexto (processo) → tarefa custosa
-   o escalonamento é necessário quando → um processo é criado,
    bloqueado e terminou a execução.
-   quando há um bloqueio, o escalonador pode decidir continuar
    esperando pelo I/O ou seguir para outro processo mais rápido

#### Tipos de algoritmos do Escalonador

-   Preemptivo → suspende o processo que está sendo executado
-   Não preemptivo → executa tudo até o programa acabar ou houver um
    bloqueio

#### Preemptivo

-   muita troca de contexto
-   suporta melhor a responsividade
-   processos com prioridade são executados na hora
-   fila prioritária
-   bom para sistemas em tempo real

#### Não preemptivo

-   era usado em sistemas uni-core
-   há menos tempo desperdiçado devido a menor troca de contexto
-   mais previsível o tempo de execução

#### Características para um Escalonador

-   justiça → cada processo tem uma parcela de tempo justa para usar a
    CPU
-   balanceamento → diminuir a ociosidade do sistema
-   cumprimento da política do sistema → uso da prioridade, etc.
-   deve ser encaixar ao tipo de ambiente (batch, interativo, etc.)

#### Sistemas BATCH

-   vários dados ao mesmo tempo para processar
-   sem muito I/O
-   necessário maximizar o uso da CPU
-   não precisa de respostas rápidas
-   pouca troca de contexto
-   escalonador vai para aquele com menor tempo de execução ou menor uso
    de memória
-   escalonador também pode seguir a ordem do user ou através da pilha
    de tarefas

#### Sistemas Interativos

-   alta interação com o user
-   alta troca de contexto
-   responsividade para o user
-   escalonador precisa se adaptar a carga de trabalho e manter
    equilíbrio entre responsividade e uso de CPU
-   escalonador deve ter baixo tempo de resposta (fatias de tempo menor
    pra cada um), preempção (dar chance para outro processo executar),
    prioridade para processos interativos, aumentar a prioridade para
    processo a muito tempo na fila

#### Sistemas de tempo real

-   tarefas precisam ser executadas dentro do deadline
-   maior tempo para cada processo








#### Jitter

-   variação entre o tempo de resposta e o tempo ideal

#### Overhead

-   tempo não utilizado
-   troca de contexto








#### Algoritmos de escalonador para sistemas BATCH

-   three level
-   FIFO
-   Shortest job first
-   shortest remaining time next

#### Three Level

-   3 escalonadores (CPU, memória e admissão)
-   admissão → processos menores primeiro; leva em consideração menor
    acesso a CPU e maior uso de I/O
-   memória → verifica quanto tempo está esperando, tempo de CPU,
    tamanho, importância
-   CPU → executa o próximo

#### FIFO

-   segue a ordem de requisição dos processos
-   não preemptivo
-   vai empilhando os processos

#### Shortest Job First

-   menor é executado primeiro
-   não preemptivo
-   menor turnaround médio

> Turnaround médio é o tempo médio de execução de todos os processos.
> Nesse método, vê-se a combinação de processos que minimizam o tempo.

> ex:

> job 1--10t

> job 2--20t

> job 3--5t

> job 4--2t

> A:

> Job1 → job2 → job3 → job4

> 10 + (20 + 10) + (20 + 10 + 5) + (20 + 10 + 5 + 2) →112/4 →28

> B:

> job4 → job3 → job1 → job2

> 2 + (2+5) + (2+5+10) + (2+5+10+20) → 63/4 → 15.75

> Dessa forma, colocando os jobs em ordem crescente de tempo, temos o
> melhor turnaround médio

#### Shortest remaining time next

-   preemptivo
-   da prioridade para processos com menor tempo de execução restante
-   processos longos vão demorar muito para serem escolhidos para usar a
    CPU


