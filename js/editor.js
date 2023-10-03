const btnVolver = document.getElementById('volver');
btnVolver.addEventListener('click', () => {
    window.location.href = '/view/adminGeneral.html';
});

tinymce.init({
    selector: '#editor',
    language: 'es',
    branding: false,
    menubar: true,
    skin: 'oxide-dark',
    width: 1000,
    /*menu: {
      file: { title: 'File', items: 'newdocument restoredraft | preview | export print | deleteallconversations' },
      edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
      view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
      insert: { title: 'Insert', items: 'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
      format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
      tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
      table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
      help: { title: 'Help', items: 'help' }
    },*/
    toolbar_location: 'top',
  //content_css: 'dark'
  toolbar: 
  'undo redo | fontfamily | styles forecolor | bold italic underline | alignleft aligncenter alignright alignjustify | image | print | code',
  plugins: 'code',
  plugins: 'image',
  //images_file_types: 'jpg,svg,webp'
  //plugins: 'save',
  //plugins: 'preview',
  //a11y_advanced_options: true,
  statusbar: false,

  
  //plugins: 'quickbars'
});

// Comenzando a trabajar con el editor de texto para enviarlo a la base de datos

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log('Enviando formulario');
    
    const datos = tinymce.activeEditor.getContent();
    console.log(datos);  
});

document.getElementById('enviar').addEventListener('click', function () {
  var contenido = tinymce.get('editor').getContent(); // Reemplaza 'tuEditor' con el identificador de tu editor TinyMCE
  localStorage.setItem('contenidoTinyMCE', contenido);
  window.location.href = './index.html'; // Redirige a la página de destino
});