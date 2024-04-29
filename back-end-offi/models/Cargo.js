import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";


const Cargo = sequelize.define(
  "Cargo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    NomeCargo: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Remuneracao: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },

    Contrato: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Jornada: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    DataAdmissao: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    Descricao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { underscored: true }
);


export default Cargo;
