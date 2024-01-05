export function loadLogin() {
    styleHolder.innerHTML = `<link rel="stylesheet" href="./Stylesheets/loginStyle.css"></link>`;
    main.innerHTML = login;
};

const styleHolder = document.getElementById("styleHolder");
const main = document.querySelector('main');

const login = `<div class="flexbox mainHeader">
<a id="switchToRegister" href="#register">Neu hier? Registrieren Sie sich.</a>
</div>
<p class="siteInfo">Login</p>
<div class="flexbox inputDivLogin">
<input id="inputUsername" class="inputLogin" type="text" placeholder="Benuztername">
<input id="inputPassword" class="inputLogin" type="password" placeholder="Passwort">
<p class="errorMessage">Benutzername oder Passwort falsch.</p>
<div class="flexbox loginBtnDiv">
    <a class="flexbox btn" id="btnLogin">Login</a>
</div>
</div>`;