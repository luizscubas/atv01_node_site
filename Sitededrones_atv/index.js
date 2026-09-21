// Importando o Express
import express from "express";

//importando o arquivo de conexão do sequelize
import connection from './config/sequelize-config.js';

// Iniciando o Express 
const app = express();
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

import ServicoController from "./controllers/ServicoController.js";
import DroneController from "./controllers/DroneController.js";
import FabricanteController from "./controllers/FabricanteController.js";

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})


// definindo prefixos para as rotas
app.use("/", ServicoController);
app.use("/", DroneController);
app.use("/", FabricanteController);

//realizando a conexão com o banco de dados
connection.authenticate().then(() => {
    //sucesso na promessa: 
    console.log("Conexão com banco de dados realizada com sucesso");
    //falha na promessa:
}).catch((error) => {
    console.log(`Ocorreu um erro ao conectar ao banco de dados: ${error}`);
});


// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})