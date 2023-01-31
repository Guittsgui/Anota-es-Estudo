const element = document.getElementsByTagName("p")
const e = document.getElementsByClassName("subtitle")
const t = document.querySelector("#title")

function clicou(){
    if (t.innerHTML == "Guia de Estudos"){
        t.innerHTML = "Clicou e Mudou"
    }else {
        t.innerHTML = "Guia de Estudos"
    }
}

t.addEventListener("click","clicou()")