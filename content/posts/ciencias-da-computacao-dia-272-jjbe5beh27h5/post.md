---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







#### Threads em JAVA

-   gerenciado pela JVM
-   modo user
-   pode ser criado estendendo Threads ou implementando um Runnable
-   todo app java possui no mínimo 1 thread (main thread)
-   main pode criar novas threads
-   cada thread é uma instância da classe Thread
-   classe precisa ter o método run
-   .start() → inicia o thread
-   .sleep() → pausa o thread por um certo tempo
-   .join() → espera o thread acabar para rodar o resto do fluxo
    principal
-   .interrup() → para o thread
-   .interrupted() → checa se o thread foi interrompido
-   ao usar memória compartilhada, é interessante o primeiro que
    utilizar bloquear o recurso, para não haver sobreescrita

#### JVM

-   JVM suporta um único processo (programa)
-   JVM possui → loader, verifier e o runtime interpreter


