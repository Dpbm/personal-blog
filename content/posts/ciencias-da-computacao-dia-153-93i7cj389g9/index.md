---
title: Ciências da computação dia 153
date: 2025-04-28
tags: ["computer science"]
draft: false
---







-   MYSQL possui parâmetros (nesse caso variáveis de ambiente) que podem
    ser globais ou de sessão, estáticos ou dinâmicos.
-   Para modificar parâmetros estáticos você precisa modificar o arquivo
    my.ini ou my.inf
-   Pasta include do MYSQL, possui os headers para interagir com outras
    linguagens
-   partes entre \[\] no arquivo my.ini são as seções de configuração
-   parâmetros estáticos são read-only, ou seja precisam ser alterados
    no arquivo diretamente
-   programa mysql é um cliente, enquanto o mysqld é o servidor

#### Alguns Parâmetros

-   key_buffer_size → parâmetro que seta a memoria ram que a instância
    pode usar
-   sort_buffer_size → parâmetro que seta o tamanho do buffer para
    ordenação de dados
-   max_connections → descreve a quantidade máxima de conexões ao banco
    (leve em consideração que alguns serviços do próprio MYSQL são tidos
    como clientes)
-   port → qual porta o servidor vai rodar(parâmetro estático)
-   innodb_file_per_table → quando OFF ele começa a utilizar tablespaces

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
SHOW VARIABLES;

--para alterar parametros dinamicos
--esses comandos só irão alterar a nivel de sessão, para ser global
--voce precisa alterar o arquivo my.ini
SET GLOBAL parameter=value;
--ou
SET @@GLOBAL.parameter=value;
```








#### Table Spaces

-   arquivos lógicos que guardam os dados (só é possível acessar pelo
    banco dedados)
-   arquivos são chamados de datafiles
-   não são cross platform
-   são vantajosos quando você possui vários discos, e quando quer
    acrescentar um, basta apontar no tablespace um datafile para esse
    disco
-   oracle por padrão usa tablespaces
-   tablespaces podem ter múltiplos datafiles
-   cada usuário pode ter o seu tablespace, sendo necessários
    privilégios para criar também (em ORACLE)
-   por padrão o sistema aloca todo o tamanho definido para o datafile
    antes, para evitar problemas como desfragmentação de disco
-   Table Space permanente → usada para guardar os dados
-   Table Space temporária → usada para guardar dados como em:
    ordenação, indices, etc.

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
SELECT * FROM dba_tablespaces;

ALTER TABLESPACE name
  ADD DATAFILE 'datafile'; -- pode ter qualquer nome e extensão o datafile

ALTER DATABASE
  DATAFILE 'datafile'
  AUTOEXTEND ON NEXT 20M
  MAXSIZE 1000M;
```


