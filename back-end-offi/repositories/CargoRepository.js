import Cargo from "../models/Cargo.js";

//Salvar Cargo 

const saveCargo = async (CargoModel) => {
    const save = await Cargo.create(CargoModel);
    return save;
}

//Buscar todos os cargos 

const getAllCargo = async() => {
    return await Cargo.findAll({
        order: [
            ['ID', 'ASC']
        ]
    });
};

//Buscar por ID 

const getCargoById = async (id) => {
    return await Cargo.findByPk(id);
};

//Deletar Cargo

const deleteCargoById = async(id) => {
    return await Cargo.destroy({where: {id:id}});
};

//Atualizar Cargo

const updateCargoById = async (id, CargoModel) => {
    try {
        const result = await Cargo.update(CargoModel, {where: {id:id}});

        if(result[0] === 1){
            return {message: "Cargo Atualizado com sucesso!"};
        } else {
            return {message: `Não foi possivel atualizar o cargo ${id}`, status: 404};
        };
    } catch (error){
        return error;
    }
};

const factory = {
    saveCargo,
    getAllCargo,
    getCargoById,
    deleteCargoById,
    updateCargoById
};

export default factory;