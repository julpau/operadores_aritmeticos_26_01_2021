//Operadores de concatenacion

let nombre = "Hersain Lozada";
let edad = 44;

//Primera manera (uno de los datos es texto)
console.log('PRIMERA MANERA')
console.log('muestra nombre,edad: ',nombre,edad);
console.log('concatena nombre+edad: '+nombre+' '+edad);

//Segunda manera (ambos datos son numericos)
//Se debe manejar uno de los datos como texto
//ejemplo: numero1 = 1 y numero2 = 2, se debe mostrar:
console.log('SEGUNDA MANERA')
let numero1 = '1'
let numero2 = 2

console.log('muestra numero1, numero2: ',numero1,numero2);
console.log('concatena numero1+numero2: '+numero1+numero2);

//Tercera manera
console.log('TERCERA MANERA')
let dato1 = '10';
let dato2 = 23;
let dato3 = '000';

console.log(dato1.concat(dato2,dato3))

//Cuarta manera
console.log('CUARTA MANERA')
console.log(`hola soy ${dato1}y mi edad es ${dato2}`); //Ojo a las comillas

//Operacion de concatenacion 

let nombre1 = "Miguel Angel";
let edad1 = 23;
let altura1 = 1.80;
let profesor1 = true;

// Primara manera de concatenar
console.log(nombre1+edad1); //una de las variables tiene que ser de tipo string

// segunda manera de concatenar
console.log(""+edad1+altura1);// Al principio del texto tiene que llevar 
                            // la inicializacion de tipo de datos estring 
                            // **Ejemplo las comillas**  
                            // (""), ('') que identifican que el tipo de dato 
                            // es string

// tercera manera de concatenar
console.log(nombre1.concat(edad1));//Usando el metodo **concat** 
                                // podemos concatener cualquier 
                                // tipo de datos siempre que la variable 
                                // sea de tipo string

// cuarta manera de concatenar
console.log(nombre1, edad1, profesor1);  //Podemos concatenar las variables con **,** 
                            // pero al momento de visualizar toda la cadena 
                            // cambia **Ejemplo** si mesclamos un strin con 
                            // un numbre y un booleaon se mostrar en la pantall 
                            // pero se pordra diferenciar uno de otro ya que el 
                            // mensaje no se comportara como si guera un string 
                            // si un ropecabezas de cada tipo de dato en este 
                            // caso unsando **console.log()** no generar ningun 
                            // error pero al moneto de usar **document.write()** 
                            // no se vera el resulta deseado se mopstrar las 
                            // variables de tipo string pero las demos mostrara 
                            // el tipo de datp que conforma la variable y en 
                            // caso del evento **alert()** solo se podra usa 
                            // el simblo **+** para concatenar

// quinta manera de concatenar
console.log(`${nombre1} ${edad1}`);//Usando las comillas Backticks podemos 
                                // identificar cada variable de una manera 
                                // mas comda y la validacion del tipo de dato 
                                // de cada una sera mas comoda

//OPERACION DE DECREMENTO
let num1 = 10;
//num--;      //reduce la cantidad de 1 en 1
console.log('Decremento');
console.warn('num1 antes = ', num1);
console.warn(`Operación de decremento: num1-5 = ${num1-5}`);
console.warn('num1 despues = ', num1);

//OPERADOR DE INCREMENTO
console.log('Incremento');
console.warn('num1 antes =', num1);
console.warn(`Operador de incremento: num1+1 = ${num1+1}`);
console.warn('num1 despues =', num1);

//OPERADOR DE MULTIPLICACION
console.log('Multiplicación');
console.warn('num1 antes =', num1);
console.warn(`Operador de multiplicación: num1*2 = 10*2 = ${num1*2}`);
console.warn('num1 despues =', num1);

//OPERADOR DE DIVISION
console.log('Division')
console.warn('num1 antes =', num1);
console.warn('Operador de división: num1/2 ', num1/2); //Muestra el resultado pero no modifica valor de la variable
console.warn('num1 después =', num1);

//OPERADOR DE EXPONENCIACIÓN
console.log('Exponenciación');
console.warn('num1 antes =', num1);
console.warn('Operador de exponenciación: num1**2 ', num1**2); //Muestra el resultado pero no modifica valor de la variable
console.warn('num1 después =', num1);

//Operación de unary negativo
console.log('Unary negativo');
console.warn('Si num1 =', num1, ', entonces: -(num1) =', -num1);
num1 = -num1
console.warn('Si num1 =', num1, ', entonces: -(num1) =', -num1);