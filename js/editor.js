const btnVolver = document.getElementById('volver');
btnVolver.addEventListener('click', () => {
    window.location.href = '/view/adminGeneral.html';
});


// Comenzando a trabajar con el editor de texto para enviarlo a la base de datos

/*
tinymce.init({
  selector: '#editor', // Selecciona el elemento HTML donde quieres insertar el editor
  plugins: 'image', // Activa el plugin de imágenes
  toolbar: 'image', // Agrega un botón en la barra de herramientas para insertar imágenes
  images_upload_url: 'tu_servidor_de_subida_de_imagenes.php', // URL del servidor para subir imágenes
  // Opcional: Configura opciones adicionales de subida de imágenes
  images_upload_base_path: '/ruta/a/tu/carpeta/de/imagenes/',
  images_upload_credentials: true, // Si es necesario, habilita las credenciales de autenticación para subir imágenes
  images_upload_handler: function (blobInfo, success, failure) {
    var xhr, formData;

    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open('POST', 'tu_servidor_de_subida_de_imagenes.php'); // URL del servidor para subir imágenes

    xhr.onload = function () {
      var json;

      if (xhr.status != 200) {
        failure('HTTP Error: ' + xhr.status);
        return;
      }

      json = JSON.parse(xhr.responseText);

      if (!json || typeof json.location != 'string') {
        failure('Invalid JSON: ' + xhr.responseText);
        return;
      }

      success(json.location);
    };

    formData = new FormData();
    formData.append('file', blobInfo.blob(), blobInfo.filename());

    xhr.send(formData);
  },

  language: 'es',
    branding: false,
    menubar: true,
    skin: 'oxide-dark',
    width: 1000,
    
    menu: {
      file: { title: 'File', items: 'newdocument restoredraft | preview | export print | deleteallconversations' },
      edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
      view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
      insert: { title: 'Insert', items: 'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
      format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
      tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
      table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
      help: { title: 'Help', items: 'help' }
      
    },
    toolbar_location: 'top',

    custom_undo_redo_levels: 10,
    //content_css: 'dark',
    plugins: 'code',
    plugins: 'image',
    image_caption: true,
    image_uploadtab: true,
    a11y_advanced_options: false,
    statusbar: false,

    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | image',
});
/** */


tinymce.init({ 
    selector: '#editor',
    language: 'es',
    branding: false,
    menubar: true,
    skin: 'oxide-dark',
    width: 1000,
    
    menu: {
      file: { title: 'File', items: 'newdocument restoredraft | preview | export print | deleteallconversations' },
      edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
      view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
      insert: { title: 'Insert', items: 'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
      format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
      tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
      table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
      help: { title: 'Help', items: 'help' }
      
    },
    toolbar_location: 'top',

    custom_undo_redo_levels: 10,
    content_css: 'dark',
    plugins: 'code',
    plugins: 'image',
    image_caption: true,
    image_uploadtab: true,
    a11y_advanced_options: false,
    statusbar: false,
 
  });



//Mandando el contenido del editor de texto a las paginas de contenido de anuncios
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log('Enviando formulario');
    //.getContent({format: 'text'}) <-- Esto es para obtener el contenido del editor de texto en formato de 
    const datos = tinymce.activeEditor.getContent();
    //const datos = tinymce.activeEditor.getContent(); <-- Esto es para obtener el contenido del editor de texto en formato de html
    console.log(datos);  
});

document.getElementById('enviar').addEventListener('click', function () {
  var contenido = tinymce.get('editor').getContent(); // Reemplaza 'tuEditor' con el identificador de tu editor TinyMCE
  localStorage.setItem('contenidoTinyMCE', contenido);
  //window.location.href = './index.html'; // Redirige a la página de destino
  console.log(contenido + ' ' + 'Se ha enviado el contenido del editor de texto');
});
