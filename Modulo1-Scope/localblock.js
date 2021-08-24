//El Block Scope ocurre cuando una variable tiene un alcance solo dentro de un bloque de código
//o dentro y fuera de este bloque de código, veamos un ejemplo

//Primer caso

//1. Creamos la función
const fruits = () => {
  if (true) {
    //Declaramos las variables
    //var tiene un alcance en toda la función
    var fruit1 = "Manzana";
    var fruit2 = "Pera";
    var fruit3 = "Limon";
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
  //imprimimos el valor en consola
};

// fruits();

//Resultado
// > Manzana
// > Pera
// > Limón

//La palabra reservada var, tiene un alcance dentro de toda la función, es decir, que
//la podemos llamar dentro o fuera del bloque de código e igual funcionará bien

//FUNCIONA BIEN, ¿PERO QUE PASARÍA SI UTILIZAMOS LET Y CONST EN VEZ DE VAR?
//2.

const fruits2 = () => {
  if (true) {
    var fruit1 = "Manzana"; //alcance de toda la función
    let fruit2 = "Pera"; //alcance dentro del bloque
    const fruit3 = "Limon"; //alcance dentro del bloque
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};

// fruits();

//Resultado
// > Manzana
// ERROR

//A diferencia de la palabra reservada var, let y const solamente tienen alcance dentro del
//bloque de código, y para que podamos acceder a estas funciones deben ser dentro del mismo bloque
//de código donde se generaron las variables

//¿CÓMO SOLUCIONAMOS ESTO?
//3.
const fruits3 = () => {
  if (true) {
    var fruit1 = "Manzana"; //alcance de toda la función
    let fruit2 = "Pera"; //alcance dentro del bloque de código
    const fruit3 = "Limon"; //alcance dentro del bloque de código
    //llamamos las variables DENTRO del bloque
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1); //a esta la podemos llamar fuera
};

// fruits();
//Resultado
// > Manzana
// > Pera
// > Limón

// Segundo caso
// let x = 1;
// {
//   let x = 2;
//   console.log(x);
// }
// console.log(x);

// Resultado
//  > 2
//  > 1

// Con let funciona bien, pero que pasaría si utilizamos la palabra reservada var?

// var x = 1; //variable scope global
// {
//   var x = 2; //esta variable afectará el valor de la global
//   console.log(x);
// }
// console.log(x);

//Resultado
// > 2 block scope que trasladó el valor a global
// > 2 global scope

//la variable que está dentro del bloque de código afecta también a la variable global
//reasignandole su valor, es por ello que cuando trabajamos dentro del scope de bloque
//no debemos usar var para declarar variables sino let

//Tercer caso

const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

//Resultado
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

anotherFunction();

//Resultado
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
