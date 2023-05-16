let persona = {
    nombre: "William Sandoval",
    edad: 51,
    ciudad: "Bogotá",
    profesion: "Tecnico soporte"
}

console.log(persona);

function presentacion(persona){
    cadena = persona.nombre+", "+persona.edad+", "+persona.ciudad+", "+persona.profesion;
    return cadena
}

mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["play guitar","watch TV", "practice develop software"];

console.log(persona.hobbies);

for(let i = 0; i < persona.hobbies.length; i++){
    console.log(persona.hobbies[i]);
}