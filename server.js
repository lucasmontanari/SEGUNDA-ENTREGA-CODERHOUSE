import express from 'express'
import rutas from './routes/rutas.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express()
const puerto=process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/', express.static(`${__dirname}/public`))

app.use('/api/', rutas)

app.all("*", function (req, res) {
    res.status(404).json({error: -2, descripcion: `ruta '${req.path}' metodo '${req.method}' no implementada`})
});

app.listen(puerto, err =>{
    if(err){
        console.log(`Se produjo un error al iniciar el servidor ${err}`)
    } else{
        console.log(`El servidor esta escuchando el puerto ${puerto}`)
    }
    
})