---
title: Ciências
date: da tags: ["computer science"]
draft: false
---






subtração e a base hexadecimal








### Hexadecimal

na base hexadecimal temos 16 dígitos → 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A,
B, C, D, E, F

sendo

A → 10

B → 11

C → 12

D → 13

E → 14

F → 15

**Soma e conversão para decimal**

para a soma com hexa fazemos:

exemplo:

5C + 4D

C + D → 12 + 13 → 25

25--16(numero da base) → 9

desce o 9 e sobe 1 pois a base estourou

5 + 4 + 1(que subiu) → 10 → A

sendo assim a resposta é

A9

que convertendo para decimal

A \* (16¹) + 9 \* (16⁰)

10 \* 16 + 9 \* 1 = 169

**Outra maneira de converter hexa para decimal**

outra maneira de converter é a mesma para binário, dessa vez trocando a
multiplicação por 2 para 16

*A9*

10 \* 16 = 160

160 + 9 = 169

*5CA*

5 \* 16 = 80

80 + 12 = 92

92 \* 16 = 1472

1472 + 10 = 1482

**conversão decimal para hexa**

faça o mesmo algoritmo de divisões sucessivas nesse caso dividindo por
16

120 / 16 = 7 resto (8)

7 / 16 = 0 resto (7)

78(hexa) = 120(decimal)

**conversão binário para hexadecimal**

sabendo que cada digito de hexa utiliza quatro bits divida o binário em
blocos de 4, começando do menos significativo para o mais significativo,
preenchendo com zeros caso o ultimo bloco não possua 4 dígitos

110001001

0001 1000 1001

agora transforme

1 8 9 (hexa) = 110001001(binário)

> obs:

> no caso de números com vírgula faça o mesmo para a parte inteira, mas
> na parte fracionada comece do mais significativo e complete com os
> zeros no lado direito do número

> 10001,01101

> 0001 0001, 0110 1000

> agora converta

> 11, 68

> obs2

> números na base 8(octal, dígitos de 0--7) possuem 3 bits

**subtração de binários**

para fazer a subtração quando 1--1, 0--0 o resultado será 0 caso 1--0 o
resultado será 1, mas quando isso não for possível você pode fazer o
mesmo que você faz normalmente com números na base decimal, no entanto,
ao invés de passar 1 você passa 2

101--10

1--0 = 0

0--1 → empresta 2 → 2--0--1 = 1

1 (emprestou para o do lado) ficou 0

resultado:

10

outra maneira interessante de se fazer é a seguinte

toda vez que você precisar emprestar um valor, você soma a base com o
valor de cima e faz a subtração e o valor do lado você subtrai 1 e faz a
subtração total, exemplo em decimal:

25--19

5--9 → empresta a base → 10 + 5→ 15 → 15--9 =6

2--1 → emprestou → 2--1 → 1--1 = 0

resultado

06

agora em binário

1001--0011

1--1 = 0

0--1 → empresta a base 2- 0--1 → 1

0--0 → emprestou ficou 1 → 0-1--0 → empresa 2 → 2--0--1--0 → 1

1--0 →emprestou ficou 1 → 1--1- 0 → 0

resposta 0110


