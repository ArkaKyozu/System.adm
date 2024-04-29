import PessoalRepository from "../repositories/PessoalRepository.js"

const savePessoal = (PessoalModel) => {
    return PessoalRepository.savePessoal(PessoalModel)
};

const getAllPessoal = () => {
    return PessoalRepository.getAllPessoal()
};

const getPessoalById = (id) => {
    return PessoalRepository.getPessoalById(id)
};

const deletePessoalById = (id) => {
    return PessoalRepository.deletePessoalById(id)
}

const updatePessoalById = (id, PessoalModel) => {
    return PessoalRepository.updatePessoalById(id, PessoalModel)
};

const service = {
    savePessoal,
    getAllPessoal,
    getPessoalById,
    deletePessoalById,
    updatePessoalById,
}

export default service;