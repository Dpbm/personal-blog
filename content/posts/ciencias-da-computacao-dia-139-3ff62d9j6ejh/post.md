---
title: Ciências
date: da tags: ["computer science"]
draft: false
---







### PK

-   quando há mais de uma PK, só haverá duplicatas quando a combinação
    delas for a mesma
-   PK composta não pode ser definida a nível de coluna








### Subqueries

-   não há problemas em usar subqueries com as mesmas tabelas, há
    problema apenas em queries correlatas, nesse caso use um alias
-   pode ser alvo de tabela, do from ou do where








### Relacionamento

-   Ao passar um auto relacionamento para o diagrama de estrutura de
    dados, você uma a PK da tabela e outra PK que você criará, gerando
    então uma segunda tabela
-   N:M ao passar para o DED você cria uma terceira tabela, contendo as
    PKs de cada uma das outras duas, essas serão PK e FK ao mesmo tempo,
    sendo a referencia das FK a tabela que ela foi herdada
-   1:N a tabela N recebe uma coluna a mais que é a FK








### JOIN

-   Inner join mostra apenas os elementos relacionados
-   outer join mostra os elementos relacionados e os restantes da tabela
    da esquerda ou da direita
-   o join sempre deve ser feito em ordem com os relacionamentos entre
    tabelas


