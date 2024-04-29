import sequelize from './utils/database.js'
import express from "express"
import router from "./routes/router.js"
import Associations from './models/Associations.js'




import cors from 'cors'



const app = express();


app.use(express.json());
app.use(express.urlencoded({extendeds:true}));
app.use(cors());
(async () => {
    try {
        Associations.associations()
        await sequelize.sync({force:false});
        app.listen(3000, function(){
            console.log("listening to port 3000");
            
        });
    } catch(err){
        console.log(err);
    }
})();


app.use("/", router);

