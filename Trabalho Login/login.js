function validar() {

    let login = documento.getElementById('login').value;
    let senha = documento.getElementById('senha').value;

    let loginValido = /^[13579]{5}$/.test(login);
    let senhaValida = /^[02468]{4}$/.test(senha);

    if (loginValido && senhaValida){
        alert('login e senha validos!');
    } else {
    alert('Login ou senha invalidos!\n\nLembre-se:\n- O login de conter 5 digitos impares.\n - A senha deve conter 4 digitos pares.');
    }
}


