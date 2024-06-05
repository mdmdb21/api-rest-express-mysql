//const express = require("express"); //importar en nodejs
import express from "express" 
import {PORT} from "./constantes.js" //importar constantes
import provedoresRouter from "./routers/provedoresRouters.js" //importar provedoresRouter


const router = express.Router() //creamos un router

const app = express() //creamos una aplicación
app.use("/provedores", provedoresRouter) 

router.get(
    "/",
     (_, res) => {
    res.status(200).send("Home")
})


//peticiones y respuestas: get leer, post crear, put actualizar, delete borrar

app.get(
    "/", 
    function(req, res) { //request (peticion) response (respuesta)
    res.status(200).send("Home")
})


app.use(provedoresRouter)



//escuchamos (levantamos el servidor)

app.listen(
    PORT,
    () =>{
        console.log(`Servidor abierto en el puerto ${PORT}`)
    }
) 
//callback función dentro de una función 
//un handler tiene unos parámetros interpuestos 