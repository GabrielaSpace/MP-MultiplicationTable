
/* <p>
Ejercicio 2: Crea una función que pida un número por parámetro y guarde su tabla de multiplicar en un array.
Ejemplo --> Tabla del 3 --> [3,6,9,12,15,18,21,24,27,30]
</p> */

let numero =parseInt(prompt("Ingrese el número de la tabla que desea"));
let tabla =[];

/* for (let i = 0; i <= 10 ; i++) {
    document.write(+numero+" x "+i+" = "+(numero*i)+"<br>");  

} */
function multiplicar(numero) {
    

for (let i = 1; i <= 10 ; i++) {
    tabla.push(i*numero);
}
return tabla;
}