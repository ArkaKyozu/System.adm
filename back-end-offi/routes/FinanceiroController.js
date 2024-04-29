import express from "express"
import FinanceiroService from "../../back-end-offi/services/FinanceiroService.js"

const router = express.Router();

// Salavar Financeiro

router.post("/addFinanceiro", async function(req, res){
    const FinanceiroModel = {
        Data: req.body.Data,
        GastoDiario: req.body.GastoDiario,
        FaturamentoCard: req.body.FaturamentoCard,
        FaturamentoPix: req.body.FaturamentoPix,
        FaturamentoCedula: req.body.FaturamentoCedula
    }
    const financeiro = await FinanceiroService.saveFinanceiro(FinanceiroModel)
    return res.status(200).json(financeiro);
});

// Buscar todos so Financeiro

router.get("/getAllFinanceiro", async function(req, res){
    const allFinanceiro = await FinanceiroService.getAllFinanceiro()
    return res.status(200).json(allFinanceiro);
});

//Buscar por id

router.get("/financeiro/:id", async function(req, res){
    const financeiro = await FinanceiroService.getFinanceiroById(req.params.id)
    return res.status(200).json(financeiro)
});

//Delete

router.delete("/deleteFinanceiro/:id", async function(req, res){
    const financeiro = await FinanceiroService.deleteFinanceiroById(req.params.id)
    return res.status(200).json(financeiro)
})

// Atualizar Financeiro

router.put("/updateFinanceiro/:id", async function(req, res){
    const FinanceiroModel = {
        Data: req.body.Data,
        GastoDiario: req.body.GastoDiario,
        FaturamentoCard: req.body.FaturamentoCard,
        FaturamentoPix: req.body.FaturamentoPix,
        FaturamentoCedula: req.body.FaturamentoCedula
    }
    const financeiro = await FinanceiroService.updateFinanceiroById(
        req.params.id,
        FinanceiroModel
    );
    return res.status(200).json(financeiro)
});

export default router;

