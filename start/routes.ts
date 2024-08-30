import ProductGroupsController from '#controllers/product_groups_controller'
import ProductController from '#controllers/products_controller'
import router from '@adonisjs/core/services/router'

router.group(() => {
   router.get('/:groupId', [ProductController, 'listAll']) // TESTADO
   router.get('/:groupId/:productId', [ProductController, 'show']) // TESTADO
   router.post('/:groupId/product', [ProductController, 'store']) // TESTADO
   router.post('/:groupId/:productId', [ProductController, 'updateProduct']) // TESTADO
   router.delete('/:groupId/:productId', [ProductController, 'delete']) // TESTADO
}).prefix('/product')

router.group(() => {
   router.post('', [ProductGroupsController,'store']) // TESTADO
   router.get('', [ProductGroupsController,'index']) // TESTADO
   router.get('/:groupId', [ProductGroupsController,'getGroupById']) // TESTADO
   router.post('/:groupId', [ProductGroupsController,'updateGroup']) // TESTADO
   router.delete('/:groupId', [ProductGroupsController,'deleteGroup']) // TESTADO
}).prefix('/product-group')