const mysql = require('mysql2');
const criacaoBD = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "147258"
});

let TiposMoney = ['Dolar'];

// Fazendo conexão com a base de dados, passando credenciais citadas logo acima;
criacaoBD.connect((erro) => {
    if (erro) {
        console.log("ERRO: connection database : " + erro);
    }
    else {
        console.log("connection do banco de dadois com sucesso");
    }
});


// Fazendo a Query de criação da base de dados do programa;
criacaoBD.query("create database if not exists fuso_horarios", (erro) => {
    if (erro) {
        console.log("ERRO: Create database : " + erro);
    }
    else {
        console.log("Criação do banco de dados feita com sucesso");
    }
});


module.exports = criacaoBD;