import Produto from "../models/Produtos.js";


//Salvar Dados Produto

const saveProduto = async (ProdutoModel) => {
  const save = await Produto.create(ProdutoModel);
  return save;
};

// Buscar todos os Produtos

const getAllProduto = async () => {
  return await Produto.findAll({
    order: [["ID", "ASC"]],
  });
};

//Buscar por id

const getProdutoById = async (id) => {
  return await Produto.findByPk(id);
};

//Deletar Produto

const deleteProdutoById = async (id) => {
  return await Produto.destroy({ where: { id: id } });
};

//Atualizar Produto

const updateProdutoById = async (id, ProdutoModel) => {
  try {
    const result = await Produto.update(ProdutoModel, { where: { id: id } });

    if (result[0] === 1) {
      return { message: "Produto atualizado com Sucesso!" };
    } else {
      return {
        message: `Não foi possivel atualizar o Produto ${id}`,
        status: 404,
      };
    }
  } catch (error) {
    return error;
  }
};

const factory = {
  saveProduto,
  getAllProduto,
  getProdutoById,
  deleteProdutoById,
  updateProdutoById,
};

export default factory;
