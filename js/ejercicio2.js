/*Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

●	0-2: Muy deficiente
●	3-4: Insuficiente
●	5-6: Suficiente
●	7: Bien
●	8-9: Notable
●	10: Sobresaliente

Si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el numero ingresado no es válido mostrar el mensaje “Introduce un número válido”.
*/

let nota = parseInt(prompt("Ingrese una nota del 1-10"));

switch (nota) {
    case 0:
        alert("Nota muy deficiente");
        break;
    case 1:
        alert("Nota muy deficiente");
        break;
    case 2:
        alert("Nota muy deficiente");
        break;
    case 3:
        alert("Nota insuficiente");
        break;
    case 4:
        alert("Nota muy deficiente");
        break;
    case 5:
        alert("Nota suficiente");
        break;
    case 6:
        alert("Nota suficiente");
        break;
    case 7:
        alert("Nota bien");
        break;
    case 8:
        alert("Nota notable");
        break;
    case 9:
        alert("Nota notable");
        break;
    case 10:
        alert("Nota sobresaliente");
        break;
    default:
        alert("Numero erroneo, introduce un numero valido")


}