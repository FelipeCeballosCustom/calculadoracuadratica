
let numeroUno = parseFloat(prompt("Escribe el primer número:"));
let numeroDos = parseFloat(prompt("Escribe el segundo número:"));
let numeroTres = parseFloat(prompt("Escribe el tercer número:"));

let resultado = numeroDos * numeroDos - 4 * numeroUno * numeroTres;

if (resultado > 0) {
    let respuestaUno = (-numeroDos + Math.sqrt(resultado)) / (2 * numeroUno);
    let respuestaDos = (-numeroDos - Math.sqrt(resultado)) / (2 * numeroUno);
    console.log("Las respuestas son:", respuestaUno, "y", respuestaDos);
} else if (resultado === 0) {
    let respuesta = -numeroDos / (2 * numeroUno);
    console.log("La respuesta es:", respuesta);
} else {
    console.log("No hay respuesta real.");
}