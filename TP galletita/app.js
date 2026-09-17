let boton = document.querySelector('#boton1')
let parrafo = document.querySelector('#parrafo1')
let clicks = 0
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
