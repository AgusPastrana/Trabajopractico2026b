let boton = document.querySelector('#boton1')
let parrafo = document.querySelector('#parrafo1')
let clicks = 0
let duplicar = doucment.querySelector ('#duplicar')

boton.onclick = function () {
    clicks = clicks + 1
    parrafo.textContent = "tus clicks son:" + clicks
    if (clicks > 10) {
        parrafo.style.color = 'green'
    }
    if (clicks > 20) {
        parrafo.style.color = 'blue'
    }
    if (clicks > 30) {
        parrafo.style.color = 'red'
    }

}
duplicar.onclick = function () {
    clicks = clicks * 2
    parrafo2.textContent = "tus clicks an sido duplicados"
}