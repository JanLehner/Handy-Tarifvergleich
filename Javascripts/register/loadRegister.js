const API_URL = 'https://handy-tarifvergleich-server.azurewebsites.net'

export function loadRegister() {
    styleHolder.innerHTML = '<link rel="stylesheet" href="./Stylesheets/loginStyle.css"></link>'
    main.innerHTML = register
    errorMessage = document.querySelector('.errorMessage')
    document.querySelector('#btnLogin').addEventListener('click', registerUser)
    document.querySelector('#inputUsername').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') document.querySelector('#inputPassword').focus()
    })
    document.querySelector('#inputPassword').addEventListener('keydown', (e) => {
        if (e.key === 'Enter')
            document.querySelector('#inputPasswordReenter').focus()
    })
    document
        .querySelector('#inputPasswordReenter')
        .addEventListener('keydown', (e) => {
            if (e.key === 'Enter') registerUser()
        })
}

let errorMessage
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
<p class="errorMessage">Passwörter stimmen nicht überein</p>
<div class="flexbox loginBtnDiv">
    <a class="flexbox btn" id="btnLogin">Registrieren</a>
</div>
</div>`

async function registerUser() {
    const username = document.getElementById('inputUsername').value
    const password = document.getElementById('inputPassword').value
    const passwordReenter = document.getElementById('inputPasswordReenter').value
    if (password != passwordReenter) {
        errorMessage.innerHTML = 'Passwörter stimmen nicht überein'
        errorMessage.style.display = 'block'
        return
    } else {
        errorMessage.style.display = 'none'
    }
    const registerURL = API_URL + '/register'
    try {
        const response = await fetch(`${registerURL}`, {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })

        const data = await response.text()

        if (response.status === 200) {
            sessionStorage.setItem('token', data)
            window.location.hash = '#menu'
        } else if (response.status === 400) {
            errorMessage.innerHTML = 'Benutzername bereits vergeben'
            errorMessage.style.display = 'block'
        } else {
            console.log('Registration error:', data)
        }
    } catch (error) {
        console.error('Registration error:', error.message)
    }
}
