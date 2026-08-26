const edad = 20;
const nombreUsuario = "Nahuel";
const nombreUsuario2 = "Marcos";
const numero = -5;
const edad2 = 20;
const dia = "sabado";
const contrasenia = "secreto";


const boton1 = document.querySelector("#boton1");
const parrafo1 = document.querySelector("#parrafo1");

boton1.addEventListener("click", function() {
    if (edad >= 18) {
        parrafo1.textContent = "Eres mayor de edad";
    } else {
        parrafo1.textContent = "Eres menor de edad";
    }
});


const boton2 = document.querySelector("#boton2");
const parrafo2 = document.querySelector("#parrafo2");

boton2.addEventListener("click", function() {
    if (nombreUsuario == "Nahuel") {
        parrafo2.textContent = "Bienvenido Nahuel, ¿cómo estás?";
    } else {
        parrafo2.textContent = "Bienvenido usuario";
    }
});


const boton3 = document.querySelector("#boton3");
const parrafo3 = document.querySelector("#parrafo3");

boton3.addEventListener("click", function() {
    if (nombreUsuario2 == "Nahuel" || nombreUsuario2 == "Marcos") {
        parrafo3.textContent = "Bienvenido " + nombreUsuario2 + " ¿cómo estás?";
    } else {
        parrafo3.textContent = "Bienvenido " + nombreUsuario2;
    }
});


const boton4 = document.querySelector("#boton4");
const parrafo4 = document.querySelector("#parrafo4");

boton4.addEventListener("click", function() {
    if (numero > 0) {
        parrafo4.textContent = "El número es positivo";
    } else if (numero < 0) {
        parrafo4.textContent = "El número es negativo";
    } else {
        parrafo4.textContent = "El número es cero";
    }
});


const boton5 = document.querySelector("#boton5");
const parrafo5 = document.querySelector("#parrafo5");

boton5.addEventListener("click", function() {
    if (edad2 >= 6 && edad2 <= 11) {
        parrafo5.textContent = "Niño";
    } else if (edad2 >= 12 && edad2 <= 18) {
        parrafo5.textContent = "Adolescente";
    } else if (edad2 >= 19 && edad2 <= 26) {
        parrafo5.textContent = "Joven";
    } else if (edad2 >= 27 && edad2 <= 59) {
        parrafo5.textContent = "Adulto";
    } else if (edad2 >= 60) {
        parrafo5.textContent = "Anciano";
    }
});


const boton6 = document.querySelector("#boton6");
const parrafo6 = document.querySelector("#parrafo6");

boton6.addEventListener("click", function() {
    if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes") {
        parrafo6.textContent = "Es un día laborable";
    } else {
        parrafo6.textContent = "Es fin de semana";
    }
});


const boton7 = document.querySelector("#boton7");
const parrafo7 = document.querySelector("#parrafo7");

boton7.addEventListener("click", function() {
    if (contrasenia == "secreto") {
        parrafo7.textContent = "Acceso concedido";
    } else {
        parrafo7.textContent = "Acceso denegado";
    }
});
