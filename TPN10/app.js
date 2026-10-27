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
// Actividad 2
let productos_super = ["Leche", "Pan", "Arroz", "Fideos", "Aceite"]

console.log(productos_super);
console.log(productos_super.length)
productos_super.push("Azúcar")
productos_super.push("Yerba")
productos_super.push("Café")
console.log(productos)
productos_super.unshift("Sal")
productos_super.unshift("Galletitas")
console.log(productos_super)
console.log(productos_super.length)
productos_super.pop()
console.log(productos_super)
console.log(productos_super.pop())
console.log(productos_super)
console.log(productos_super.shift())
console.log(productos_super)
console.log(productos_super.length);
// Actividad 3
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
  
  
  console.log(productos.indexOf("Webcam"))
  console.log(productos.indexOf("Impresora"))
  
  // Buscar "Teclado" y guardar el resultado en una variable
  let posTeclado = productos.indexOf("Teclado")
  
  // Utilizar una condición if para determinar si el teclado está registrado
  if (posTeclado !== -1) {
    console.log("El teclado está registrado")
  } else {
    console.log("El teclado NO está registrado")
  }
  
  // Buscar "Impresora" y guardar el resultado en otra variable
  let posImpresora = productos.indexOf("Impresora")
  
  // Utilizar una condición if para determinar si la impresora está registrada
  if (posImpresora !== -1) {
    console.log("La impresora está registrada")
  } else {
    console.log("La impresora NO está registrada")
  }
  
  productos.push("Impresora")
  console.log(productos.indexOf("Impresora"))
  console.log(productos.length)

  //Actividad 4
  let videojuegos = [
    "Minecraft",
    "Pokémon Cristal",
    "Super Mario",
    "The Legend of Zelda",
    "Sonic"
  ];
  
  console.log(videojuegos)
  console.log(videojuegos.length)
  videojuegos.push("Animal Crossing")
  videojuegos.push("Pokémon Rojo")
  console.log(videojuegos)
  videojuegos.unshift("Tetris")
  videojuegos.unshift("Pac-Man")
  console.log(videojuegos)
  console.log(videojuegos.indexOf("Pokémon Cristal"))
  console.log(videojuegos.indexOf("Sonic"))
  console.log(videojuegos.indexOf("FIFA"))
  console.log(videojuegos.pop())
  console.log(videojuegos.shift())
  console.log(videojuegos)
  console.log(videojuegos.length)
  