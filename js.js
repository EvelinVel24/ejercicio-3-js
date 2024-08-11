function mostrarMenu() {
    let opcion;

    do {
        // Mostrar el menú
        opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Ver las mejores películas de todos los tiempos\n" +
            "2. Conocer los próximos estrenos\n" +
            "3. Obtener información sobre actores famosos\n" +
            "4. Revisar las reseñas más recientes\n" +
            "5. Salir"
        );

        // Procesar la opción seleccionada
        switch (opcion) {
            case '1':
                alert('Las mejores películas de todos los tiempos incluyen clásicos como "El Padrino", "Casablanca", y "Titanic".');
                break;
            case '2':
                alert('Próximos estrenos incluyen "The Crow", "Venom:The Last Dance", y "Joker 2".');
                break;
            case '3':
                alert('Actores famosos incluyen Leonardo DiCaprio, Meryl Streep, y Denzel Washington.');
                break;
            case '4':
                alert('Las reseñas más recientes están disponibles en Rotten Tomatoes y Metacritic.');
                break;
            case '5':
                alert('¡Saliendo del menú!');
                break;
            default:
                alert('Opción no válida. Por favor, selecciona una opción del 1 al 5.');
                break;
        }
    } while (opcion !== '5'); // Repetir hasta que el usuario seleccione la opción 5
}

