
function telademsg() {
    if (window.innerWidth >= 701) {
        var aparecertela = document.getElementById("msgtela").style.display = 'block';
        var botão1 = document.getElementById("msgtelashow").style.display = 'none';
        var botão1noti = document.getElementById("notitelashow").style.display = 'none';
    } else {
        var aparecertela = document.getElementById("msgtela").style.display = 'none';
        var botão1 = document.getElementById("msgtelashow").style.display = 'none';
        

    }
    
}

function sumirtelademsg() {
    var sumirtela = document.getElementById("msgtela").style.display ='none';
    var botão2 = document.getElementById("msgtelashow").style.display = 'block';
    var botão2noti = document.getElementById("notitelashow").style.display = 'block';

}




function teladenoti() {
    if (window.innerWidth >= 701) {
        var aparecertelanoti = document.getElementById("notitela").style.display = 'block';
        var botão1noti = document.getElementById("notitelashow").style.display = 'none';
        var botão1 = document.getElementById("msgtelashow").style.display = 'none';
    } else {
        var aparecertelanoti = document.getElementById("notitela").style.display = 'none';
        var botão1noti = document.getElementById("notitelashow").style.display = 'none';

    }
    
}

function sumirteladenoti() {
    var sumirtelanoti = document.getElementById("notitela").style.display ='none';
    var botão2noti = document.getElementById("notitelashow").style.display = 'block';
    var botão2 = document.getElementById("msgtelashow").style.display = 'block';

}