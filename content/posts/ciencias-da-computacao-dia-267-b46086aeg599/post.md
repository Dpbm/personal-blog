---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







#### WWAMS

-   para telefones
-   2g → cdma x gsm
-   3g → cdma2000 x umts/hspa
-   4g → (baseado em IP) wimax x LTE
-   5g → agora tem outras tecnologias como beamforming, massive MIMO,
    etc.
-   LTE advanced(4g+ ou 4.5g) → mantém 4g em diversas frequências e
    depois junta em uma única








#### Camadas

-   redes são organizadas em camadas (pilha de camadas)
-   O numero, nome, conteúdo e função de cada camada deferência uma rede
    de outra
-   camada N de A se comunica com a N de B (comunicação lógica) → isso
    quer dizer q os protocolos para essas camadas são as mesmas
-   regras e convenções de cada camada são conhecidas como o protocolo
    da camada n
-   comunicação física ocorre entre as camadas de um mesmo host (pra
    cima ou para baixo)
-   dados de um host é passado de uma camada mais alta até chegar ao
    meio físico e depois sobe do mais baixo ao mais alto no host alvo
-   conjunto de camadas e protocolos definem a arquitetura de uma rede
-   lista de protocolos é chamada de pilha de protocolos
-   ao passar por cada camada (de cima para baixo) mais dados são
    adicionados. Ao fazer o caminho inverso os dados são removidos e a
    mensagem cru começa a aparecer novamente
-   toda camada precisa identificar receptor e emissor (endereçamento)
-   camadas precisam controlar error, pedindo reenvio caso necessário
    (no modelo TCP)
-   necessário possuir controle de fluxo, já que o emissor pode enviar
    mais pacotes do que um receptor mais lento pode processar
-   necessário traçar o roteamento. algumas vezes isso é feito por mais
    de duas camadas

![[wikipedia](https://en.wikipedia.org/wiki/OSI_model)](image_438.png)

#### Componentes de uma camada

-   pares (peers) → software, hardware, humanos, etc. de uma mesma
    camada em dois hosts diferentes (utilizando mesmo protocolo). Pares
    não se comunicam diretamente, para isso é necessário passar até o
    meio físico e depois subir a pilha de camadas do outro host.
-   interface → usado para comunicar de uma camada mais baixa com uma
    mais alta (ou vice versa). Isso define quais informações são
    passadas de uma para a outra, definindo também as operações de cada
    uma

![[aws](https://aws.amazon.com/what-is/osi-model/)](image_439.png)

![[networkengineering.stackexchange](https://networkengineering.stackexchange.com/questions/13364/osi-model-and-physical-location-of-the-layers)](image_440.png)

#### Serviços

-   utilizando o modelo de camadas, é possível fornecer vários serviços
-   serviço orientado a conexão(TCP) → antes de usar o serviço, os hosts
    trocam informações previamente para fazer uma conexão (geram
    contratos de como a comunicação será feita (limites de pacotes,
    etc)). É possível verificar se a mensagem chegou, e caso negativo é
    possível pedir para reenviar
-   serviço não orientado a conexão (UDP) → cada mensagem possui o
    endereço do remetente e do destinatário. Quem enviou não sabe se a
    mensagem chegou de fato
-   serviços são formados por primitivas → operações que o usuário pode
    fazer com o serviço.
-   Primitivas baiscas para um serviço → LISTEN, espera uma entrada(ouve
    em uma porta), CONNECT, conecta com um par, RECEIVE, espera por uma
    mensagem, SEND, envia mensagens e DISCONNECT, encerra conexão.

#### Modelo CLIENT-SERVER

1.  solicita conexão (TCP)
2.  ACK (servidor diz que foi recebida a solicitação)
3.  envia dados
4.  recebe as respostas
5.  pede a desconexão
6.  desconecta

![[wikipedia](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)](image_441.png)


