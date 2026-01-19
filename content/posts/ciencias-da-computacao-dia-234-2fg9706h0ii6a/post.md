---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







A'.B + A.B' → isso representa uma XOR, para diminuir isso poderiamos
fazer: (A ⊕ B)

A' B' + A.B → representa uma XNOR(ou consequente), que é o mesmo que uma
XOR barrada (XOR') podendo ser reduzido para: (A⊙B)








#### exemplo de uso:

``` {code-block-mode="2" spellcheck="false" code-block-lang="plaintext"}
S = B'(A⊕C) + B(A⊙C)
S = B'(A⊕C) + B(A⊕C)'

X = A⊕C

S = B'X + BX'
S = B⊕X
S = B⊕A⊕C
```


