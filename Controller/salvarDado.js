const Modules_BD = require("../modules/bd");

exports.AddDado = (req, res) =>{
   try {
    Modules_BD.query("Insert into dolar values(5.55, 17/09/2021)", (err) => {
        if(err){
            console.log("ERRO : Inserte Dado : " +err);
        }
        else{
            console.log("valor inserido com sucesso");
        }
    })
   } catch (error) {
       console.log("Controller_SalvarDados : ERRO : " + error);
   }
}