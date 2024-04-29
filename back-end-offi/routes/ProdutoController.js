import express from "express"
import ProdutoService from "../services/ProdutoService.js"


const router = express.Router();

//Salvar Produto 

router.post("/addProduto", async function(req, res){
    const ProdutoModel = {
        NomeProduto: req.body.NomeProduto,
        Valor: req.body.Valor,
        Quantidade: req.body.Quantidade,
        Fornecedor: req.body.Fornecedor,
        Observacao: req.body.Observacao,
        data: req.body.data,
    }
    const produto = await ProdutoService.saveProduto(ProdutoModel);
    return res.status(200).json(produto)
})

//Buscar todos produtos 

router.get("/getAllProduto", async function(req, res){
    const allProduto = await ProdutoService.getAllProduto();
    return res.status(200).json(allProduto)
});

//Buscar Produto

router.get("/getProduto/:id", async function(req, res){
    const getProduto = await ProdutoService.getProdutoById(req.params.id);
    return res.status(200).json(getProduto)
});

//Deletar produto

router.delete("/deleteProduto/:id", async function(req,res){
    const delProduto = await ProdutoService.deleteProdutoById(req.params.id);
    return res.status(200).json(delProduto)
})

//Atualizar Produtos

router.put("/updateProduto/:id", async function(req, res){
    const ProdutoModel = {
        NomeProduto: req.body.NomeProduto,
        Valor: req.body.Valor,
        Quantidade: req.body.Quantidade,
        Fornecedor: req.body.Fornecedor,
        Observacao: req.body.Observacao,
        data: req.body.data
    }
    const upProduto = await ProdutoService.updateProdutoById(
        req.params.id,
        ProdutoModel
    )
    return res.status(200).json(upProduto)
})

export default router;