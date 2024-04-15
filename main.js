document.addEventListener("DOMContentLoaded", function () {
    const colorOrder = ["c1", "c2", "c3", "c4", "c5", "c6"];

    function typeName(name, i, interval, callback) {
        const nameContainer = document.getElementById(name);
        let index = 0;
        const intervalId = setInterval(() => {
            nameContainer.textContent += names[i][index];
            index++;

            if (index === names[i].length) {
                clearInterval(intervalId);
                callback();
            }
        }, interval);
    }

    const names = ['{', '"Hello"', ': ', '🌎', '}', ';'];

    // Escribir el primer conjunto de spans con un intervalo de 100ms
    function writeNamesSequentially(index) {
        if (index < names.length) {
            const spanId = colorOrder[index] + "-1"; // Agregar sufijo para el primer conjunto de spans
            typeName(spanId, index, 100, function () {
                writeNamesSequentially(index + 1);
            });
        }
    }

    writeNamesSequentially(0);

    // Escribir el segundo conjunto de spans con un intervalo de 400ms
    function writeNamesSequentially2(index) {
        if (index < names.length) {
            const spanId = colorOrder[index] + "-2"; // Agregar sufijo para el segundo conjunto de spans
            typeName(spanId, index, 180, function () {
                writeNamesSequentially2(index + 1);
            });
        }
    }

    writeNamesSequentially2(0);
});


$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $(this).toggleClass('open');
        $('.lateral-menu').toggleClass('menu-open');
        $('.modal-background').fadeToggle(300); // Alternar la visualización del fondo modal con efecto de desvanecimiento
    });

    // Agregar evento de clic en el documento
    $(document).click(function(event) {
        // Comprobar si el clic ocurrió fuera de la barra de navegación lateral y del botón de menú
        if (!$(event.target).closest('.lateral-menu').length && !$(event.target).closest('.menu-toggle').length) {
            // Si el clic ocurrió fuera de la barra de navegación lateral y del botón de menú, cerrar la barra lateral
            $('.lateral-menu').removeClass('menu-open');
            $('.modal-background').fadeOut(300); // Ocultar el fondo modal con efecto de desvanecimiento
            $('.menu-toggle').removeClass('open');
        }
    });
});
