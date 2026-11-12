let notas = [];

let salir = false;

do {

    let opcion = window.prompt("Elige una opción: \n" +
        "a. Introducir una nota \n" +
        "b. Introducir una nota al final \n" +
        "c. Subir todas las notas X puntos \n" +
        "d. Calcular estadisticas actuales \n" +
        "e. Vaciar notas \n" +
        "f. Inicializar N notas a valor X \n" +
        "g. Eliminar la primera nota \n" +
        "h. Eliminar la segunda nota \n" +
        "i. Establecer a 0 todos los suspensos \n" +
        "j. Sustituir una nota por otra \n" +
        "k. Añadir una nota en una posición determinada \n" +
        "l. Contar el número de suspenso \n" +
        "m. Finalizar la ejecución del programa");

    switch (opcion) {
        case "a":
            let notaPrincipio = parseInt(window.prompt("Introduce una nota"));
            if (notaPrincipio >= 0 && notaPrincipio <= 10) {
                notas.unshift(notaPrincipio);
            }
            else {
                window.alert("Introduce una nota entre 0 y 10");
            }
            break;
        case "b":
            let notaAlFinal = parseInt(window.prompt("Introduce una nota"));
            if (notaAlFinal >= 0 && notaAlFinal <= 10) {
                notas.push(notaAlFinal);
            }
            else {
                window.alert("Introduce una nota entre 0 y 10");
            }
            break;
        case "c":
            let puntosASumar = window.prompt("Introduce los puntos a sumar");
            if (puntosASumar >= 0 && puntosASumar <= 10) {
                for (let i = 0; i < notas.length; i++) {
                    if (notas[i] + puntosASumar > 10) {
                        notas[i] = 10;
                    }
                    else {
                        notas[i] += puntosASumar;
                    }
                }
            } else {
                window.alert("Introduce unos puntos a sumar entre 0 y 10");
            }
            break;
        case "d":
            if (notas.length != 0) {
                let media = 0;
                let contador = 0;
                notas.sort();
                for (let i = 0; i < notas.length; i++) {
                    media += notas[i];
                    contador++;
                }
                window.alert("Estadisticas: \n" +
                    "Nota maxima = " + notas[notas.length - 1] + "\n" +
                    "Nota minima = " + notas[0] + "\n" +
                    "Nota media = " + media / contador + "\n"
                );
            }
            else {
                window.alert("No es posible calcular la estadistica")
            }
            break;
        case "e":
            for (let i = 0; i < notas.length; i++) {
                notas.shift();
            }
            window.alert("Se ha vaciado la lista");
            break;
        case "m":
            salir = true;
            window.alert("Has salido");
            break;
    }

} while (!salir)