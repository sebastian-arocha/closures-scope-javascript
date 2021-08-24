// El hoisting es el "levantamiento" de las declaraciones. Esto ocurre más
//que todo cuando utilizamos las palabras reservadas var y function, pero
//con la llegada de let y const y arrow functions en ECMAScript 6 se ha fomentado el evitar el hoisting.

// var a = undefined;
a = 2;
var a; //El compilador eleva esta variable y le asigna el valor de undefined
console.log(a);

// 2

//El compilador de JavaScript, antes de interpretar el código, primero lo lee y
//cuando se da cuenta que el console.log manda a llamar la variable a, la eleva
//hasta el principio y le da el valor de undefined, luego se inicializa y finalmente
//se ejecuta nuestro código, dandole el valor que se les asignó.

//SEGUNDO CASO

// var a = undefined;
console.log(a); //El compilador detecta que se manda a llamar una variable no declarada
var a = 5; //La declara al inicio del código con el valor undefined

//undefined

//TERCER CASO

function nameOfDog(name) {
  console.log(name);
}

nameOfDog("Bruno"); //Se llama a la función construida previamente y se le pasa
//el parámetro

//Bruno

nameOfDog("Bruno"); //Se llama a una función futura y el compilador entiende que lo
//que está dentro es un argumento y posiblemente vaya a ser utilizado como parámetro,
//por lo que lo guarda en memoria

function nameOfDog(name) {
  console.log(name);
} //Al ver que la llamada que se guardó en memoria tiene relación con la función lo
//que hace el compilador es que asigna el argumento en el parámetro de la función para
//su uso y posteriormente imprime el resultado en consola

//Bruno

//Al cambiar la llamada de la función hacia la parte superior, el compilador de
//JavaScript guarda en memoria esto antes de ser intepretado para su posterior
//ejecución, así la función no haya sido creada aún en ese momento.
