/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

let suma = 0;

while (confirm("Pulse Aceptar para ingresar un número o Cancelar para salir y observar la suma de los introducidos.")) {
    let num = parseInt(prompt("Ingrese un número"));
    // usar función isNaN()
    if (isNaN(num)) {
        alert("No ingresaste un número. Inténtalo nuevamente.");
    } else {
        suma += num;
    }
}

document.write("El resultado de la suma de los números ingresados es: " + suma);