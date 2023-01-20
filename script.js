

function crip(){
    var txt1 = document.getElementById('txt1').value
    var texto2 = document.getElementById('txt2')


    txt1 = txt1.replace((/e/g) (/a/g) , "enter", "ai");
    var resultado = txt1.replace((/\/e/g) (/\/a/g), "enter", "ai");
    alert(`${resultado}`)



}





function desc(){

}








/* A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat" */