---
title: Ciências da computação dia 81
date: 2025-04-28
tags: ["computer science"]
draft: false
---







Modelo lógico baseado em objeto → entidade-relacionamento

Modelo lógico baseado em registro → relacional








### Entidade-relacionamento

-   baseia-se na percepção do mundo real
-   coleção de objetos, denominados entidades (tabelas) e seus
    relacionamentos
-   modelagem utiliza o diagrama de estrutura de dados








### **Símbolos**

<figure>
<img src="image_171.png"
alt="Apenas um retangulo com o nome da entidade no meio" />
<figcaption>Símbolo para entidade</figcaption>
</figure>

<figure>
<img src="image_172.png"
alt="algumas linhas puxadas a apartir do retângulo, com o texto atributo1 e atributo2" />
<figcaption>símbolo de Atributos</figcaption>
</figure>

<figure>
<img src="image_173.png" alt="um losango interligando duas entidades" />
<figcaption>símbolo de relacionamento</figcaption>
</figure>








### Atributos

São as Características das entidades (colunas da tabela)

#### tipos

simples → dados indivisíveis (atomicos), nome de usuário, cpf, email,
etc.

compostos → elementos que podem ser divididos, endereço, número do
banco, etc.

multi-valorados → possuem múltiplos valores em um mesmo campo, como
json, jsonb, array, etc. (apresenta um \* como símbolo)

determinantes → identifica de forma única cada instância (linha da
tabela), username, email, ID, cpf, etc. (campo não nulo) (nome do
atributo sublinhado como símbolo)








### Relacionamento

Relação entre duas entidades através de um atributo determinante.

#### tipos

um-para-um → cada linha de A se relaciona somente com uma linha de B

![um para um](image_174.png)

um-para-vários → cada linha de A se relaciona com uma ou mais em B

![um para vários](image_175.png)

vários-para-vários → N linhas de A se relacionam com M linhas de B

![vários para vários](image_176.png)

#### Cardinalidade

representação da quantidade maxima e minima de elementos das entidades
de uma relação

![cardinalidade](image_177.png)

#### Alguns relacionamentos

![dois relacionamentos](image_178.png)

![ternário](image_179.png)

![Dependente](image_180.png)

![auto-relacionamento](image_181.png)

![É um](image_182.png)

Nesse caso a Entidade é uma generalização das Entidades Entidade2 e
Entidade3

![agregação](image_183.png)

Nesse uma relação pode se tornar um relação com outro relacionamento

Isso pode ser traduzido dessa forma:

![agregação](image_184.png)


