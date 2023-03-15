$("#nuevoUsuario").click(function() {
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val(); // Agregar esta línea para capturar el valor del campo con id apellido
    var identificacion = $("#identificacion").val();
    $('#usuarios tr:last').after('<tr><td>' + nombre + '</td><td>' + apellido + '</td><td>' + identificacion + '</td></tr>'); // Agregar la variable "apellido" a la cadena de texto que se inserta en la tabla
    $('#nuevoUsuarioModal').modal('toggle');
});
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})