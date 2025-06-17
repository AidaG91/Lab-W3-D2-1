let nombre = prompt("¿Cómo te llamas?")
let localidad = prompt("¿Dónde vives?")
let hobby = prompt("¿Qué te gusta hacer?")

let user = {
    nombre,
    localidad,
    hobby
}

console.log(`Te llamas ${user.nombre}, vives en ${user.localidad} y te gusta ${user.hobby}.`)