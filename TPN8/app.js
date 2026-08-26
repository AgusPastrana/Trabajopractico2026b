
let edad = '#ej1'
let nombreUsuario = '#ej2'
let nombreUsuario2 = '#ej3'
let numero = '#ej4'
let edad2 = '#ej5'
let dia = '#ej6'
let contrasenia = '#ej7'


const boton1 = document.querySelector("#boton1");
const parrafo1 = document.querySelector("#parrafo1");

boton1.addEventListener("click", function() {
    if (edad.value >= 18) {
        parrafo1.textContent = "Eres mayor de edad";
    } else {
        parrafo1.textContent = "Eres menor de edad";
    }
});


const boton2 = document.querySelector("#boton2");
const parrafo2 = document.querySelector("#parrafo2");

boton2.addEventListener("click", function() {
    if (nombreUsuario.value == "Nahuel") {
        parrafo2.textContent = "Bienvenido Nahuel, ¿cómo estás?";
    } else {
        parrafo2.textContent = "Bienvenido usuario";
    }
});


const boton3 = document.querySelector("#boton3");
const parrafo3 = document.querySelector("#parrafo3");

boton3.addEventListener("click", function() {
    if (nombreUsuario2.value == "Nahuel" || nombreUsuario2.value == "Marcos") {
        parrafo3.textContent = "Bienvenido " + nombreUsuario2.value + " ¿cómo estás?";
    } else {
        parrafo3.textContent = "Bienvenido " + nombreUsuario2.value;
    }
});


const boton4 = document.querySelector("#boton4");
const parrafo4 = document.querySelector("#parrafo4");

boton4.addEventListener("click", function() {
    if (numero.value > 0) {
        parrafo4.textContent = "El número es positivo";
    } else if (numero.value < 0) {
        parrafo4.textContent = "El número es negativo";
    } else {
        parrafo4.textContent = "El número es cero";
    }
});


const boton5 = document.querySelector("#boton5");
const parrafo5 = document.querySelector("#parrafo5");

boton5.addEventListener("click", function() {
    if (edad2.value >= 6 && edad2.value <= 11) {
        parrafo5.textContent = "Niño";
    } else if (edad2.value >= 12 && edad2.value <= 18) {
        parrafo5.textContent = "Adolescente";
    } else if (edad2,value >= 19 && edad2.value <= 26) {
        parrafo5.textContent = "Joven";
    } else if (edad2.value >= 27 && edad2.value <= 59) {
        parrafo5.textContent = "Adulto";
    } else if (edad2.value >= 60) {
        parrafo5.textContent = "Anciano";
    }
});


const boton6 = document.querySelector("#boton6");
const parrafo6 = document.querySelector("#parrafo6");

boton6.addEventListener("click", function() {
    if (dia.value == "lunes" || dia.value == "martes" || dia.value == "miercoles" || dia.value == "jueves" || dia.value == "viernes") {
        parrafo6.textContent = "Es un día laborable";
    } else {
        parrafo6.textContent = "Es fin de semana";
    }
});


const boton7 = document.querySelector("#boton7");
const parrafo7 = document.querySelector("#parrafo7");

boton7.addEventListener("click", function() {
    if (contrasenia.value == "secreto") {
        parrafo7.textContent = "Acceso concedido";
    } else {
        parrafo7.textContent = "Acceso denegado";
    }
});
