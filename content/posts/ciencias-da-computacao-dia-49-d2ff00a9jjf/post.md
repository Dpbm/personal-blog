---
title: Ciências
date: da tags: ["computer science"]
draft: false
---





![MARK I --- computerhistory.org](image_126.png)


Iniciando uma nova matéria








No quadragésimo nono dia de ciências da computação começamos a ver um
pouco sobre o que seria a matéria de **sistemas digitais** e já
começamos a ver os subsistemas que estão presentes nos computadores.








Antes de tudo, vamos pensar em como os sistemas que antes aqui
apresentei eram formados.

Em sua totalidade, os sistemas que aqui mostrei eram todos
**combinacionais**, ou seja a saída de cada circuito dependia
**exclusivamente** de suas entradas.

<figure>
<img src="image_127.png"
alt="um circuito somador. Duas entradas (A e B) ligadas a uma porta XOR e uma porta AND sendo a saída da porta XOR o resultado da soma, e a saída da porta AND o carry bit (o número que sobe quando a soma estoura a base, ou seja passa do número 1)" />
<figcaption>circuito somador</figcaption>
</figure>

Nesse exemplo de um circuito somador, o resultado do **SUM** e do
**CARRY** dependem de quais valores foram colocados em A e B, sendo
assim para cada valor que colocarmos no começo teremos saídas
diferentes.

Contudo, em circuitos **sequenciais** isso é um pouco diferente,
claramente as entradas importam para o resultado, mas aqui um outro
circuito é incorporado ao principal, sendo este novo um circuito de
memória, agora o resultado anterior é armazenado e pode ser usado para
entregar o resultado.

<figure>
<img src="image_128.png"
alt="o mesmo circuito somador mas, com dois flip-flops do tipo D nas saídas para armazenar os resultados" />
<figcaption>circuito somador com memória</figcaption>
</figure>

Aqui temos o mesmo circuito de antes, desta vez com dois flip-flops do
tipo D nas saídas de cada porta lógica, esses componentes adicionados
são usados para armazenar os resultados, para caso seja necessário
usá-los mais tarde basta pegar a saída Q (ou dependendo da aplicação
\~Q) e pronto, temos um valor armazenado e um circuito sequencial.








Outro tema que foi abordado no começo da aula mas de uma maneira
superficial foram os **autômatos**. Para quem é entusiasta na área de
computação, provavelmente já ouviu essa palavra em algum lugar, e para
explicar isso de uma maneira bem resumida, um autômato **"*é um grafo
dirigido que representa todos os estados e as possíveis transições entre
eles".***

<figure>
<img src="image_129.png"
alt="representação gráfica de um autômato, basicamente dois círculos representando os estados e algumas flechas interligando os círculos de várias maneiras, representando a transição de estados" />
<figcaption>autômato — Wikipedia</figcaption>
</figure>

Esse exemplo de autômato possui dois estados (S1 e S2), e as flechas
mostram as transições de estados.








### Principais subsistemas de um computador

Os computadores são compostos por diversos sistemas e subsistemas, aqui
listarei alguns que foram passados em aula.

**Memória principal (memória RAM)**

-   Armazena e lê dados de forma rápida, por ser de acesso randômico que
    permite acessar os dados diretamente pelo seu endereço, sem a
    necessidade da leitura das áreas da memória;
-   Volátil --- quando não há energia todos os dados são deletados
    permanentemente;
-   Tudo que está sendo executado possui uma instância nela (uma cópia);
-   Local onde os comandos dos programas são armazenados em **tempo de
    execução.**

**UES (unidade de entrada e saída I/O)**

-   Unidade responsável por controlar dispositivos de entrada e saída
    (mouse, teclado, monitor, etc.).

**UCP (unidade central de processamento CPU)**

-   Local onde tudo é executado e processado.

**Barramentos (BUS)**

-   Partes responsáveis por interligar os sistemas e transportar
    informações para eles.

**Barramento de Dados**

-   Barramento responsável por carregar os dados (valores de variáveis e
    semelhantes) para os sistemas;
-   Seu tamanho dirá a quantidade de bits que serão processados de uma
    vez, isso se ele estiver dentro do máximo que a arquitetura da UCP
    aguenta, em uma UCP de 64bits podemos ter um bus de dados de até
    64bits por exemplo.

**Barramento de endereços**

-   Leva os endereços de funções e afins para os sistemas e subsistemas
    do computador.

**Barramento de Controle**

-   Controla os instantes em que cada função deve ser executada.








### Subsistemas da UCP

Além de todos os sistemas que um computador possui, dentro de cada um
deles podemos listar diversos subsistemas que os compõem, e como a UCP é
a parte principal, listarei aqui alguns de seus subsistemas.

**Registradores gerais**

-   Guardam dados de entrada de programas.

**ULA (unidade lógica aritmética)**

-   Realiza cálculos e operações;
-   Possui duas entradas e uma saída.

**Registrador Acumulador**

-   Armazena os resultados obtidos pela ULA, temporariamente.

**Comparador de magnitude**

-   Responsável por executar funções de comparação, retornando
    verdadeiro ou falso para elas;
-   Usado para comandos IF e verificações em loops.

**Contador UP-DOWN**

-   Incrementa ou decrementa 1 do valor de entrada;
-   Usado para controle de interrupções de iterações e semelhantes.

**Multiplex**

-   Componente usado para encaminhar os bits para uma certa área da
    máquina dependendo de seu valor de entrada.

**Registrador de instrução**

-   Guarda o último comando executado pela UCP (a palavra desse comando,
    que seu tamanho depende exclusivamente do tamanho do barramento de
    dados)

**Contador de programa**

-   Parte responsável por dizer qual o endereço da próxima função a ser
    executada;
-   Possui em seu interior um registrador contador com uma entrada e uma
    saída;
-   O tamanho do endereço armazenado depende totalmente do tamanho do
    BUS de endereços.

**Registrador de Status**

-   Responsável por dizer qual o status de todas as atividades que podem
    ser realizadas pela máquina;
-   Contém **flags** da arquitetura como: Underflow, Overflow, Division
    by zero, etc;
-   Seu tamanho depende da quantidade de flags da arquitetura usada.


