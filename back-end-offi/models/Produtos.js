import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const Produto = sequelize.define(
  "produtos",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },

    NomeProduto: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Valor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },

    Quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Fornecedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Observacao: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    data: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  { underscored: true }
);

export default Produto;
