//GLOBAL SCOPE

//El Scope Global se refiere a cuando una variable no está declarada dentro
//de ninguna función o bloque de código y se puede llamar desde cualquier
//lugar en nuestro código

//Crearemos una variable con scope global, es decir, podemos acceder en todo momento
//a ella ya que está en el alcance principal
let hello = "Hello";
//Ahora crearemos otras dos variables globales
const world = "World!";
var saludo = hello + " " + world;

//Crearemos una función que podrá acceder a estas variables
const funcionPrueba = () => {
  console.log(hello);
  console.log(world);
  console.log(saludo);
};

funcionPrueba();

//DETALLES DEL SCOPE GLOBAL

//Cuando usamos la palabra reservada var, podemos declarar la misma variable infinitas veces
//y esto cambiará su valor, sin embargo esto es una mala práctica.

var saludo = "Holamundo";
//Pero como podemos ver, la variable ya está creada arriba, entonces esto que estamos haciendo
//es una mala práctica
console.log(saludo);

//Con let, no podemos declarar dos veces la misma variable pero si podemos cambiar su valor
//al llamarla en otra parte

let comida = "Mondongo";
comida = "Arepas";
console.log(comida);

//Cuando usamos const no podemos cambiar el valor de la variable, siempre es la misma

const zapato = "Jordan";
zapato = "Adidas"; //ERROR

console.log(zapato);

//PRINCIPALES ERRORES DENTRO DEL SCOPE GLOBAL

//1. Declarar una variable dentro de una función sin las palabras reservadas
//lo convertirá en una variable global.

function variableGlobal() {
  nombre = "Sebastian";
}

variableGlobal();
console.log(nombre);
//Sebastian --esto no debería pasar--

//2. Cuando hacemos una doble asignación de variables dentro de una función
//también convierte la segunda variable entonces en una variable global

function dobleVariableGlobal() {
  var prueba = (globalVar = "Sebastian");
}

console.log(globalVar);
//Sebastian --esto no debería pasar--
