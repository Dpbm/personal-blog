---
title: Ciências da computação dia 90
date: 2025-04-28
tags: ["computer science"]
draft: false
---







### Estrutura de dados

Na estrutura de dados, quando você tem uma relação N:M, você pode ter
uma coluna na tabela da relação que pertence só a relação e não as
tabelas que fazem o relacionamento.








### Como escolher qual BD usar?

1 --- A capacidade de dados que o banco aguenta

2 --- A velocidade do banco

3 --- Licenças








Cada linha de um banco de dados pode ser chamado de instância da
entidade, enquanto cada coluna é um atributo da entidade. Sendo assim
cada intersecção entre linha x coluna é um dado.








### Primary key(atributo determinante)

Atributo ou conjunto de atributos que identificam unicamente as
tuplas(linhas).

Quando há múltiplas PK isso é uma chave composta.








### Candidate key

Qualquer conjunto de chaves que, pela lógica, poderiam ser chaves
primarias, mas por alguma questão, seja por que o atributo aceita nulo,
ou algo do tipo, ele não se tornou chave primária.








### Foreign key

Chave primária de tabelas, que podem ser usadas para criar uma relação
entre elas.








### Normalização

-   Regras para criar tabelas (uma forma de deixá-las, mais organizadas
    e bem estruturadas);
-   Caso não estejam normalizadas, é necessário refazer os modelos E-R
    e/ou E-D.








### Regras Normais

#### Primeira regra normal

-   Atributos devem sempre ser simples;
-   Caso haja um atributo composto, você deve decompor ele em vários
    atributos;
-   Caso haja um atributo multivalorado, você deve criar um tabela só
    para esse atributo, e criar uma relação entre essa nova tabela e a
    tabela pai.

#### Segunda regra normal

-   Você precisa estar na primeira regra normal;
-   Todas as outras colunas (as que não são chaves), devem necessitar
    diretamente da colunas chave;
-   Caso haja colunas que não dependem das chaves, mova-as para tabelas
    em que elas façam sentido ou senão, simplesmente apague-as.

#### Terceira forma normal

-   Você precisa estar na segunda forma normal;
-   Nenhuma coluna não chave pode depender de outra coluna não chave;
-   Caso haja alguma coluna não chave que depende de outra coluna não
    chave, delete a coluna que é dependente.

#### Formal normal de Boyce-Codd

-   Versão da terceira forma;
-   Se você tiver descrição e código do produto em uma tabela, você pode
    tirar a descrição e jogar em outra tabela.

#### Quarta forma normal

-   Você deve estar na terceira forma normal;
-   Se em uma tabela você tiver mais de um valor multivalorado, você
    deve criar uma tabela para cada um dos atributos multivalorados.

#### Quinta forma normal

-   Você deve estar na quart forma normal;
-   Se você tiver varias tabelas que se relacionam, você não precisa
    repetir valores entre elas, se há algum valor que você quer mas esta
    em outra tabela, através do relacionamento você consegue
    recuperá-lo.


