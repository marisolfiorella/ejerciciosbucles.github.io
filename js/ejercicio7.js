/*Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).*/


let numrep = prompt("Introduce numero de repeticiones");

if (Number(numrep) == numrep) {

    if (numrep > 0 && numrep <= 50) {
        let rep, i;

        for (i = numrep; i >= 1; i--) {

            for (rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    } else {
        alert("El número introducido no es válido");
    }
} else {
    alert("No has introducido un número");
}