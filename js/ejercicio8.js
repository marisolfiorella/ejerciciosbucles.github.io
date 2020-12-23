/*Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
*/

let num = prompt("Ingrese un numero menor a 50");
if (Number(num) == num) {
    if (num <= 50 && num > 0) {
        let rep, i;
        for (i = 0; i <= num; i++) {
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write(" <br>");
        }
    } else {
        alert("El numero es invalido");
    }
} else {
    alert("No has introducido un numero")
}