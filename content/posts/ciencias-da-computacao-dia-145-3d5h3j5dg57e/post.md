---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







#### DCL

-   segurança do banco de dados;
-   criação de usuários e ajuste de privilégios que eles possuem.

#### DTL

-   transação do banco de dados;
-   seta um bloco de transação e, caso algo aconteça no meio da
    transação, há a possibilidade de reverter, evitando inconsistências.

#### Parâmetros

-   durante a instalação do banco de dados,é necessário configurar
    alguns parâmetros para que o banco se encaixe na máquina usada, e a
    aplicação da qual usará o banco.

#### Procedure

-   funções que podem, ou não, retornar algo;
-   pode possuir parâmetros de entrada e/ou saída.

#### Function

-   Função que retorna algo.

#### Trigger

-   procedure que está ligada à uma tabela;
-   trabalha com eventos: Insert, update e delete;
-   pode ser usado para criar logs/histórico.

#### Backup incremental

-   apenas dados que foram modificados após um backup anterior são
    salvos.

#### Backup quente

-   backup feito com o banco em funcionamento.

#### Backup frio

-   backup que é feito apenas quando o banco está desligado.

#### Banco de dados

-   formado por processos e dados;
-   recomendável usar em um servidor diferente do servidor do qual a
    aplicação está rodando;
-   ao fazer queries select no banco, além dos dados requisitados, ele
    também salva alguns dados do entorno na memória para deixar uma
    query futura mais rápida.

#### Tablespace

-   maneira de fazer um track de onde os dados vão ser salvos/lidos;
-   reparte dados em múltiplos discos.


