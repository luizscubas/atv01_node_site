//Arquivo com os dados de conexão com o banco de dados
// importando o sequelize

import Sequelize from "sequelize";

const connection = new Sequelize({
    //dados de conexão
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    timezone: "-03:00"
});

export default connection;