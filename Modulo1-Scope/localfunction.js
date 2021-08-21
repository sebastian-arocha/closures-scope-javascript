//1. Creamos la función
const fruits = () => {
  var fruit = "Manzana";
  console.log(fruit);
};

fruits();
// > Manzana

//2. Crearemos otra función con distintas variables y veremos como se comportan
const anotherFunction = () => {
  var x = 1;
  var x = 2; //Se redeclara la variable con var
  let y = 1;
  //let y = 2; Error ya que no se puede redeclarar
  y = 2;
  const z = 3; //No se puede reasignar, es constante
  console.log(x);
  console.log(y);
  console.log(z);
  //Llamamos las variables
};

anotherFunction();
