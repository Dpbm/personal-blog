---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







-   antes da década de 90 os aparelhos não possuíam protocolos para
    padronizar a comunicação entre dispositivos








#### Protocolos

-   SMTP → protocolo para entrega de emails
-   RDP → protocolo para área remota do windows
-   DHCP → é responsável por entregar os IPs para as maquinas,
    garantindo que não haja conflito
-   SNMP → protocolo usado para coletar e enviar dados dos dispositivos
    em uma rede








#### Tipos de redes

-   PAN → tipo de rede que está sendo desenvolvida para sensores, e
    coisas do tipo, para uma única pessoa
-   CAN → rede para veículos








#### Dispositivos

-   Hub e switch tem a mesma função, só que o HUB divide a banda entre
    os dispositivos conectados, já o switch entrega toda a banda para
    todos os dispositivos (nominal)
-   Nos dispositivos vem marcado 10/100/100. 10 significa que o
    dispositivo suporta Ethernet (máximo 10Mib/s); 100 significa que o
    dispositivo suporta Fast-Ethernet (máximo de 100 Mib/s); 1000
    significa que o dispositivo suporta Giga-Ethernet (máximo de 1000
    Mibs/s). Hoje em dia existem outras larguras de banda também, com
    10Giga Ethernet, etc. Mas esse é geralmente para servidores e alguns
    dispositivos móveis (notebooks)
-   Saber se seu dispositivos suporta apenas Ethernet, ou Fast-Ethernet
    ou ainda Giga-Ethernet, é importante para saber se seu plano vai ser
    aproveitado pelos seus aparelhos, uma vez q caso você tenha um plano
    de 1000Mb, mas seu roteador é Fast-Ethernet, você só conseguirá usar
    100Mb (você sempre será limitado pelo menor valor)
-   Cabo categoria 5e consegue trafegar Gigabit, mas não de forma pura,
    ou seja, só consegue trafegar os dados em 4 dos cabos, e não nos 8.
    A única maneira dele trafegar Gigabit é se a rede não estiver
    fazendo mais nada, só recebendo ou enviando para um único ponto
-   Cabo de categorial 6 consegue trafegar Gigabit puro
-   Nos dispositivos wireless, algumas letras são usadas para descrever
    a velocidade (a/b/c/g/n/ac, etc.)
-   wifi com menor frequência consegue chegar mais longe, wifi com maior
    frequência consegue trafegar mais coisas e uma curta distância.
-   cabo categoria 5 consegue 10Gigabit
-   existem padrões para comprimento, conectores(802A ou 802B), como
    devem ser trançados
-   existem outros conectores além do RJ-45, para categorias diferentes
    de cabos (cabo 5e funciona com RJ-45)
-   comprimento mínimo de cabo é 12m








#### Modelo Cliente-Servidor

-   Uma rede interliga o cliente a um servidor
-   Um processo na máquina do cliente faz um requisição para o servidor
    e um processo rodando o servidor responde a essa requisição e
    devolve o resultado via rede








#### Tipos de Topologia

-   Física → descreve como a rede é ligada fisicamente
-   Lógica → regras para envio e recebimento de pacotes (protocolos)








#### Topologia Barramento

-   mais antiga e não é usada mais
-   utiliza um barramento de cabo coaxial
-   máquinas são ligadas em série
-   em cada extremidade há um terminador (resistor)
-   vantagens: elimina o uso de switches
-   desvantagens: caso uma placa de rede de problema, todo o resto para
    de funcionar
-   Não há possibilidade de remendar o cabo coaxial com outros cabos, já
    que a placa de rede perceberá a mudança de impedância
-   chegava no máximo a 10Mib/s (Ethernet)
-   Usava repetidores, bridges e interfaces (placas de rede)
-   Bridge era usado para duas redes funcionarem como uma

![[geeksforgeeks](https://www.geeksforgeeks.org/advantages-and-disadvantages-of-bus-topology/)](image_395.png)








#### Topologia estrela

-   cada máquina na rede possui uma interface de rede (placa de rede),
    interligados por pares trançados, ligados a um hub/switch
-   dispositivos são os hubs e switches

![[wikipedia](https://en.wikipedia.org/wiki/Star_network)](image_396.png)


