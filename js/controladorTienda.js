//1.se crea una variable para guardar una etiqueta
let etiquetaTitulo = document.getElementById("titulo");
let etiquetaNavBar=document.getElementById("navbar");
//impresion por consola de la etiqueta
console.log(etiquetaTitulo);

//2. como moddificar el texo de una etiqueta
etiquetaTitulo.textContent="el anime mas vendido";
etiquetaNavBar.textContent="OnePiece";

//controlando una imagen 
//src me permite cambiar el atributo de la ubicacion del archivo sin odificar directamente en el html 
let etiquetaImagen =document.getElementById("fotoLogo");
etiquetaImagen.src="img/WorldMap.jpg";
