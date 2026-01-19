---
title: Ciências da computação dia 89
date: 2025-04-28
tags: ["computer science"]
draft: false
---







### Linked List

-   Não precisa definir o tamanho em sua instância, sendo assim, a
    memória é alocada dinamicamente;
-   Para fazer inserções, você precisa se deslocar pela lista;
-   Cada elemento da lista (nó), possui dois elementos, o valor e o
    endereço do próximo nó, no caso do último elemento, como não possui
    próximo é atribuído NULL;
-   Nesse caso você tem problemas para acessar valores, uma vez que eles
    não possuem acesso direto aos seus endereços, ou seja, para acessar
    um certo nó *i* você precisa passar por todos os que antecedem *i* ;








### \*\* em C

Você utiliza \*\* em C para passar um endereço de um ponteiro

``` {code-block-mode="2" spellcheck="false" code-block-lang="c"}
int *s = malloc(1 * sizeof(int));
func(&s);
```

``` {code-block-mode="2" spellcheck="false" code-block-lang="c"}
void func(int **s){//...
```

Isso é útil quando você possui um pointer e você precisa modificar o que
está nele, assim você pode chamar sua função usando o &s.


