---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







#### ISO/OSI

-   comunicação feita com 7 camadas
-   PDU → protocol data unit
-   cada camada N de um host se comunica com a N do outro host
    virtualmente
-   protocolo de sub-rede interna faz a parte da comunicação e
    tratamento entre as camadas físicas dos dois hosts
-   não necessariamente todas as camadas são usadas em um padrão de
    rede, isso é apenas uma referência
-   cada camada deve ter uma função bem definida
-   camadas são usadas para criar abstrações
-   quantidade de camadas não pode ser muito grande nem muito pequeno
    para assim ter camadas com características distintas e ainda ser
    fácil de gerir
-   limite das camadas deve minimizar o fluxo








### Camadas

#### Camada Física (1)

-   bit a bit
-   tensão representa os bits
-   intervalos de nano segundos dividem um bit de outro
-   dita a direção da comunicação
-   interfaces mecânicas, elétricas e de sincronização
-   garantia do envio e recebimento do dado

#### Camada de Enlace (2)

-   Transformação dos dados brutos (bits)
-   verifica erros não detectados na camada de rede
-   divide dados em quadros(frames) que serão transmitidos
    sequencialmente
-   rede de difusão controla a colisão aqui

#### Camada de Rede (3)

-   usa pacotes
-   IP
-   como os pacotes são roteados (estático ou dinâmico)
-   controla a sub-rede
-   trata da a qualidade do serviço, tempo em transito, instabilidade,
    etc
-   trata da qualidade usando retardo → ao enviar dados, o buffer de um
    dos lados pode encher, assim essa camada da um delay para esperar
    esvaziar para enviar novamente

#### Camada de Transporte (4)

-   aceita dados de uma camada acima e divide em partes menores, caso
    necessário. Então, repassa para a camada de rede garante que
    chegarão corretamente
-   uso de TPDU

#### Camada de Sessão(5)

-   usa SPDU
-   oferece serviços
-   serviço de controle de dialogo → controla quem vai transmitir
-   serviço de gerenciamento de token → impede que as partes façam a
    mesma função critica ao mesmo tempo
-   serviço de sincronização → caso ocorra uma falha, ele volta do ponto
    que estava, usando tokens para realizar isso (muito utilizado para
    resumir downloads, por exemplo)

#### Camada de apresentação(6)

-   usa PPDU
-   sintaxe e semântica das informações

#### Camada de Aplicação(7)

-   usa APDU
-   uso de protocolos pelo user
-   DNS, SMTP, FTP, HTTP (protocolos da camada de aplicação)

![[alura](https://www.alura.com.br/artigos/conhecendo-o-modelo-osi)](image_454.png)








#### Modelo TCP/IP

-   surgiu pela dificuldade das redes via satélite, radio, etc.
-   não tem camada de sessão e apresentação

### Camadas

#### Camada de transporte

-   TCP → envia dados sem sobrecarregar o host mais lento, fazendo uma
    conexão entre eles
-   UDP → mais rápido, porem não checa se os dados chegaram, nem se
    importa com a outra ponta
-   MYSQL usa TCP e DNS UDP

#### Camada Inter-rede

-   permite que os hosts injetem pacotes em qualquer rede e garante que
    eles trafegarão independentemente até o destino
-   define o formato de pacote e o protocolo IP
-   entrega o pacote IP, evitando congestionamento e fazendo o
    roteamento
-   define os padrões de envio, entrega, etc.

#### Camada Host-Rede

-   host deve se conectar à rede utilizando algum protocolo
-   Enlace/Físico

![[UFRJ](https://www.gta.ufrj.br/grad/03_1/ip-security/paginas/introducao.html)](image_455.png)








#### Telnet

-   protocolo mais antigo
-   não era seguro
-   hoje foi substituído pelo SSH
-   usado para conexão remota

#### POP/IMAP

-   para ler emails

#### SMTP

-   para envio de emails

#### SMB/CIFS

-   compartilhamento de arquivos em LAN

> ARPANET, SATNET, LAN, etc. → camada física + enlace


