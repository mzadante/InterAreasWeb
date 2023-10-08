document.addEventListener('DOMContentLoaded', function () {
    var contenido = localStorage.getItem('contenidoTinyMCE');
    if (contenido) {
        document.getElementById('contenidoAqui').innerHTML = 
        contenido + `
        <div class="container py-2 mb-1">
            <div class="border border-warning rounded border-4" >
                <div class="col-12 d-flex justify-content-between align-items-center " id="pie-pagina">
                    <div class="logo">
                    <img src="../assets/branding-02.png" width="100px" alt="usuario" class="img-fluid">
                    </div>
                    <div class="megusta me-4">
                        <small1>Me gusta 👍</small>
                    </div>   
            </div>         
        </div>
        
        `
        
        ;
    }
});