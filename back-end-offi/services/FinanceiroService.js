import FinanceiroRepository from "../repositories/FinanceiroRepository.js";

const saveFinanceiro = (FianceiroModel) => {
    return FinanceiroRepository.saveFinanceiro(FianceiroModel)
};

const getAllFinanceiro = () => {
    return FinanceiroRepository.getAllFinanceiro()
};

const getFinanceiroById = (id) => {
    return FinanceiroRepository.getFinanceiroById(id)
};

const deleteFinanceiroById = (id) => {
    return FinanceiroRepository.deleteFinanceiroById(id)
};

const updateFinanceiroById = (id, FianceiroModel) => {
    return FinanceiroRepository.updateFinanceiroById(id,FianceiroModel)
};

const service = {
    saveFinanceiro,
    getAllFinanceiro,
    getFinanceiroById,
    deleteFinanceiroById,
    updateFinanceiroById
}

export default service;