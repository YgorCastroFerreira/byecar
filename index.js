

var card = window.document.getElementById('card')
var icon1 = window.document.getElementById('icon1')
var icon2 = window.document.getElementById('icon2')

function Honda(){
    card.src = 'Imagens/card-hondacb.svg'
    icon1.setAttribute("onclick", "Voltz()")
    icon2.setAttribute("onclick", "Voltz()")
}

function Voltz(){
    card.src = 'Imagens/card-voltzev1.svg'
    icon1.setAttribute("onclick", "Honda()")
    icon2.setAttribute("onclick", "Honda()")
}