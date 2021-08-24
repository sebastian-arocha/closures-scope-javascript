//Las herramientas de debugging que nos ofrecen los navegadores (DevTools)
//son muy valiosas para nuestro día a día, con el debugging podemos encontrar
//los errores de nuestro código y saber como está funcionando

//Para hacer el debugging tenemos que pegar este código en la consola de nuestro
//navegador, y veremos que al llegar a la palabra reservada debugger
//el código se detendrá y empezará el debugging

//La palabra reservada debugger es la que indica al navegador que queremos
//iniciar el proceso de debugging en esa línea de código, podemos colocarla
//las veces que queramos en el código

//1. Creamos una variable en el scope global
var a = "Hello";

//2. Creamos una función
function hello() {
  //2.1 Creamos dos variables en el scope local de la función
  let b = "Hello World";
  const c = "Hello World!";
  //2.2 Creamos un bloque, por lo tanto las variables que estén
  //dentro de él estarán en el Scope Block
  if (true) {
    let d = "Hello World!!";
    debugger;
    //cuando llega a este punto el código se detiene y empieza el debugging
  }
}

hello();

//Debugging con closures

const moneyBox = () => {
  debugger;
  //se parárá la primera vez aquí
  let saveCoins = 0;
  const countCoins = (coins) => {
    debugger;
    //luego de pasar por la anterior se detendrá aquí y nos mostrará lo que lleva en memoria
    saveCoins += coins;
    console.log(`Money box: $${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(10);
myMoneyBox(20);

//Al ejecutarlo la primera vez, pausará el código en la primera línea de debugger,
//y en el Scope nos muestra que las variables dentro de esta función aún no están
//definidas. Ya que aún no ha recibido ningún valor, para continuar con la ejecución
//del código le daremos al botón azul del cuadro amarillo de la izquierda.

//En la segunda línea de debugger, nos encontramos en que nuestra función anidada ya recibió el valor de 10
//en el parámetro coins, pero aún donde estamos no lo ha asignado a la variable saveCoins,
//que tiene un valor de 0. Cuando este código termine de ejecutarse, la variable saveCoins
//tendrá el valor de 10.

//Presionamos el botón de continuar ejecución nuevamente y ahora nos muestra en su segunda
//ejecución que la variable saveCoins ya tiene el valor de 10 y la función countCoins
//recibió el argumento 20 en el parámetro coins, por lo tanto cuando termine de correr
//el código se sumará el valor de saveCoins + coins que sería igual a 30. Y nuestro código
//funciona perfectamente.
