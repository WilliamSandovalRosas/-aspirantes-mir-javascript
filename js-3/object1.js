let pedro{
    nombre= "Pedro Perez",
    edad

}

for (let llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
      alert(pedro[llave])
    }
  }
  
  let llaves = Object.keys(persona);
  for (let i=0; i < llaves.length; i++) {
    let llave = llaves[i];
    console.log(persona[llave]);
  