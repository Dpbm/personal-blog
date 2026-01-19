---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







#### Hot swap

-   dispositivo que pode ser conectado/desconectado enquanto a máquina
    está ligado.
-   em servidores, quando é necessário adicionar um novo disco, há uma
    controladora HDA que faz com que os discos sejam hot swapable,
    implementando RAID.
-   obs: o padrão desses discos é SAS de ≥ 10000 RPM

#### Arquitetura Oracle

-   v19 e v21 recebem atualizações (pelo menos até 2023).
-   ORACLE_HOME → pasta instalação do oracle
-   Oradata → pasta de arquivos do banco de dados
-   network/admin → arquivo de configuração
    cliente/servidor(tnsnames.ora e listener.ora).
-   padrão porta → 1521
-   ORACLE_HOME/database → onde ficam os parâmetros de inicialização

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
#para mostrar os parâmetros

SELECT name,  value
FROM v$parameters; #view com os parâmetros

#ou

SHOW parameter <parte_do_nome>;


# para ver quais parâmetros são estáticos selecione 
#também a coluna ISINSTANCE_MODIFIABLE
```

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
# para alterar parâmetros

ALTER [SYSTEM|SESSION]
SET <parametro>=<valor>
SCOPE [MEMORY|SPFILE|BOTH];

#ao usar alter SESSION, as alterações só terão efeito na sessão atual

#MEMORY pode ser usado para parâmetros dinâmicos e funciona na hora, 
#contudo ele não fica salvo para próximas sessões

#SPFILE salva diretamente nos arquivos de parametros (parâmetros estáticos), 
#contudo é necessário reinciar a maquína para ter efeito

#BOTH aplica ambos

#obs: nunca edite os arquivos de parâmetros na mão
#obs2: você precisa de previlégios para alterar parâmetros, geralmente, 
#apenas usuários SYS e SYSTEM conseguem
```

#### Alguns comandos interessantes

``` {code-block-mode="2" spellcheck="false" code-block-lang="sql"}
#sysdate
SELECT SYSDATE FROM DUAL;
#DUAL é uma tabela virtual sem valores para executar o SELECT sem erros
#isso é devido ao SQL ANSI não permitir SELECT sem FROM

ALTER SESSION SET NLS_DATE_FORMAT='dd/mm/yyyy hh24:mi:ss';
#muda o formato de data para a sessão atual

SELECT * FROM v$INSTANCE;
#usa a view v$INSTANCE para mostrar dados sobre o banco e a máquina
```


