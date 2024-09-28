function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "5d7poiumnq1!&!"){
        location.href = "telainicial.html"; 
        sessionStorage.setItem('user', JSON.stringify({login: 'admin'}))
    }else{
        alert('Usuário ou Senha incorretos')
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const acesso = sessionStorage.getItem ('primeiro-acesso')
    if (!user && !acesso) {
      sessionStorage.setItem('primeiro-acesso', true)
      window.location.href = "index.html";
    }

  });
window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};