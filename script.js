const tituloJuguete = document.querySelector("#titulo-juguete");
const cuerpoPagina = document.querySelector("body");
const imgPatito = document.querySelector("#img-patito-juguete");

/* cuerpoPagina.innerHTML += "<h2> :D </h2>"; */

let opcion = prompt("Ingrese 1 para blanco y 2 para rosa");

if ( opcion == 1) {
    cuerpoPagina.style.backgroundColor = "green";
    tituloJuguete.style.color = "white";//cambio el color de texto
}else{
    cuerpoPagina.style.backgroundColor = "gray";
    tituloJuguete.style.color = "pink";//cambio el color de texto
}


tituloJuguete.innerHTML = "metodo de depuracion del patito de juguete";

imgPatito.src = "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rubber_duck_assisting_with_debugging.jpg";