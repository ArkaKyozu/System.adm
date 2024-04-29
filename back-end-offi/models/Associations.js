import Cargo from "./Cargo.js";
import Pessoal from "./Pessoal.js";

const associations = () => {
  Cargo.hasMany(Pessoal, { foreignKey: "cargoId" });
};

const factory = {
  associations,
};

export default factory;
