const btnLogin = document.getElementById('login-in');
btnLogin.addEventListener('click', () => {
});

const formulario = document.getElementById('login-in');
formulario.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Enviando formulario');
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log(email, password);
    if (email === 'admin@admin.com' && password === 'admin') {
        window.location.href = '/view/adminGeneral.html';
    }
});
