# API de Produtos e Grupos de Produtos

Esta API permite a gestão de produtos e grupos de produtos. Abaixo estão os endpoints disponíveis, organizados por suas respectivas rotas.

## Endpoints de Produtos

### `GET /product/:groupId`
- **Descrição:** Lista todos os produtos de um determinado grupo.
- **Controlador:** `ProductController.listAll`
- **Testado:** ✅

### `GET /product/:groupId/:productId`
- **Descrição:** Exibe os detalhes de um produto específico dentro de um grupo.
- **Controlador:** `ProductController.show`
- **Testado:** ✅

### `POST /product/:groupId/product`
- **Descrição:** Cria um novo produto dentro de um grupo específico.
- **Controlador:** `ProductController.store`
- **Testado:** ✅

### `POST /product/:groupId/:productId`
- **Descrição:** Atualiza um produto específico dentro de um grupo.
- **Controlador:** `ProductController.updateProduct`
- **Testado:** ✅

### `DELETE /product/:groupId/:productId`
- **Descrição:** Remove um produto específico de um grupo.
- **Controlador:** `ProductController.delete`
- **Testado:** ✅

## Endpoints de Grupos de Produtos

### `POST /product-group`
- **Descrição:** Cria um novo grupo de produtos.
- **Controlador:** `ProductGroupsController.store`
- **Testado:** ✅

### `GET /product-group`
- **Descrição:** Lista todos os grupos de produtos.
- **Controlador:** `ProductGroupsController.index`
- **Testado:** ✅

### `GET /product-group/:groupId`
- **Descrição:** Obtém os detalhes de um grupo de produtos específico.
- **Controlador:** `ProductGroupsController.getGroupById`
- **Testado:** ✅

### `POST /product-group/:groupId`
- **Descrição:** Atualiza um grupo de produtos específico.
- **Controlador:** `ProductGroupsController.updateGroup`
- **Testado:** ✅

### `DELETE /product-group/:groupId`
- **Descrição:** Remove um grupo de produtos específico.
- **Controlador:** `ProductGroupsController.deleteGroup`
- **Testado:** ✅
