---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







#### Tipos de memórias

ROM → read only

PROM → programmable ROM

EPROM → necessário apagar tudo para modificar

EEPROM → bits individuais podem ser apagados

FLASH → EEPROM que não precisa de equipamentos especiais para manipular








#### Operação de INS

1.  verifica overflow
2.  insere na onde está o ponteiro de INS
3.  atualiza o ponteiro
4.  verifica se a fila está vazia (ponteiro REM no limite inferior)

#### Operação REM

1.  verifica underflow
2.  remove o elemento do ponteiro REM
3.  atualiza o ponteiro
4.  verifica se a fila está cheia (ponteiro INS no limite superior)








#### Operação PUSH

1.  verifica se não atingiu o limite superior
2.  coloca o valor na posição do ponteiro
3.  atualiza o ponteiro

#### Operação POP

1.  verifica se não atingiu o limite inferior
2.  remove do topo
3.  decrementa o ponteiro


