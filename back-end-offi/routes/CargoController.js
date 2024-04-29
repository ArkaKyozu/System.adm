import express from "express"
import CargoService from "../services/CargoService.js";

const router = express.Router();

//Salvar Cargo

router.post("/addCargo", async function(req, res){
    const CargoModel = {
        NomeCargo: req.body.NomeCargo,
        Remuneracao: req.body.Remuneracao,
        Contrato: req.body.Contrato,
        Jornada: req.body.Jornada,
        DataAdmissao: req.body.DataAdmissao,
        Descricao: req.body.Descricao,
    }
    const cargo = await CargoService.saveCargo(CargoModel);
    return res.status(200).json(cargo)
});

//Buscar todos Cargo

router.get("/getAllCargo", async function(req, res){
    const allCargo = await CargoService.getAllCargo()
    return res.status(200).json(allCargo);
});

//Buscar Cargo 

router.get("/cargo/:id", async function(req,res){
    const cargo = await CargoService.getCargoById(req.params.id)
    return res.status(200).json(cargo)
});

//Deletar Cargo

router.delete("/deleteCargo/:id", async function(req, res){
    const cargo = await CargoService.deleteCargoById(req.params.id);
    return res.status(200).json(cargo)
})

//Atualizar Cargo

router.put("/updateCargo/:id", async function(req, res){
    const CargoModel = {
        NomeCargo: req.body.NomeCargo,
        Remuneracao: req.body.Remuneracao,
        Contrato: req.body.Contrato,
        Jornada: req.body.Jornada,
        DataAdmissao: req.body.DataAdmissao,
        Descricao: req.body.Descricao,
    }
    const cargo = await CargoService.updateCargoById(
        req.params.id,
        CargoModel
    );
    return res.status(200).json(cargo);
});

export default router
