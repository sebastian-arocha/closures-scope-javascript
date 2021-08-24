//Podemos crear closures de diferentes formas y también de forma involuntaria.
//Esto significa que no tenemos control sobre lo que estamos creando.

//Debemos recordar que en esta función habíamos creado un closure que,
//al declarar el ciclo for con la palabra reservada var teníamos el
//último valor que tenía asignada la variable, en vez de sumarle uno
//al valor nuevo en cada iteración. Por lo tanto, no esta cumpliendo con el objetivo.

const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

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

//Nosotros solucionábamos el problema colocando una variable let ya
//que la palabra reservada var tiene un alcance global dentro de la
//función y por cada iteración el closure no recordaba su valor sino
//que solamente lo imprimía, en cambio con let el closure si recuerda
//en el bloque que fue declarada. Y por ende la ejecuta correctamente.

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();

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
