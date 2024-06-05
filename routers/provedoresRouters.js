import express from "express"

const router = express.Router() 

router.get(
    "/provedores",
        (_,res) => {
        res.status(200).json({
        message: "listado de provedores"
        })
    }
)  

router.get(//leer
    "/provedores/:id",
        (req,res) => {
        res.status(200).json({
        message: "listado de provedores",
        cod:req.params.id
        })
    }
)  

router.delete(//borrar
    "/provedores/:id",
        (req,res) => {
        res.status(200).json({
        message: "Borrar un provedores",
        cod:req.params.id
        })
    }
)  

router.post( //crear
     "/provedores",
        (_,res) => {
        res.status(200).json({
        message: "Crear un provedores"
        })
    }
) 

router.put( //actualizar
     "/provedores/:id",
        (req,res) => {
        res.status(200).json({
        message: "Actualizar un provedores",
        cod:req.params.id
        })
    }
)  

export default router