import {DataTypes} from 'sequelize';
import sequelize from '../utils/database.js';


const Financeiro = sequelize.define('Financeiro', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    Data: {
        type: DataTypes.DATE,
        allowNull: false
    },

    GastoDiario: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true, 
    },

    FaturamentoCard:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false,
    },

    FaturamentoPix: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },

    FaturamentoCedula: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{underscored: true});

export default Financeiro;