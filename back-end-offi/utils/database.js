import {Sequelize} from "sequelize";


const sequelize = new Sequelize(
    'adm-loja',
    'root',
    '2480',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        define: {
            timestamps: false
        }
    }
)

export default sequelize;