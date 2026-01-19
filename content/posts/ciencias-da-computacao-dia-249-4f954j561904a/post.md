---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







#### Topologias

-   topologia barramento não era necessário todos os computadores
    estarem ligados para funcionar
-   a parte lógica da topologia estrela continua barramento








#### Tipos de rede

-   VLAN → rede LAN virtual, apenas dispositivos inseridos nessa rede
    virtual se comunicam
-   rede de difusão → os pacotes são enviados para todas as máquinas da
    mesma rede, contendo dentro dele a origem e o destino, assim se a
    placa de rede de cada máquina verifica se o destino é a maquina em
    questão, se for ele pega e senão apenas descarta. Isso é usado para
    redes menores (locais geralmente). Tanto na ida quando na volta dos
    dados.
-   Broadcasting → Sinais são enviados para todos os dispositivos da
    rede. Muito usado para compartilhar coisas em rede, impressoras,
    pastas, etc.
-   Multicasting → Transmite os sinais para todas as máquinas de um
    grupo especifico (mais de 1 máquina)
-   Unicasting → Há apenas um transmissor e um receptor
-   rede ponto a ponto → rede Unicast usada ara para transmitir de uma
    máquina a outra por longas distâncias.
-   PAN(até 1m) → Bluetooth, por exemplo, uma rede pequena, no máximo
    uma mesa de trabalho
-   LAN (até 1km) → redes locais, casa, campus, etc
-   MAN (até 10km) → cidades (tv por exemplo). Necessário um local que
    concentra e distribui a rede para caixas de junção, que vão para
    casas, estabelecimentos, etc.
-   WAN (até 1000km) → regiões geográficas. Composta por Hosts e
    conectadas por subredes (ISPs, empresas de telefonia, etc.)
-   internet (acima de 1000km)








#### Dispositivos

-   Switch é gerenciável, com ele você pode criar uma VLAN, mandar
    desligar certas portas, etc.
-   RJ-11 é usado para telefonia (aceita apenas 2 pares, ou quatro fios)
-   Cabo categoria 4 era Ethernet (max 10 Mbps)
-   Cabo categoria 5 é fastethernet
-   Cabo categoria 5e é Gigabit half duplex, ou seja, ele carrega dados
    em Gigabit por todos os pares, sendo assim, para trafegar Gigabit eu
    só posso ou mandar ou receber, não os dois ao mesmo tempo
-   Cabo categoria 6 é Gigabit full duplex, ou seja, os dados trafegam
    em Gigabit por apenas dois dos pares, podendo assim enviar e receber
    ao mesmo tempo
-   Quando se pensa em hardware para redes, pensa-se em como transmitir
    os dados e em que escala
-   se a placa de rede estiver em modo promiscuous, ela consegue
    processar todos os pacotes, mesmo não sendo o destinado a ela (rede
    de difusão)
-   Roteador → interliga duas redes lógicas diferentes
-   Switch → interliga dispositivos físicos
-   Para empresas o roteador só faz rota, DHCP é feito por outro
    dispositivo








#### Unidades

-   em redes não são usados bytes, mas sim bits
-   1Mbps = 1000000 bits por segundo








#### Componentes de Subrede

-   interligam o mundo
-   possuem linhas de transmissão para ISPs (usando cobre, fibra óptica,
    radio, torres de transmissão, satélites, etc.)
-   possuem elementos de comutação → computadores que interligam 3 ou
    mais linhas de transmissão
-   Há também cabos submarinos (de fibra óptica) interligando
    continentes, usando amplificadores para alcançar essas longas
    distâncias. O mesmo cabo também é usado para telefone.
-   PPOe → Uma espécie de Usario e senha que te deixa acessar a rede
    provida pelo ISP
-   gateway padrão → IP do roteador. Caso você tente acessar um IP que
    não está dentro da subrede, o padrão é esse ip ser redirecionado
    para o roteador que se encarregará de encontrar ele fora da rede
-   Quando você tenta acessar algo de fora da rede, o maximo que ele
    salta pra tentar encontrar o IP é 30
-   Para haver conexão é necessário ter conexão física e lógica








#### Máscara de subrede

-   /24 no fim do IP significa que o final da máscara é 0
-   255 é o valor máximo para cada octeto, assim como 0 é o mínimo
-   cada 255 na mascará significa que o número ali não mudara nos IPs, e
    o 0 significa que aquele octeto pode ir de 1--254
-   final .0 e .255 dos IPS são reservados
-   X.X.X.255 é o endereço de broadcasting
-   X.X.X.0 é o IP de rede








#### Protocolos

-   ICMP → usado para verificar os dispositivos na rede e verificar o
    tempo de resposta, nome, etc.


