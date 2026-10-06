// 1. Función para verificar cuál de los dos números es el mayor
function obtenerMayor() {
  let input1 = document.querySelector("#num1_mayor");
  let input2 = document.querySelector("#num2_mayor");
  let respuesta = document.querySelector("#parrafo_mayor");

  let n1 = parseFloat(input1.value);
  let n2 = parseFloat(input2.value);

  if (isNaN(n1) || isNaN(n2)) {
    respuesta.textContent = "Por favor, ingresa ambos números.";
  } else if (n1 > n2) {
    respuesta.textContent = "El número mayor es: " + n1;
  } else if (n2 > n1) {
    respuesta.textContent = "El número mayor es: " + n2;
  } else {
    respuesta.textContent = "Ambos números son iguales.";
  }
}

// 2. Función para verificar cuál de los dos números es el menor
function obtenerMenor() {
  let input1 = document.querySelector("#num1_menor");
  let input2 = document.querySelector("#num2_menor");
  let respuesta = document.querySelector("#parrafo_menor");

  let n1 = parseFloat(input1.value);
  let n2 = parseFloat(input2.value);

  if (isNaN(n1) || isNaN(n2)) {
    respuesta.textContent = "Por favor, ingresa ambos números.";
  } else if (n1 < n2) {
    respuesta.textContent = "El número menor es: " + n1;
  } else if (n2 < n1) {
    respuesta.textContent = "El número menor es: " + n2;
  } else {
    respuesta.textContent = "Ambos números son iguales.";
  }
}

// 3. Función para verificar si dos números son iguales o diferentes
function compararIgualdad() {
  let input1 = document.querySelector("#num1_igual");
  let input2 = document.querySelector("#num2_igual");
  let respuesta = document.querySelector("#parrafo_igual");

  let n1 = parseFloat(input1.value);
  let n2 = parseFloat(input2.value);

  if (isNaN(n1) || isNaN(n2)) {
    respuesta.textContent = "Por favor, ingresa ambos números.";
  } else if (n1 === n2) {
    respuesta.textContent = "Los números son iguales.";
  } else {
    respuesta.textContent = "Los números son diferentes.";
  }
}

// 4. Función para calcular el IVA (21%) de una compra
function obtenerIVA() {
  let inputMonto = document.querySelector("#monto_compra");
  let respuesta = document.querySelector("#parrafo_iva");

  let monto = parseFloat(inputMonto.value);

  if (isNaN(monto) || monto < 0) {
    respuesta.textContent = "Por favor, ingresa un monto válido.";
  } else {
    let iva = monto * 0.21;
    respuesta.textContent = "El IVA del 21% es: " + iva;
  }
}

// 5. Función que saluda a una persona
function saludarPersona() {
  let inputNombre = document.querySelector("#nombre_persona");
  let respuesta = document.querySelector("#parrafo_saludo");

  let nombre = inputNombre.value;

  if (nombre === "") {
    respuesta.textContent = "Por favor, ingresa un nombre.";
  } else {
    respuesta.textContent = "Hola, " + nombre + "!";
  }
}

// 6. Función que activa el modo oscuro
function activarModoOscuro() {
  let cuerpo = document.querySelector("body");
  let respuesta = document.querySelector("#parrafo_modo");

  cuerpo.style.backgroundColor = "black";
  cuerpo.style.color = "white";
  respuesta.textContent = "Modo oscuro activado";
}

// 7. Función que activa el modo claro
function activarModoClaro() {
  let cuerpo = document.querySelector("body");
  let respuesta = document.querySelector("#parrafo_modo");

  cuerpo.style.backgroundColor = "white";
  cuerpo.style.color = "black";
  respuesta.textContent = "Modo claro activado";
}
