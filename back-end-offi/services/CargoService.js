import CargoRepository from "../repositories/CargoRepository.js";

const saveCargo = (CargoModel) => {
    return CargoRepository.saveCargo(CargoModel)
};

const getAllCargo = () => {
    return CargoRepository.getAllCargo() 
};

const getCargoById = (id) => {
    return CargoRepository.getCargoById(id)
};

const deleteCargoById = (id) => {
    return CargoRepository.deleteCargoById(id)
};

const updateCargoById = (id, CargoModel) => {
    return CargoRepository.updateCargoById(id,CargoModel)
};

const service = {
    saveCargo,
    getAllCargo,
    getCargoById,
    deleteCargoById,
    updateCargoById
};

export default service;