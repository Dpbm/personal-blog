---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







Para minimizar o nosso AFND, podemos fazer a conversão dele para um AFD.
Para isso faça:

![image](image_273.png)

1.  liste todas as transições que um estado faz para outro como um
    conjunto único, em seguida use esse conjunto como sendo o próximo
    estado a ser observado na tabela:

![image](image_274.png)

você para de testar novas combinações quando nenhuma combinação nova
aparece como transição. Além disso, todo conjunto que tiver um estado
final, também sera considerado um estado final (\*).

Também, se houver uma parte desconexa com o automato principal, você
pode desconsiderá-lo na conversão.

2\. dê nomes as transições: Agora, você pega essas transições que foram
descobertas e de nomes diferentes à elas (aliases).

![image](image_275.png)

3\. pronto, podemos pegar essa tabela e fazer um AFD

![image](image_276.png)


