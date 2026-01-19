---
title: Ciências da computação dia 64
date: 2025-04-28
tags: ["computer science"]
draft: false
---







Na programação, recursão é basicamente uma função que chama ela mesma.
Fazendo uma analogia com a vida real, podemos pensar em, por exemplo,
uma Matrioska, onde dentro da primeira boneca há outra dentro, que há
outra dentro, e assim sucessivamente.

<figure>
<img src="image_148.png"
alt="Matrioska — “uma série de bonecas de tamanhos variados que são colocadas uma dentro das outras” (significados.com.br)" />
<figcaption>significados.com.br</figcaption>
</figure>

Com essa analogia podemos pensar como isso na programação pode ser
aplicado.

De maneira geral, a recursão é muito usada quando queremos quebrar um
problema grande em pequenos pedaços. Um exemplo muito comum utilizado
para o aprendizado de recursão, são os números fatoriais.

De maneira simplificada, o fatorial de um número é a multiplicação deste
por seus antecessores, sendo assim o fatorial de 4 é 4 \* 3 \* 2 \* 1 =
24. Repare bem que todo fatorial segue um padrão, primeiro fazemos a
primeira multiplicação e assim sucessivamente até o número 1

### (((4 \* 3) \* 2) \* 1)

De uma maneira mais elaborada, podemos pensar nessa mesma equação como
um fatorial de um fatorial

### fatorial(4)

### fatorial(4 \* fatorial(3))

### fatorial(4 \* fatorial(3 \* fatorial(2)))

### fatorial(4 \* fatorial(3 \* fatorial(2 \* fatorial(1))))

Ao perceber isso, descobrimos que para esse problema, a recursão é muito
bem vinda.

Poderiamos fazer da forma mais padrão usando um for loop, por exemplo

    fatorial = 4
    for i in range(fatorial - 1, 1, -1):
        fatorial *= i
    print(fatorial)

Mas como vimos que a recursão pode fazer um bom trabalho para nós.
Podemos sair deste código, para este

    def fatorial(n):
        if(n == 1):
            return 1
        return n * fatorial(n - 1)
    fatorial(4)

Os dois códigos produzem o mesmo resultado, mas o exemplo utilizando da
recursão é muito mais agradável aos olhos e mais simples de ler, no
entanto, para alguns programadores, isso pode parecer um tanto
assustador no começo e pode ser um pouco trabalhoso de debugar e
entender possíveis problemas, ou simplesmente como a função age.

Vamos olhar o que acontece com nosso valor em cada iteração:

primeiro a função é chamada com o valor 4

### fatorial(4)

após esse valor ir para a função ele passa direto pelo if(curiosidade:
esse if é chamado de condição base e toda função recursiva deve ter uma
desa, já que se não houver isso seria um loop eterno), já que o valor de
n é diferente de 1 e vai para o nosso return, fazendo algo assim

### 4 \* fatorial(3)

com isso uma nova instância do fatorial é usada, e mais uma vez passará
pela condição base e retornará uma nova instância dessa maneira

### 3 \* fatorial(2)

Mais uma vez passará para o return padrão

### 2 \* fatorial(1)

nesse último fatorial, temos que o fatorial de 1 é 1, então ele
retornará 1 e assim podemos voltar nossa equação e ir resolvendo, sendo
assim

### 2 \* fatorial(1) = 2

### 3 \* fatorial(2) = 3 \* 2 = 6

### 4 \* fatorial(3) = 4 \* 6 = 24

Pronto, conseguimos utilizar recursão para resolver este problema :)








Mesmo parecendo mágica, a recursão nem sempre é o melhor caminho, além
de levar um tempo a mais para entender a função e ser mais difícil de
dar manutenção no código, a recursão pode demorar mais e tomar mais
memória para certos problemas. Sendo assim, quando você estiver a
procura de um algoritmo, coloque na balança se de fato vale a pena
implementar uma recursão ou não.


