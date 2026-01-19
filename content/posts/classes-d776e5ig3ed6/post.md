---
title: Classes
date: 2025-04-28 tags: ["computer science"]
draft: false
---







-   Características e comportamentos de um objeto
-   Representa algo que seja abstrato, um substantivo (pessoa, lugar,
    objeto real, etc)
-   Molde de algum objeto, uma representação genérica para coisas de
    mesmo tipo








### Características

-   Visibilidade → público, privado, protegido
-   Membros → características e ações

Ex:

```java
Main.java

    class Main {

    public static void main(String args[]) {

    Person Jorge = new Person();

    Jorge.name = “Jorge”;

    Jorge.age = 40;

    Jorge.weight = 92.30;

    Jorge.height = 2.0;

    System.out.println(Jorge.name);

    Jorge.sayYourName();

    }

Person.java

    public class Person {

    public String name;

    public int age;

    public double weight;

    public double height;

    public void sayYourName(){

    System.out.printf(“hello my name is: %s\n”, name);

    }

    }

```






### Objetos

-   Instância de uma classe
-   Todos os atributos estados








### Atributos

-   Variáveis ou campos de uma classe
-   Características do objeto








### Métodos

-   Ações que o objeto pode fazer
-   Ações que podem interagir entre objetos e seus atributos
-   Verbos








### Construtor

-   Função que inicializa os atributos de uma classe ao ser instanciada
-   Ao instanciar você coloca os atributos iniciais
-   \_init em python, nome da classe em formato de função em java,
    constructor() em js
-   Por padrão o compilador cria um construtor com valores nulos, sendo
    assim quando você usa new ClassName() ← você está usando o
    construtor padrão


[**Programação Orientada a Objetos em Java**\
*Artigos Java Introdução à Programação Orientada a Objetos em Java Nos
desenvolvimentos de sistemas, existem
alguns...*www.devmedia.com.br](https://www.devmedia.com.br/introducao-a-programacao-orientada-a-objetos-em-java/26452)
