---
title: Ciências da computação dia 127
date: 2025-04-28
tags: ["computer science"]
draft: false
---







### ArrayList

-   Não precisa definir um tipo, você pode usar ele para diferentes
    tipos no mesmo objeto








### Switch

-   o default não precisa de break, uma vez que não há mais casos a
    baixo dele








### Arquivos

-   o java possui alguns objetos para a leitura e escrita de arquivos:
    BufferedReader, BufferedWriter, FileReader, FileWriter
-   as funções de leitura e escrita podem levantar um erro do tipo
    IOException
-   todas essas coisas podem ser importadas de java.io

``` {code-block-mode="2" spellcheck="false" code-block-lang="java"}
BufferedReader reader = new BufferedReder(new FileReader("file.txt"));
BufferedWriter writer = new BufferedWriter(new FileWriter("file.txt"));

#lembre-se de usar um bloco try catch para não travar o programa, caso haja 
# erros na execução
```








### Tratamento de exceção

-   trata erros durante a execução sem travar o programa
-   exemplos: dividir por zero, índice fora dos limites, problemas de
    conexão, falta de memória, valor numérico fora dos limites, etc.
-   estrutura (try-catch-finally)

``` {code-block-mode="2" spellcheck="false" code-block-lang="java"}
try{

  # aqui, executa o código q pode levantar uma exceção

}catch(Exception e){

  #aqui você pega o erro e pode trata-lo, como apresentar uma messagem
  #fazer outra ação, etc.

  #obs: é recomendado usar o tipo do erro ao invés do Exception
    # o Exception, captura qualquer erro

}finally{
  
  # aqui são executadas quaisquer instruções antes de terminar o bloco try-catch
  # mesmo que não hajam erros, o finally é executado

}
```

-   Alguns tipos de erros: ArithmeticException,
    ArrayIndexOutOfBoundException, InputMismatchException,
    NumberFormatException, NullPointException (esse geralmente aparece
    quando você tentar acessar um objeto que não foi instanciado)


