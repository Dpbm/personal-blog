---
title: Ciências da computação dia 273
date: 2025-04-28
tags: ["computer science"]
draft: false
---







#### IPs

-   uma parte do IP identifica o host e a outra a rede
-   endereço de rede serve para identificar a rede
-   endereço de broadcast é usado quando é necessário mandar algo para
    todos os endereços IP da rede
-   máscara de sub-rede ajuda a determinar a parte que representa o host
    e a classe dos IPs
-   cada classe há um limite de Hosts e Redes
-   endereços frios → IPs locais, não roteáveis








### Classes de IPs

#### Classe A

-   bit mais a direita é sempre 0 (valores vão de 1 ate 126/127)
-   127 é um número reservado para referenciar o próprio computador
    (localhost --- 127.0.0.1)
-   máscara → 255.0.0.0 (8 bits para a rede e 24 para a máquina/host)
-   128 redes possíveis (2⁷ --- 2)
-   16777214 hosts (2²⁴- 2) ← total de hosts que serão atingidos no
    broadcast
-   endereços frios são → 10.0.0.0 à 10.255.255.255

#### Classe B

-   dois primeiros bits são 10 (primeiro octeto vai de 128 ate 191)
-   máscara → 255.255.0.0
-   16382 redes possíveis (2¹⁴-2)
-   65534 hosts (2¹⁶ --- 2)
-   endereços frios são → 172.16.0.0 à 172.31.255.255

#### Classe C

-   primeiros bits são 110 (primeiro octeto vai de 192 até 223)
-   máscara → 255.255.255.0
-   2097150 redes possíveis (2²¹-2)
-   254 hosts (2⁸-2)
-   endereços frios são → 192.168.0.0 à 192.168.255.255

#### Classe D

-   primeiros bits 1110
-   usados para endereços multicast

#### Classe E

-   primeiros bits 1111
-   reservado para o futuro

Esses IPs são conhecidos como IPs roteáveis


