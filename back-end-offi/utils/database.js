import {Sequelize} from "sequelize";


const sequelize = new Sequelize(
    'adm-loja',
    'root',
    '2480',
    {
        // localhost 
        host: 'meu-mysql', 
        dialect: 'mysql',
        port: 3306,
        define: {
            timestamps: false
        },
        dialectOptions: {
            allowPublicKeyRetrieval: true
          }
    }
);

const testConnection = async () => {
    try{
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados bem sucedida')
    } catch(error){
        console.error('Não foi possivel conectar ao banco de dados: ', error)
    }
}

testConnection()

export default sequelize; 
