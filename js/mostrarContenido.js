document.addEventListener('DOMContentLoaded', function () {
    var contenido = localStorage.getItem('contenidoTinyMCE');
    if (contenido) {
        document.getElementById('contenidoAqui').innerHTML = contenido;
    }
});