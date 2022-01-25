
function retornar(valor){
    var tela = document.getElementById('tela').innerHTML += valor
}

function calcular(){
    var tela = document.getElementById('tela').innerHTML;
    if(tela)
    {
        document.getElementById('tela').innerHTML = eval(tela);
    }
}

function clean(){
    var tela = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = ''
}

function apagar(){
    var tela = document.getElementById('tela').innerHTML ;
    document.getElementById('tela').innerHTML = tela.substring(0, tela.length -1)
}
