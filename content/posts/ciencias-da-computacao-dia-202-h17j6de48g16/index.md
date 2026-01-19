---
title: Ciências da computação dia 202
date: 2025-04-28
tags: ["computer science"]
draft: false
---







#### 4 componentes de um app android

-   atividade → o que está sendo executado no momento. ao transicionar
    de uma atividade (tela) para outra, a anterior é fechada. Para
    transicionar de uma atividade para outra é necessário criar uma
    intenção (Intent).
-   serviços → tudo que roda em plano de fundo
-   broadcast receivers → app é notificado quando algo ocorrer no
    sistema
-   provedores de conteúdo → API, BD, internet, etc.








#### Layout

-   constraint layout → posiciona um elemento baseado em outro
-   você pode ter diferentes tipos de layouts dentro de outro layout








#### Context

-   passa para o sistema android, quem está chamando uma certa função
    (tela)
-   isso deixa possível um app conversar com outro








#### Pilha de volta

-   toda vez que uma nova atividade é aberta, ela é empilhada
-   quando você clica para voltar a atividade do topo é desempilhada e
    você volta para a atividade anterior
-   A primeira atividade da pilha é o próprio Android
-   Para não deixar o usuário voltar à uma certa tela, você deve
    destrui-la


