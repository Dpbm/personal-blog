---
title: Ciências
date: da tags: ["computer science"]
draft: false
---






constantes em C

Para criar structs em c você pode fazer:

``` {code-block-mode="2" spellcheck="false" code-block-lang="c"}
typedef struct {
//...
} Name;
```

ou ainda

``` {code-block-mode="2" spellcheck="false" code-block-lang="c"}
struct{
//...
} Name;

typedef struct Name Name;
```

Após instanciar uma struct você pode acessar os valores usando

Name.atributo

ou se você instanciar usando um pointer

Name-\>atributo








### Lista contígua

-   Cada elemento tem uma posição especifica. Com isso, tenho acesso
    direto ao elemento que preciso, uma vez sabendo sua posição
-   Possui tamanho fixo, preestabelecido.
-   Cada elemento é chamado de nó.
-   suscetível à overflow ou desperdício de espaço.








Para definir constantes em C faça:

``` {code-block-mode="2" spellcheck="false" code-block-lang="c"}
#define NAME valor
```


