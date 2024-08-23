
function telademsg() {
    if (window.innerWidth >= 701) {
        var aparecertela = document.getElementById("msgtela").style.display = 'block';
        var botão1 = document.getElementById("msgtelashow").style.display = 'none';
    } else {
        var aparecertela = document.getElementById("msgtela").style.display = 'none';
        var botão1 = document.getElementById("msgtelashow").style.display = 'none';

    }
    
}

function sumirtelademsg() {
    var sumirtela = document.getElementById("msgtela").style.display ='none';
    var botão2 = document.getElementById("msgtelashow").style.display = 'block';

}