const express = require("express");
const app = express();
const port = process.env.PORT || 8081;
const server = require("http").createServer(app);

const Modules_BD = require('./modules/bd');

// Config arquivos estáticos
const path = require('path');
app.use(express.static(path.join(__dirname, "/public")));

// Config Handlebars
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));
app.set('view engine', 'handlebars');

// Config Body-parser
const parser = require('body-parser');
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());


// Definindo rotas
const router = express.Router();
const Controller_Bot = require("./Controller/Bot");
app.get("/BotGetValues/:money", Controller_Bot.BotStart);
const Controller_Inicial = require('./Controller/inicial');
app.get("/", Controller_Inicial.Getonicial);
const Controller_AddDado = require("./Controller/salvarDado");
app.get("/AddDado/:valor/:data");

try {
    server.listen(port, () =>{
        console.log("Servidor rodando na porta :"+ port);
    })
} catch (error) {
    console.log("lISTEN SERVER : ERRO : "+ error);
}
