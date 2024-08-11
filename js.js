function mostrarMenu() {
    let opcion;

    do {
        // Mostrar el menú
        opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Opción 1\n" +
            "2. Opción 2\n" +
            "3. Opción 3\n" +
            "4. Opción 4\n" +
            "5. Salir"
        );

        // Procesar la opción seleccionada
        switch (opcion) {
            case '1':
                alert('Has seleccionado la Opción 1.');
                break;
            case '2':
                alert('Has seleccionado la Opción 2.');
                break;
            case '3':
                alert('Has seleccionado la Opción 3.');
                break;
            case '4':
                alert('Has seleccionado la Opción 4.');
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
