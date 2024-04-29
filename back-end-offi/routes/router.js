import express from "express"
import PessoalController from "../routes/PessoalController.js";
import CargoController from "../routes/CargoController.js";
import FinanceiroController from "../routes/FinanceiroController.js"
import ProdutoController from "../routes/ProdutoController.js"

const router = express.Router();

router.post('/', function(req, res){
    console.log("hello");
    res.status(200).json({message: "hello"})
})

router.use("/", PessoalController)
router.use("/", CargoController)
router.use("/", FinanceiroController)
router.use("/", ProdutoController)


export default router;