//1 Creamos la función a la cual podremos acceder a los datos privados
const person = () => {
  //1.1 Declaramos la variable en el scope global de la función, a la cual
  //podremos acceder a su valor a través de los métodos (solo su valor)
  let saveName = "Sebastian";
  //1.2 Retornaremos los siguientes métodos al ejecutar la función
  //para que a través de otras variables podamos usar estos métodos
  return {
    //1.2.1 Este método retornará el valor de la variable global
    getName: () => {
      return saveName;
    },
    //1.2.2 Este método podrá cambiar el valor con el parámetro que le pasemos
    setName: (name) => {
      saveName = name;
    },
  };
};

//2. Creamos la variable que ejecutará la función al ser llamada
const newPerson = person();
//2.1 Imprimimos el valor de la variable actual en la consola (Sebastian)
console.log(newPerson.getName());
//2.2 Ahora asignaremos un nuevo valor a la variable saveName
newPerson.setName("GuilEsmit");
//2.3 Imprimimos en consola el valor de la variable saveName actualizado
console.log(newPerson.getName());

// Sebastian
// GuilEsmit
