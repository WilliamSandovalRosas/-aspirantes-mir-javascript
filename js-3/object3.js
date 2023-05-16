let receta = {};

receta.nombre = "Sandwich";
receta.ingredientes = [];

console.log(receta);

receta.ingredientes.push({nombre:"Pan",cantidad:2});
receta.ingredientes.push({nombre:"Queso",cantidad:1});

console.log(receta);

/*
for (let llave in persona) {
  if (persona.hasOwnProperty(llave)) {
    console.log(persona[llave])
  }
}

//////////////////
let llaves = Object.keys(persona);
for (let i=0; i < llaves.length; i++) {
  let llave = llaves[i];
  console.log(persona[llave]);
}

*/

let totCant = 0;
let llaves = Object.keys(receta.ingredientes[0]);
nombre = llaves[0];
cantidad=llaves[1];

console.log(receta.ingredientes[0].nombre);
//console.log(receta.ingredientes[0].cantidad);


/* for(let i=0; i<receta.ingredientes.length; i++){
    
    totCant+=receta.ingredientes[i].cantidad;
    console.log(totCant);
}  */

function cantidadIngredientes(objeto){

    for(let i=0; i<objeto.ingredientes.length; i++){
    
        totCant+=objeto.ingredientes[i].cantidad;
        
    }
    return totCant;
}

console.log(cantidadIngredientes(receta));

