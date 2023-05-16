pedro={
    nombre:"Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar","squash","piano"]
}

console.log(pedro.edad);

pedro.estatura=1.8;

delete pedro.activo;

console.log(pedro.activo);

/* for (let llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
      alert(pedro[llave])
    }
  }
  
  let llaves = Object.keys(persona);
  for (let i=0; i < llaves.length; i++) {
    let llave = llaves[i];
    console.log(persona[llave]);
  }
   */

llaves = Object.keys(pedro);
for (let i=0; i < llaves.length; i++) {
  let key = llaves[i];
  console.log(key+": "+pedro[key]);
}

pedro.saluda = function(){
    console.log("Hola me llamo "+ this.name);
  }
  
  pedro.saluda();