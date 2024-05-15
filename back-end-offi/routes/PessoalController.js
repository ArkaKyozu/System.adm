import express from "express";
import PessoalService from "../services/PessoalService.js";

const router = express.Router();

//Salvar Pessoa

router.post("/addPessoa", async function (req, res) {
  const PessoalModel = {
    CPF: req.body.CPF,
    Nome: req.body.Nome,
    Formacao: req.body.Formacao,
    Email: req.body.Email,
    EstadoCivil: req.body.EstadoCivil,
    RG: req.body.RG,
    DataNascimento: req.body.DataNascimento,
    Contato: req.body.Contato,
    Endereco: req.body.Endereco,
    Cidade: req.body.Cidade,
    cargoId: req.body.cargoId,
    Banco: req.body.Banco,
    ag_conta: req.body.ag_conta,
    PISPASEP: req.body.PISPASEP,
  };
  const pessoal = await PessoalService.savePessoal(PessoalModel);
  return res.status(200).json(pessoal);
});

//buscar todos Pessoal

router.get("/getAllPessoal", async function (req, res) {
  const allPessoal = await PessoalService.getAllPessoal();
  return res.status(200).json(allPessoal);
});

//Buscar Por Id

router.get("/pessoal/:id", async function (req, res) {
  const pessoal = await PessoalService.getPessoalById(req.params.id);
  return res.status(200).json(pessoal);
});

// Delete Pessoal

router.delete("/deletePessoal/:id", async function (req, res) {
  const pessoal = await PessoalService.deletePessoalById(req.params.id);
  return res.status(200).json(pessoal);
});

//Atualizar Pessoal

router.put("/updatePessoal/:id", async function (req, res) {
  const PessoalModel = {
    CPF: req.body.CPF,
    Nome: req.body.Nome,
    Formacao: req.body.Formacao,
    Email: req.body.Email,
    EstadoCivil: req.body.EstadoCivil,
    RG: req.body.RG,
    DataNascimento: req.body.DataNascimento,
    Contato: req.body.Contato,
    Endereco: req.body.Endereco,
    Cidade: req.body.Cidade,
    cargoId: req.body.cargoId,
    Banco: req.body.Banco,
    ag_conta: req.body.ag_conta,
    PISPASEP: req.body.PISPASEP,
  };
  const pessoal = await PessoalService.updatePessoalById(
    req.params.id,
    PessoalModel
  );
  return res.status(200).json(pessoal);
});

export default router;
