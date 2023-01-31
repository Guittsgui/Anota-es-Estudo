const element = document.getElementsByTagName("p")
const e = document.getElementsByClassName("subtitle")
const t = document.querySelector("#title")


function clicou(){
    t.classList.toggle('teste')

}




t.addEventListener("click",() => {
    clicou()
})