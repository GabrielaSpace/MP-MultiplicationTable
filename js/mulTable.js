
/* <p>
Ejercicio 2: Crea una función que pida un número por parámetro y guarde su tabla de multiplicar en un array.
Ejemplo --> Tabla del 3 --> [3,6,9,12,15,18,21,24,27,30]
</p> */

let numero =parseInt(prompt("Ingrese el número de la tabla que desea"));

for (let i = 0; i <= 10 ; i++) {
 
    document.write(+numero+" x "+i+" = "+(numero*i)+"<br>");  
}