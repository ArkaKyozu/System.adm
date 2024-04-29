import Financeiro from "../models/Financeiro.js"




//Salvar Financeiro

const saveFinanceiro = async (FinanceiroModel) => {
    const save = await Financeiro.create(FinanceiroModel);
    return save;
}

//Buscar todos os dados 

const getAllFinanceiro = async() => {
    return await Financeiro.findAll({
        order: [
            ['ID', 'ASC']
        ]
    });
}

//Buscar por ID

const getFinanceiroById = async (id) => {
    return await Financeiro.findByPk(id);
};

//Deletar Financeiro

const deleteFinanceiroById = async(id) => {
    return await Financeiro.destroy({where: {id:id}});
};

//Atualizar Financeiro 

const updateFinanceiroById = async (id, FinanceiroModel) => {
    try {
        const result = await Financeiro.update(FinanceiroModel, {where: {id:id}})

        if(result[0] === 1){
            return { message: "Financeiro Atualizado Com Sucesso!"};
        }else {
            return {message: `Não foi possivel atualizar o Financeiro ${id}`, status: 404};
        }
    } catch (error){
        return error;
    }
};

const factory = { 
    saveFinanceiro,
    getAllFinanceiro,
    getFinanceiroById,
    updateFinanceiroById,
    deleteFinanceiroById
}

export default factory;