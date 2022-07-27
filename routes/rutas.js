import { Router } from 'express'
import { getProductos, postProductos, editProductos, deleteProductos } from '../controllers/productoController.js'
import { getCarrito, postCarrito, deleteCarrito, getCarritoProductos, postProductoInCarrito, deleteProductoInCarrito } from '../controllers/carritoController.js'
import path from 'path'
const router = Router()


//PRODUCTOS
router.get('/productos/:id?', getProductos)
router.post('/productos', postProductos)
router.put('/productos/:id', editProductos)
router.delete('/productos/:id', deleteProductos)


//CARRITO
router.get('/carrito/:id', getCarrito)
router.post('/carrito', postCarrito)
router.delete('/carrito/:id', deleteCarrito)
router.get('/carrito/:id/productos', getCarritoProductos)
router.post('/carrito/:id/productos', postProductoInCarrito)
router.delete('/carrito/:id/productos/:id_prod', deleteProductoInCarrito)

export default router