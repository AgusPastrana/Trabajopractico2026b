let monto = document.querySelector ('#ej1')
let descuento = 0
let parrafo = document.querySelector ('#parrafo1')





let parrafo1 = document.querySelector ("#parrafo1")
let boton1 = document.querySelector ("#boton1")

boton1.addEventListener("click", function() {
    if (monto.value >50000) { 
        descuento = monto.value * 0.10
 parrafo1.textContent = "felicidades tenes un 10% de descuento y es de " + descuento ;
 parrafo1.style.color = 'green'
    }
        
    else  {
        parrafo1.style.color = 'red'
        parrafo1.textContent = "no tienes descuento";
    }


});
let edad = document.querySelector ('#ej2')
let parrafo2 = document.querySelector ('#parrafo2')
let descuento2 = 0 

boton2.onclick = function (){
    if (edad.value >65) {
        descuento2 = edad.value * 0.15
        parrafo2.textContent = "Felicidades tenes un 15% de descuento"
        parrafo2.style.color = 'green'
    }
    else {
        parrafo2.style.color = 'red'
        parrafo2.textContent = "No tienes descuento"
    }
}

let año_de_nacimiento = document.querySelector ('#ej3') 
let parrafo3 = document.querySelector ('#parrafo3')
let boton3 = document.querySelector ('#boton3')
let añoactual = 2026
let resultado

boton3.onclick = function (){
resultado = añoactual - año_de_nacimiento
         parrafo3.textContent = "tu edad es " + resultado
         


    }
    




