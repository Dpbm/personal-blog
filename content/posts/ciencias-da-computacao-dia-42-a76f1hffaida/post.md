---
title: Ciências da computação dia 42
date: 2025-04-28
tags: ["computer science"]
draft: false
---







O padrão se repete, o que mudará agora é a quantidade de células
vizinhas e a quantidade de regiões

<figure>
<img src="image_91.png"
alt="mapa de karnaugh com 4 variaveis e suas células vizinhas" />
<figcaption>vizinhança</figcaption>
</figure>

<figure>
<img src="image_92.png" alt="mapa de karnaugh de 4 variáveis" />
<figcaption>células do mapa de Karnaugh de 4 variáveis</figcaption>
</figure>








**Errata**

Algum tempo atrás disse sobre maneiras de representar uma expressão
booleana, e nisso disse sobre somatório e produtório, no entanto acabei
me confundindo e invertendo as coisas

o somatório é a representação de todos os mintermos ou seja você
colocará no somatório todos os valores que o resultado será 1

e o produtório o inverso, todos os maxtermos serão representados
lá(todos os 0)

produtório → *π → π*(0, 1, 2, 3, 4) ← exemplo, todas essas células serão
0

somatório → Σ → Σ(0, 1, 2, 3, 4) ← exemplo todas essas células serão 1


