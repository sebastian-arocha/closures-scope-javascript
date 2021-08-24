//En esta clase veremos como trabaja el ámbito léxico dentro de un closure,
//y como vamos a poder generar nuevos alcances dentro de lo que estamos creando y
//cómo podemos implementar estas funciones de formas distintas.

//1. Creamos la función en donde podremos contar los elementos por cada iteración
const buildCount = (i) => {
  //1.1 Creamos la variable que irá cambiando en cada iteración
  let count = i;
  //1.2 Creamos la función anidada que trabaja con la variable global
  const displayCount = () => {
    //1.3 Imprimimos la pantalla el resultado de la variable actual mas su incremento
    console.log(count++); //PERO
    //¿Qué ocurre acá? Por la forma que declaramos lo que se imprimirá (count++), el
    //compilador de JS entiende que primero imprimirá el valor actual de count y luego
    //de que lo imprima hará la adición, por lo tanto la primera vez que corramos el
    //código veremos el valor que le pasamos sin SUMARSE y ya para la segunda vez
    //se mostrará lo que se hizo en la primera iteración
  };
  return displayCount;
  //1.4 Retornamos el valor de la función anidada para que al llamar la función padre
  //muestre el resultado de la funcion anidada
};

//2. Creamos una variable que tendrá como valor la función padre, hice la prueba
//llamando la función sola y solo devuelve el código de la función anidada
//pero para que pueda retornar lo que queremos lo guardamos en una nueva variable
const myCount = buildCount(1);
//2.1 Ahora llamamos el resultado de nuestra variable que nos mostrará
//el valor de i + 1 por cada iteración
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();

// 1 - myCount -- comienza en 1
// 2 - myCount
// 3 - myCount
// 10 - myOtherCount -- comienza en 10
// 11 - myOtherCount

//Ahora, veremos como podemos utilizar estos closures en distintas variables con
//distintos parámetros y vemos que si funcionan, podemos usar closures para poder
//repetir ciertas tareas y guardarlas en distintas variables o realizar una tarea
//parecida y que cambien algunas cosas. En este caso, en la variable myOtherCount
//se guarda la misma función que realizamos anteriormente pero ahora la cuenta
//empieza en 10, en vez de 1, y si llamamos a las dos variables veremos que la
//funcionalidad es totalmente distinta.
