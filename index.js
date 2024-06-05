//const express = require("express"); //importar en nodejs
import express from "express" 
import {app, PORT, DATABASE} from "./constantes" //importar constantes
import provedoresRouter from "./routers/provedoresRouters" //importar provedoresRouter


const router = express.Router() //creamos un router
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

app.get(//lectura
    "/provedores", //ruta estatica
    (req, res) => {
    res.status(200).send("listado de provedores")
})

app.get(//lectura
    "/provedores/:id", //ruta dinamica por parámetro
    (req, res) => {
        const id = req.params.id
    res.status(200).send(`Ususario con id ${id}`)
})

app.get(//lectura
    "/provedores/:id", //ruta dinamica por parámetro
    (req, res) => {
        const id = req.params.id
    res.status(200).json({
       message: "listado de provedores",
       cod:id
    }) })

app.get(
    "/users/user/:usuarioPersonalizado",
    function (req, res) {
        res.status(200).send(`Usuario llamado ${req.params.usuarioPersonalizado}`)
    }
)


//escuchamos (levantamos el servidor)

app.listen(
    PORT,
    () =>{
        console.log(`Servidor abierto en el puerto ${PORT}, base de datos ${DATABASE}`)
    }
) 
//callback función dentro de una función 
//un handler tiene unos parámetros interpuestos 