//Los closures son la combinación de una función y el ámbito léxico de la misma

// const moneyBox = (coins) => {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`Money box: $${saveCoins}`);
// };

// moneyBox(10);
// moneyBox(50);

//1. Creamos la función de la alcancía
const moneyBox = () => {
  //1.1 Declaramos la variable en el scope de la función
  let saveCoins = 0;
  //1.2 Creamos la función que hará el cálculo
  const countCoins = (coins) => {
    saveCoins += coins;
    //La variable que fue declarada en el scope anterior se sumará con el
    //el parámetro de la función, donde esta función recuerda el ámbito
    //léxico en donde se encuentra
    console.log(`Money box: $${saveCoins}`);
    //1.3 la mandamos a llamar con un console.log
  };
  return countCoins;
  //1.4 retornamos la función
};

//2. Creamos una variable que vaya actualizando su valor por cada ejecución
let myMoneyBox = moneyBox();

//3. Ejecutamos la función
myMoneyBox(10);
// 10
myMoneyBox(20);
// 30
