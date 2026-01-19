---
title: Ciências da computação dia 163
date: 2025-04-28
tags: ["computer science"]
draft: false
---







#### Autômato finito não determinístico

-   transições são ambíguas;
-   Vários caminhos para um mesmo símbolo;
-   não é obrigatório adicionar transições para todos os símbolos;
-   para checar a validade da entrada é necessário analisar todos os
    caminhos usando uma árvore;
-   Para ser válido precisa parar em pelo menos um estado final dentre
    todas as possibilidades de caminhos;

![exemplo autômato](image_251.png)

![verificando o valor 1100 usando uma árvore](image_252.png)

como tivemos um estado final ao testar o valor 1100, esse valor é válido

![representação em formato de tabela](image_253.png)

para representar como uma tabela, agora temos um conjunto de estados em
cada transição, e também temos conjuntos vazios quando não há transição.


