import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const Pessoal = sequelize.define(
  "Pessoal",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    CPF: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      allowNull: false,
    },

    Nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    EstadoCivil: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    RG: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    DataNascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    Contato: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cargoId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    Banco: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ag_conta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    PISPASEP: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  { underscored: true }
);

export default Pessoal;
