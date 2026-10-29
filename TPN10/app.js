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
  
  let posTeclado = productos.indexOf("Teclado")
  
  if (posTeclado !== -1) {
    console.log("El teclado está registrado")
  } else {
    console.log("El teclado NO está registrado")
  }
  
  let posImpresora = productos.indexOf("Impresora")
  
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
  
  // Actividad 5

  let estudiantes = [
    "Martina",
    "Lucas",
    "Sofía",
    "Tomás",
    "Valentina"
  ]

  console.log(estudiantes)
  console.log(estudiantes.length)
  estudiantes.push("Agustín")
  estudiantes.push("Camila")
  console.log(estudiantes)
  estudiantes.unshift("Bruno")
  console.log(estudiantes)
  console.log(estudiantes.length)
  console.log(estudiantes.indexOf("Sofía"))
  console.log(estudiantes.indexOf("Camila"))
  console.log(estudiantes.indexOf("Federico"))
  console.log(estudiantes.shift())
  console.log(estudiantes.pop())
  console.log(estudiantes)
  console.log(estudiantes.length)

  // Actividad 6

  let tareas = [
    "Estudiar",
    "Hacer la tarea",
    "Ordenar la habitación",
    "Comprar alimentos"
  ]
  
  console.log(tareas)
  console.log(tareas.length)
  tareas.push("Pasear al perro")
  tareas.push("Preparar la cena")
  console.log(tareas);
  tareas.unshift("Entregar un trabajo")
  console.log(tareas)
  console.log(tareas.indexOf("Estudiar"))
  console.log(tareas.indexOf("Preparar la cena"))
  console.log(tareas.indexOf("Lavar el auto"))
  console.log(tareas.shift())
  console.log(tareas.pop())
  tareas.push("Leer un libro")
  tareas.unshift("Hacer ejercicio")
  console.log(tareas)
  console.log(tareas.length)

  // Actividad 7

  let peliculas = [
    "Toy Story",
    "Shrek",
    "Buscando a Nemo",
    "Los Increíbles",
    "Ratatouille"
  ]
  console.log(peliculas)
  console.log(peliculas.length)
  peliculas.push("Cars")
  peliculas.push("Monsters, Inc.")
  console.log(peliculas)
  peliculas.unshift("Intensamente")
  peliculas.unshift("Coco")
  console.log(peliculas)
  console.log(peliculas.indexOf("Shrek"))
  console.log(peliculas.indexOf("Coco"))
  console.log(peliculas.indexOf("Frozen"))

  let posCars = peliculas.indexOf("Cars")
  
  
  if (posCars !== -1) {
    console.log("Cars está en la lista")
  } else {
    console.log("Cars NO está en la lista")
  }
  
  console.log(peliculas.pop())
  console.log(peliculas.shift())
  peliculas.push("Up")
  console.log(peliculas.indexOf("Up"))
  console.log(peliculas)
  console.log(peliculas.length)

  // Actividad 8

  let productosTienda = [
    "Celular",
    "Notebook",
    "Tablet",
    "Teclado",
    "Mouse"
  ]
  console.log(productosTienda)
  console.log(productosTienda.length)
  productosTienda.push("Monitor")
  productosTienda.push("Impresora")
  productosTienda.unshift("Cámara web")
  productosTienda.unshift("Micrófono")
  console.log(productosTienda)
  console.log(productosTienda.length)
  console.log(productosTienda.indexOf("Notebook"))
  console.log(productosTienda.indexOf("Micrófono"))
  console.log(productosTienda.indexOf("Parlantes"))
  console.log(productosTienda.pop())
  console.log(productosTienda.shift())
  console.log(productosTienda)
  productosTienda.push("Parlantes")
  productosTienda.unshift("Auriculares")
  console.log(productosTienda)
  console.log(productosTienda.indexOf("Parlantes"))
  console.log(productosTienda.indexOf("Auriculares"))
  console.log(productosTienda.indexOf("Celular"))
  console.log(productosTienda.pop())
  console.log(productosTienda.shift())
  console.log(productosTienda)
  console.log(productosTienda.length)
