# closures-scope-javascript

- En este curso aprenderemos los conceptos esenciales del Scope y los Closures en JavaScript

##

# Módulo 1 - Scope

- **1: ¿Qué es el Scope?**

  Es el alcance que va a tener la variable dentro del código, es decir, es el que se encarga de a que bloques de código puede acceder una variable.

- **2: ¿Qué es el Scope Global? Y explicamos sus particularidades**

  Una variable se encuentra dentro del Scope Global cuando no está declarada dentro de ninguna función o bloque de código y podemos acceder desde cualquier parte a estas variables.

- **3: ¿Qué es el Scope Local? Y, ¿qué es el ámbito léxico?**

  El Scope Local es cuando una variable se declara dentro de un bloque de código o una función y solamente existe dentro de esta estructura, es decir, solamente podemos tener acceso dentro de la función y si intentamos acceder a esta variable desde otra parte no podremos. El Scope Local tiene dos variantes muy particulares, scope local en funciones y scope local en bloque.

  En JavaScript las funciones tienen su propio ámbito léxico, lo que quiere decir que depende de cómo son declaradas en el código y no de cuando se ejecutan.

- **4: SCOPE LOCAL: Function Scope y Block Scope**

  Function Scope es el alcance que tienen las variables locales dentro de una función, incluso dependiendo del tipo de variables se le pueden reasignar su valor dentro de la misma función. Cuando trabajamos con variables dentro funciones es recomendable no usar la palabra reservada **_var_** porque esto puede crear errores en nuestro proyecto redeclarando las variables, es mucho más recomendable usar **_let_** y **_const_** ya que así garantizamos el buen funcionamiento de nuestro código

  El Block Scope ocurre cuando utilizamos las variables let y const dentro de un bloque de código, estas solo existen dentro del bloque de código donde fueron declaradas y si la llamamos desde el scope de funciones o el scope global no podremos acceder a ellas. Lo que no ocurre con var, ya que var funciona como una variable global dentro del scope de función, y si está en un bloque de código igual se puede llamar desde fuera.

##

# Módulo 2 - Closures

- **1: ¿Qué es un Closure?**

  Un closure es la combinación de una función y el ámbito léxico en el cual ha sido declarada la función, es decir, un closure recuerda en el ámbito el cual ha sido creado.

- **2: Ámbito Léxico dentro de los Closures**

  Entender cómo funcionan el ámbito léxico dentro de los closures nos permite saber que dependiendo de como fueron declaradas las variables es que se van a ejecutar, también con esto podemos utilizar guardar las funciones en otras variables que pueden realizar la misma tarea pero con diferente finalidad.

- **3: Variables privadas en los Closures**

  Gracias a los closures podemos acceder a ciertos valores que solo pueden ser accedidos por medio de métodos y que no estarán disponibles fuera del scope de la función.

- **4: Loops**

  A la hora de hacer closure debemos cuidar la forma en la que declaramos nuestras variables globales ya que esto afecta al alcance y al ámbito léxico dentro de la función, por lo tanto si usamos var podemos llegar a tener errores que se salgan de nuestras manos.

##

# Módulo 3 - Hoisting

- **1: Hoisting**

  El hoisting es el "levantamiento" de las declaraciones. Esto ocurre al utilizar la palabra reservada var y function, con let y const no ocurre. La forma en que sucede esto es que el compilador de JavaScript al detectar que una variable es llamada en una parte del código aun cuando no ha sido inicializada, la declara invisiblemente y le asigna el valor de undefined.
