//SCOPE LOCAL
//El scope local ocurre cuando una variable es declarada dentro de una función o un bloque
//de código, por lo tanto no se puede acceder desde cualquier parte a esta variable
//sino solo dentro de esta función.
const helloWorld = () => {
  const saludo = "Hola mundo!";
  console.log(saludo);
};

// helloWorld();
// console.log(saludo);

//Ambito léxico

//JavaScript interpreta las variables depende de donde estén declaradas dentro del código
//y no de cuando se mandan a ejecutar, en este caso vemos que en el código pueden existir
//dos o más variables con el mismo nombre y que tengan distintos alcances

var scope = "Soy global";
//Solo tiene el valor que se declaró aquí

const functionScope = () => {
  var scope = "Soy una variable local";
  //La función solo trabaja con esta variable, no con la global
  const func = () => {
    return scope;
  };
  console.log(func());
  //Mandamos a llamar la función de retorno
};

functionScope();
// > Soy una variable local
console.log(scope);
// > Soy global
