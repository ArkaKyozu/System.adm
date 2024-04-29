import ProdutoRepository from "../repositories/ProdutoRepository.js"

const saveProduto = (ProdutoModel) => {
    return ProdutoRepository.saveProduto(ProdutoModel)
};

const getAllProduto = () => {
    return ProdutoRepository.getAllProduto()
};

const getProdutoById = (id) => {
    return ProdutoRepository.getProdutoById(id)
};

const deleteProdutoById = (id) => {
    return ProdutoRepository.deleteProdutoById(id)
};

const updateProdutoById = (id, ProdutoModel) => {
    return ProdutoRepository.updateProdutoById(id, ProdutoModel)
};

const service = {
    saveProduto,
    getAllProduto,
    getProdutoById,
    deleteProdutoById,
    updateProdutoById
}

export default service;