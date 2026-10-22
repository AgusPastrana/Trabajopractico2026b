let utiles = ["Lapiz", "Goma", "Regla", "Cuaderno", "Lapicera"];

console.log (utiles)
console.log (utiles[0])
console.log (utiles[2])
console.log(utiles[utiles.length - 1])
console.log (utiles.length)
console.log (utiles.push('mochila'))
console.log(utiles.length)
console.log(utiles.unshift('cartuchera'))
console.log(utiles.length)
console.log(utiles)
console.log(utiles.pop())
console.log(utiles)
console.log(utiles.shift())
console.log(utiles)
console.log(utiles.length)

let productos = ["Leche", "Pan", "Arroz", "Fideos", "Aceite"]

console.log(productos);
console.log(productos.length)
productos.push("Azúcar")
productos.push("Yerba")
productos.push("Café")
console.log(productos)
productos.unshift("Sal")
productos.unshift("Galletitas")
console.log(productos)
console.log(productos.length)
productos.pop()
console.log(productos)
console.log(productos.pop())
console.log(productos);
console.log(productos.shift())
console.log(productos)
console.log(productos.length);

let productos = [
    "Teclado",
    "Mouse",
    "Monitor",
    "Auriculares",
    "Webcam",
    "Parlantes"
  ];
  
  console.log(productos.indexOf("Mouse"))
  console.log(productos.indexOf("Monitor"))
  
  // Buscar "Webcam" y mostrar la posición obtenida
  console.log(productos.indexOf("Webcam"));
  
  // Buscar "Impresora" y mostrar el resultado obtenido
  console.log(productos.indexOf("Impresora"));
  
  // Buscar "Teclado" y guardar el resultado en una variable
  let posTeclado = productos.indexOf("Teclado");
  
  // Utilizar una condición if para determinar si el teclado está registrado
  if (posTeclado !== -1) {
    console.log("El teclado está registrado");
  } else {
    console.log("El teclado NO está registrado");
  }
  
  // Buscar "Impresora" y guardar el resultado en otra variable
  let posImpresora = productos.indexOf("Impresora");
  
  // Utilizar una condición if para determinar si la impresora está registrada
  if (posImpresora !== -1) {
    console.log("La impresora está registrada");
  } else {
    console.log("La impresora NO está registrada");
  }
  
  // Agregar "Impresora" al final del arreglo
  productos.push("Impresora");
  
  // Volver a buscar "Impresora" y mostrar el resultado de la búsqueda
  console.log(productos.indexOf("Impresora"));
  
  // Mostrar la cantidad de productos registrados
  console.log(productos.length);