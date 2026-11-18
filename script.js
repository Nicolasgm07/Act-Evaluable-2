function act1(){
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
            console.table(notas);
            break;
        case "b":
            let notaAlFinal = parseInt(window.prompt("Introduce una nota"));
            if (notaAlFinal >= 0 && notaAlFinal <= 10) {
                notas.push(notaAlFinal);
            }
            else {
                window.alert("Introduce una nota entre 0 y 10");
            }
            console.table(notas);
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
            console.table(notas);
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
            console.table(notas);
            break;
        case "e":
            for (let i = 0; i < notas.length; i++) {
                notas.shift();
            }
            window.alert("Se ha vaciado la lista");
            console.table(notas);
            break;
        case "f":
            let numNotas = window.prompt("Cuantas notas vas a introducir");
            let valor = window.prompt("A que valor");
            for (let i = 0; i < notas.length; i++) {
                notas.shift();
            }
            for (let i = 0; i < numNotas; i++) {
                notas[i] = valor;
            }
            console.table(notas);
            break;
        case "g":
            if(notas.length == 0){
                window.alert("La lista esta vacía");
            }
            else{
                notas.shift();
                window.alert("Se ha eliminado la primera nota")
                console.table(notas);
            }
            break;
        case "h":
            if(notas.length < 2){
                window.alert("La lista no tiene una segunda nota");
            }
            else{
                notas.splice(1, 1);
                window.alert("Se ha eliminado la segunda nota")
                console.table(notas);
            }
            break;
        case "i":
            for (let i = 0; i < notas.length; i++) {
                if(notas[i] < 5 && notas[i] >= 0){
                    notas[i] = 0;
                }
            }
            break;
        case "j":
            let notaOrigen = window.prompt("Introduce la nota que quieres sustituir");
            let notaDestino = window.prompt("Introduce la nota por la que se cambiara");
            for (let i = 0; i < notas.length; i++) {
                if(notas[i] == notaOrigen){
                    notas[i] = notaDestino;
                }
            }
            break;
        case "k":
            let notaDeterminada = window.prompt("Introduce la nota");
            let posicion = window.prompt("Introduce la posicion en la que se insertara");
            notas.splice(posicion, 0, notaDeterminada);
            console.table(notas);
            break;
        case "l":
            let totalSuspensos = 0;
            for (let i = 0; i < notas.length; i++) {
                if(notas[i] < 5){
                    totalSuspensos++;
                }
            }
            console.log(totalSuspensos);
            break;
        case "m":
            salir = true;
            window.alert("Has salido");
            break;
    }

} while (!salir)
}

// act1();
function act2(){
let participantes = [];
let set_participantes = new Set (participantes);
let salir = false;

do{
    let opcion = window.prompt("Elige una opción: \n" +
        "a. Inscribir un participante \n" +
        "b. Dar de baja un participante \n" +
        "c. Comprobar inscripción \n" +
        "d. Mostrar participantes \n" +
        "e. Vaciar inscripciones \n" + 
        "f. Salir \n");
    
    switch(opcion){
        case "a":
            let participante = window.prompt("Introduce el nombre del participante");
            let duplicado = set_participantes.has(participante);
                if(duplicado){
                    window.alert("Ya esta en la lista");
                }
                else{
                    set_participantes.add(participante);
                }
            console.table(set_participantes);
            break;
        case "b":
            let encontrado = false;
            let eliminarParticipante = window.prompt("Introduce el nombre del participante");
            if(set_participantes.has(eliminarParticipante)){
                encontrado = true;
                set_participantes.delete(eliminarParticipante);
            }
            if(encontrado == false){
                window.alert("No se ha encontrado");
            }
            console.table(set_participantes);
            break;
        case "c":
            let comprobarParticipante = window.prompt("Introduce el nombre del participante");
            let inscrito = set_participantes.has(comprobarParticipante);
            if(inscrito){
                window.alert("Esta inscrito");
            }
            else{
                window.alert("No esta inscrito");
            }
            break;
        case "d":
            let numParticipantes = 0;
            for (let i = 0; i < set_participantes.length; i++) {
                console.log(set_participantes[i]);
                numParticipantes++;
            }
            console.log("Numero total de participantes: " + numParticipantes);
            break;
        case "e":
            set_participantes = new Set ([]);
            window.alert("Vaciado");
            console.log(set_participantes);
            break;
        case "f":
            salir = true;
            window.alert("Has salido");
            break;
    }

}while(!salir)

}

// act2();

let catalogo = new Map();
let salir = false;

do{
    let opcion = window.prompt("Elige una opción: \n" +
        "a. Añadir un libro \n" +
        "b. Eliminar un libro \n" +
        "c. Consultar un libro \n" +
        "d. Mostrar catálogo \n" +
        "e. Modificar ejemplares \n" +
        "f. Buscar libros de un autor \n" +
        "g. Prestar un libro \n" +
        "h. Devolver un libro \n" +
        "i. Mostrar estadísticas \n" +
        "j. Vaciar catálogo \n" +
        "k. Salir \n");

        switch(opcion)
    let ISBN = window.prompt("Introduce el ISBN")
}while(!salir)
