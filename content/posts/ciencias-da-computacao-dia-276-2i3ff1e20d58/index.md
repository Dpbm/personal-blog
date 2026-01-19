---
title: Ciências da computação dia 276
date: 2025-04-28
tags: ["computer science"]
draft: false
---







#### Interrupção

-   evento externo que faz com que a execução pare para executar uma
    rotina de interrupção
-   após o tratamento ela volta
-   quando menos, melhor








### Maneiras de fazer processos Paralelos

#### co-routines

-   semelhante a sub rotinas (métodos)
-   marca vários pontos intermediários de entrada e saída da rotina
-   endereçamento especifico do tipo TRANSFER
-   não possui retorno
-   ao chamar uma co rotina ela vai seguindo até encontrar um TRANSFER
-   executa um pequeno código e depois volta
-   não bloqueante
-   async/await

#### FORK/JOIN

1.  cria-se um novo processo (FORK)

2\. segue executando o pai

3\. quando necessário executa-se um JOIN para aguardar a resposta do
filho

4\. após o termino o pai volta a ser executado(sincronizado)

#### COBEGIN/COEND

-   estrutura de declaração concorrente
-   declaração interior ao block COBEGIN/COEND são concorrentes
-   possui vários blocos desse dentro do código principal BEGIN/END,
    todos concorrentes entre si
-   mais antigo

#### Processo concorrente

-   cada trecho é concorrente
-   poderia utilizar qualquer um dos métodos acima
-   deixa claro que as partes são concorrentes

### Comunicação entre processos

-   processos precisam estar sincronizados
-   variáveis compartilhadas na memória ou troca de mensagem

#### condição de corrida

-   dois ou mais processos estão lendo/escrevendo na memória
    compartilhada ao mesmo tempo
-   duvida de quem deve usar essa memória primeiro
-   Região critica(RC) → parte do código que manipula um recurso
    compartilhado
-   para evitar problemas com a memória compartilhada, um dos processos
    deve executar sua região critica por completo, antes de chavear para
    outro
-   exclusão mutua → proibir que mais de um processo manipule dados
    compartilhados ao mesmo tempo
-   dois processos não podem estar em suas RC ao mesmo tempo
-   um processo não deve esperar ou bloquear outro em sua RC
-   métodos para resolver isso → esperada ocupada (busy waiting),
    sleep/wake up, semáforo, monitor, passagem de mensagem

### Busy Waiting

-   checa constantemente por um valor
-   não bloqueante
-   possui desperdício de CPU
-   pode causar espera perpetua (deadlock)

#### Desabilitar interrupções

-   desabilita interrupções ao chegar na RC, depois que sair ele libera
-   não é seguro, já que não é garantido que ele vai habilitar
    novamente, podendo não ser finalizado

#### Lock

-   variável compartilhada é usada para marcar se um processo esta ou
    não na RC
-   não é tão bom, uma vez que utiliza mais memória compartilhada,
    podendo o scheduler mudar para outra parte antes de mudar a variável

#### Alternância estrita

-   variável de controle é compartilhada entre processo, dizendo qual
    pode entrar na RC
-   se ele não pode ele fica num loop até conseguir usar
-   Para apenas 2 processos
-   Possui baixo desempenho devido ao loop
-   não lida com erros → se der algum erro o outro processo fica num
    loop eterno

#### Solução de Peterson

-   para 2 processo também
-   mantém uma lista de processos interessados
-   ao entrar na RC, ele atualiza o número do próximo processo a ser
    executado
-   lista de interessados marca cada processo e diz se cada um está
    rodando ou não
-   laço fica aguardando o processo poder acessar a RC
-   Possui muito consumo de CPU

#### TSL

-   comando em assembly
-   mesmo principio da solução de Peterson
-   test and set lock
-   utiliza registradores do hardware
-   operação individual (vai executar de uma vez)
-   lock é compartilhado


