import {Sequelize} from "sequelize";


const sequelize = new Sequelize(
    'admLoja',
    'root',
    '2480',
    {
        // em host é localhost 
        host: '172.17.0.2', 
        dialect: 'mysql',
        port: 3306,
        define: {
            timestamps: false
        },
        dialectOptions: {
            allowPublicKeyRetrieval: true
          }
    }
)

export default sequelize; 