export function loadRegister() {
  styleHolder.innerHTML = `<link rel="stylesheet" href="./Stylesheets/loginStyle.css"></link>`
  main.innerHTML = register
}

const styleHolder = document.getElementById('styleHolder')
const main = document.querySelector('main')
const register = `<div class="flexbox mainHeader">
<a id="switchToRegister" href="#login">Bereits registriert? Loggen Sie sich ein.</a>
</div>
<p class="siteInfo">Registrierung</p>
<div class="flexbox inputDivLogin">
<input id="inputUsername" class="inputLogin" type="text" placeholder="Benuztername">
<input id="inputPassword" class="inputLogin" type="password" placeholder="Passwort">
<input id="inputPasswordReenter" class="inputLogin" type="password" placeholder="Passwort-Bestätigung">
<p class="errorMessage">Benutzername oder Passwort falsch.</p>
<div class="flexbox loginBtnDiv">
    <a class="flexbox btn" id="btnLogin">Registrieren</a>
</div>
</div>`
