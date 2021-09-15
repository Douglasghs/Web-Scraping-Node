// Função disparada ápos o click do botão de "Pesquisa";
function PesquisarMoeda(){
    let valorSelect = document.getElementById('Moneys').value;
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8081/")
}