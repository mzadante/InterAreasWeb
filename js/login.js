const btnLogin = document.getElementById('login-in');
btnLogin.addEventListener('click', () => {
});

const formulario = document.getElementById('login-in');
formulario.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Enviando formulario');
    
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    
    console.log(usuario, password);
    if (usuario === 'admin' && password === 'admin') {
        //mandar tb a la bd
        window.location.href = '/view/adminGeneral.html';
    }
});
