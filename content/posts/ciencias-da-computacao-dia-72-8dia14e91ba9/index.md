---
title: Ciências da computação dia 72
date: 2025-04-28
tags: ["computer science"]
draft: false
---







Para terminar a matéria de Sistemas digitias, nos foi passado alguns
circuitos de registradores e suas devidas nomenclaturas.








### Nomenclatura

Nosso professor passou para nós uma nomenclatura, não sei se é algo
"oficial"/padrão, mas ela funciona da seguinte maneira:

**R (indicando que é um registrador)**

**e (indicando entrada)**

**S e ou P ( S para entrada serial e P para entrada paralela, podendo
ser uma combinação das duas)**

**s (indicando saída)**

**S e ou P ( S para saída serial e P para saída paralela, podendo ser
uma combinação das duas)**

**D ou E ou B (D para descolamento à direita, E para deslocamento à
esquerda e B indicando para ambos os lados)**

**A (indicando se há a opção de saída em anel)**

**B (indicando que o anel também é bidirecional)**

Sendo assim, se quisermos dar um nome à um registrador paralelo com
saída serial em anel, a sigla ficaria ***RePsSA.***








### Montando os circuitos

#### **Registrador com entrada serial, saída serial com deslocamento à direita**

em um registrador com deslocamento a direita basta interligar a saída de
um flip-flop com a entrada do próximo

![ReSsSD](image_164.png)

#### Registrador com entrada paralela e saída paralela

aqui todas as entradas e saídas são independentes dos outros flip-flops

![RePsP](image_165.png)

#### **Registrador com entrada serial, saída serial com deslocamento à esquerda**

![ReSsSE](image_166.png)

#### Registrador com entrada serial, saída serial com anel

aqui antes de todos os flip-flops, há um multiplexador, do qual
dependendo de sua entrada a saída do circuito pode ser reutilizada, como
uma forma de não perder informações do circuito.

Neste caso estamos utilizando o anel do tipo **reto**, ou seja a saída
padrão do flip-flop que está voltando para o circuito, caso a saída
negada que estivesse entrando no circuito novamente esse seria do tipo
**trançado**

![ReSsSA](image_167.png)

#### Registrador com entrada serial, saída paralela, bidirecional

nesse caso, utilizamos vários multiplexadores para controlar a direção
das informações.

![ReSsPB](image_168.png)

Para construir registradores mais complexos, você pode combinar esses
circuitos mostrados acima. Além disso, não se prenda só aos circuitos
que mostrei, você pode encontrar N maneiras de fazer esses circuitos,
aqui eu quis mostrar apenas algumas opções que você pode ter ao
construir um registrador síncrono(ou seja, todos os componentes
compartilham o mesmo clock).

Se você acredita que isso é inútil, lembre-se da aula sobre
arquiteturas, e como os registradores estão presentes nas partes mais
cruciais do computador, como memória principal e UCP.

se não se recorda, a ULA possui um circuito chamado registrador geral,
do qual armazenas os inputs de uma certa função lógica, o circuito desse
registrador é o seguinte:

![ReSPsSPB](image_169.png)








### Notas

os registradores, além de serem usados para armazenar informações,
também podem ser utilizados para algumas operações, como multiplicação e
divisão por 2.

Para a multiplicação basta usar um registrador com deslocamento para a
esquerda, e para a divisão basta deslocar à direita.


