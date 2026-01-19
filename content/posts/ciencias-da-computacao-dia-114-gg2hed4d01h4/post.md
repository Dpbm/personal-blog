---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







### Herança

-   Maneira de derivar classes para novas classes;
-   Nova classe herda os métodos e estruturas da classe que foi
    derivada;
-   A nova classe pode adicionar mais métodos, estruturas, assim como
    redefinir estruturas e métodos herdados;
-   Em um diagrama, a classe filho sempre aponta para o pai;
-   Use valores protected apenas em último caso;

#### Vantages

-   reutilizar classes;
-   compartilhamento de recursos entre classes.

``` {code-block-mode="2" spellcheck="false" code-block-lang="java"}
class Base{}
class Child extends Base{
  Child(arguments...){
    super(arguments...); //aqui você passa os argumentos para o construtor da classe Base, se não há nenhum argumento, você pode omitir
  }
}
```

obs: sobrecarga também pode acontecer aqui, contudo se você deixar com a
mesma assinatura (mesmo nome e argumentos em uma função) essa função
será reescrita(redefinição de métodos).








### Nomenclaturas

-   Subclasse → classe que herda;
-   Superclasse → classe base (pai);
-   Classe ancestral → classe que uma Superclasse herda;
-   Classe descendente → classe que herda de uma subclasse.








### Polimorfismo

-   Quando tenho classes herdadas que possuem métodos com mesma
    assinatura (sobrescrita ou por sobrecarga) mas com comportamentos
    diferentes (métodos polimórficos).








### Casting

-   uma classe filho pode ser instanciada com o tipo da do pai, contudo
    se precisar de um método especifico da do filho você precisa fazer o
    casting.

``` {code-block-mode="2" spellcheck="false" code-block-lang="java"}
class Base{}
class Child extends Base{}

Base test = new Child();
(Child)test.method();
```


