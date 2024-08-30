# API de Produtos e Grupos de Produtos

Esta API permite a gestão de produtos e grupos de produtos. Abaixo estão os endpoints disponíveis, organizados por suas respectivas rotas.

## Como Rodar o Projeto

### 1. Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (versão 16.x ou superior)
- **npm** ou **yarn** ou **pnpm**
- **AdonisJS CLI** (versão 6)

### 2. Clonar o Repositório

Primeiro, clone o repositório do projeto para a sua máquina local:

```bash
git clone [https://github.com/seu-usuario/seu-projeto.git](https://github.com/GabrielCosta01/teste-simple.git)
```
### 3. Instalar as Dependências

Navegue até o diretório do projeto e instale as dependências necessárias:

```bash
cd seu-projeto
npm install
# ou se estiver usando yarn
yarn install
# ou se estiver usando pnpm
pnpm install
```
### Exemplo de Objeto de Grupo
```json
{
  "name": "Supermarket",
  "description": "Group for car parts and accessories",
  "status": "active",
  "category": "Alimenticio"
}
```

### Exemplo de Objeto Produto

```json
{
  "name": "Smartphone X100",
  "description": "Latest model with advanced features and sleek design.",
  "price": 799.99,
  "stock": 50,
  "category": "Electronics",
  "status": "active"
}
```

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
