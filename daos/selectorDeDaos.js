import ContenedorCarritoMongoDb from "./carritos/CarritoDaoMongoDb.js"
import ContenedorCarritoFirebase from "./carritos/CarritoDaoFirebase.js"
import ContenedorProductoMongoDb from "./productos/ProductosDaoMongoDb.js"
import ContenedorProductoFirebase from "./productos/ProductosDaoFirebase.js"
import { Database, Admin } from "../config.js"


let ProductosDao
let CarritoDao
switch (Database) {
    case "firebase":
        ProductosDao = new ContenedorProductoFirebase()
        CarritoDao = new ContenedorCarritoFirebase()
        break; 

    case "mongo":
        ProductosDao = new ContenedorProductoMongoDb()
        CarritoDao = new ContenedorCarritoMongoDb()
        break; 
}
export {
    ProductosDao,
    CarritoDao
}