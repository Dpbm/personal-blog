---
title: Ciências da computação dia 123
date: 2025-04-28
tags: ["computer science"]
draft: false
---







### Interface

-   Serve como um contrato;
-   Define o que as classes que as estendem devem implementar,
    obrigatoriamente.








### List

-   interface que define como implementar a List;
-   subinterface do java collections;
-   implementações: List, ArrayList, LinkedList, Vector, etc.;
-   Não é necessário setar o tamanho ao instanciar;
-   Diferentes implementações podem diferir nos algoritmos por trás;

``` {code-block-mode="2" spellcheck="false" code-block-lang="java"}
import java.util.ArrayList;
//....
ArrayList<Integer> numeros = new ArrayList<Integer>();
//Integer é uma classe java, definida para valores inteiros
```


