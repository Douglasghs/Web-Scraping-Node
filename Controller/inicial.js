exports.Getonicial = (req,res) =>{
    try {
        res.render("introducao.handlebars");
    } catch (error) {
        console.log("Controller_Inicial : ERRO: " + error);
    }
}