// Função disparada ápos o click do botão de "Pesquisa";
function PesquisarMoeda(){
    let valorSelect = document.getElementById('Moneys').value;
    valorSelect.disabled = true;
    
    let url = `http://localhost:8081/BotGetValues/${valorSelect}`;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();

    console.log(xhttp.responseText);
}

function BTN_salvar(){
    
}