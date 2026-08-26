let monto = document.querySelector ('#ej1')





let parrafo1 = document.querySelector ("#parrafo1")
let boton1 = document.querySelector ("#boton1")

boton1.addEventListener("click", function() {
    if (monto.value >50000) { 
 parrafo1.textContent = "felicidades tenes un 10% de descuento";
    }
        
    else  {
        parrafo1.textContent = "no tienes descuento";
    }


});


