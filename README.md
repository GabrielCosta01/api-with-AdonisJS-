﻿# teste-simple

Rotas da API
A API está estruturada em dois grupos principais: Produtos e Grupos de Produtos. Abaixo está a lista das rotas disponíveis, junto com uma breve descrição de cada uma delas.

Grupo de Rotas: /product
Este grupo de rotas lida com operações relacionadas a produtos dentro de um grupo específico.

GET /product/:groupId - Lista todos os produtos de um grupo específico.

Exemplo: GET /product/1
Descrição: Retorna todos os produtos pertencentes ao grupo identificado por groupId.
GET /product/:groupId/:productId - Exibe detalhes de um produto específico dentro de um grupo.

Exemplo: GET /product/1/10
Descrição: Retorna os detalhes do produto identificado por productId dentro do grupo groupId.
POST /product/:groupId/product - Cria um novo produto dentro de um grupo específico.

Exemplo: POST /product/1/product
Descrição: Adiciona um novo produto ao grupo identificado por groupId. Requer os dados do produto no corpo da requisição.
POST /product/:groupId/:productId - Atualiza um produto específico dentro de um grupo.

Exemplo: POST /product/1/10
Descrição: Atualiza os detalhes do produto identificado por productId dentro do grupo groupId. Requer os dados atualizados do produto no corpo da requisição.
DELETE /product/:groupId/:productId - Remove um produto específico de um grupo.

Exemplo: DELETE /product/1/10
Descrição: Remove o produto identificado por productId do grupo groupId.
Grupo de Rotas: /product-group
Este grupo de rotas lida com operações relacionadas à criação, visualização e gerenciamento de grupos de produtos.

POST /product-group - Cria um novo grupo de produtos.

Exemplo: POST /product-group
Descrição: Cria um novo grupo de produtos. Requer os dados do grupo no corpo da requisição.
GET /product-group - Lista todos os grupos de produtos.

Exemplo: GET /product-group
Descrição: Retorna uma lista de todos os grupos de produtos existentes.
GET /product-group/:groupId - Exibe detalhes de um grupo de produtos específico.

Exemplo: GET /product-group/1
Descrição: Retorna os detalhes do grupo identificado por groupId.
POST /product-group/:groupId - Atualiza um grupo de produtos específico.

Exemplo: POST /product-group/1
Descrição: Atualiza os detalhes do grupo identificado por groupId. Requer os dados atualizados do grupo no corpo da requisição.
DELETE /product-group/:groupId - Remove um grupo de produtos específico.

Exemplo: DELETE /product-group/1
Descrição: Remove o grupo identificado por groupId e todos os produtos associados a ele.
Notas
Todas as rotas que possuem parâmetros (:groupId, :productId) requerem que esses parâmetros sejam passados na URL.
Os métodos POST usados para atualização seguem a convenção de atualização de recursos, sendo que a rota para criação de produtos dentro de um grupo é distinta da rota para atualização de um produto existente.
As rotas foram todas testadas e estão funcionais conforme as descrições acima.
