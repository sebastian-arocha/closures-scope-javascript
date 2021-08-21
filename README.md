# closures-scope-javascript

- En este curso aprenderemos los conceptos esenciales del Scope y los Closures en JavaScript

# Módulo 1 Scope

- **1: ¿Qué es el Scope?**

  Es el alcance que va a tener la variable dentro del código, es decir, es el que se encarga de a que bloques de código puede acceder una variable.

- **2: ¿Qué es el Scope Global? Y explicamos sus particularidades**

  Una variable se encuentra dentro del Scope Global cuando no está declarada dentro de ninguna función o bloque de código y podemos acceder desde cualquier parte a estas variables.

- **3: ¿Qué es el Scope Local? Y, ¿qué es el ámbito léxico?**

  El Scope Local es cuando una variable se declara dentro de un bloque de código o una función y solamente existe dentro de esta estructura, es decir, solamente podemos tener acceso dentro de la función y si intentamos acceder a esta variable desde otra parte no podremos. El Scope Local tiene dos variantes muy particulares, scope local en funciones y scope local en bloque.

  En JavaScript las funciones tienen su propio ámbito léxico, lo que quiere decir que depende de cómo son declaradas en el código y no de cuando se ejecutan.

- **4: SCOPE LOCAL: Function Scope y Block Scope**

  Function Scope es el alcance que tienen las variables locales dentro de una función, incluso dependiendo del tipo de variables se le pueden reasignar su valor dentro de la misma función. Cuando trabajamos con variables dentro funciones es recomendable no usar la palabra reservada **_var_** porque esto puede crear errores en nuestro proyecto redeclarando las variables, es mucho más recomendable usar **_let_** y **_const_** ya que así garantizamos el buen funcionamiento de nuestro código
