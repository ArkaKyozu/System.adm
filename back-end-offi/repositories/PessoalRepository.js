import Pessoal from "../models/Pessoal.js";

//Salvar dados Pessoal 

const savePessoal = async (PessoalModel) => {
    const save = await Pessoal.create(PessoalModel);
    return save;
}

// Buscar Pessoal

const getAllPessoal = async () => {
    return await Pessoal.findAll({
        order: [
            ['ID', 'ASC']
        ]
    });
};

// Busca por ID 

const getPessoalById = async (id) => {
    return await Pessoal.findByPk(id);
};

// Deletar Pessoa 

const deletePessoalById = async(id) => {
    return await Pessoal.destroy({where: {id:id}});
};

// Atualizar Pessoal 

const updatePessoalById = async (id, PessoalModel) => {
    try {
        const result = await Pessoal.update(PessoalModel, {where: {id:id}});
        if(result[0] === 1){
            return { message: "Pessoal Atualizado com sucesso!"};
        }else {
            return {message: `Não foi possivel atualizar o pessoal ${id}`, status: 404};
        }
    } catch (error){
        return error;
    }
};

const factory = {
    savePessoal,
    getAllPessoal,
    getPessoalById,
    deletePessoalById,
    updatePessoalById,
};

export default factory;