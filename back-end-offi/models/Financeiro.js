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
        type: DataTypes.DECIMAL,
        allowNull: true, 
    },

    FaturamentoCard:{
        type:DataTypes.DECIMAL,
        allowNull:false,
    },

    FaturamentoPix: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },

    FaturamentoCedula: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
},{underscored: true});

export default Financeiro;