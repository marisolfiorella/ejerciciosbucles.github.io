/*Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/


let i, j;

let filas = Number(prompt("Introduce numero de filas"));

let colum = Number(prompt("Introduce numero de columnas"));

let res = filas * colum;

document.write("<table border>");

for (i = 0; i < filas; i++) {

    document.write("<tr>");

    for (j = 0; j < colum; j++) {

        document.write("<td>");

        document.write(res);

        res--;

        document.write("</td>");
    }

    document.write("</tr>");
}

document.write("</table>");