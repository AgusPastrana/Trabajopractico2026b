// Variables del DOM
let parrafo = document.querySelector("#parrafo");

let btnFondo = document.querySelector("#btnFondo");
let btnTexto = document.querySelector("#btnTexto");
let btnColor = document.querySelector("#btnColor");
let btnLetra = document.querySelector("#btnLetra");
let btnTamano = document.querySelector("#btnTamaño");
let btnReiniciar = document.querySelector("#btnReiniciar");

// Guardamos el estado original del párrafo
let textoOriginal = parrafo.textContent;
let colorOriginal = "white";
let fondoOriginal = "transparent";
let letraOriginal = "Arial";
let tamanoOriginal = "24px";

// Botón Cambiar Fondo
btnFondo.addEventListener("click", function () {
    parrafo.style.backgroundColor = "lightblue";
});

// Botón Cambiar Texto
btnTexto.addEventListener("click", function () {
    parrafo.textContent = "El texto fue modificado con JavaScript.";
});

// Botón Cambiar Color
btnColor.addEventListener("click", function () {
    parrafo.style.color = "blue";
});

// Botón Cambiar Letra
btnLetra.addEventListener("click", function () {
    parrafo.style.fontFamily = "Impact";
});

// Botón Cambiar Tamaño
btnTamano.addEventListener("click", function () {
    parrafo.style.fontSize = "36px";
});

// Botón Reiniciar
btnReiniciar.addEventListener("click", function () {

    parrafo.textContent = textoOriginal;
    parrafo.style.color = colorOriginal;
    parrafo.style.backgroundColor = fondoOriginal;
    parrafo.style.fontFamily = letraOriginal;
    parrafo.style.fontSize = tamanoOriginal;

});


