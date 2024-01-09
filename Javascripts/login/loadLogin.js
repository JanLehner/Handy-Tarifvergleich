import { checkIfUserIsLoggedIn } from '../functions/generalFunctions.js'

const API_URL = 'https://handy-tarifvergleich-server.azurewebsites.net'

export async function loadLogin() {
    const isUserLoggedIn = await checkIfUserIsLoggedIn()
    if (isUserLoggedIn) {
        window.location.hash = '#menu'
    } else {
        styleHolder.innerHTML =
            '<link rel="stylesheet" href="./Stylesheets/loginStyle.css"></link>'
        main.innerHTML = login
        document.querySelector('#btnLogin').addEventListener('click', loginUser)
        document
            .querySelector('#inputUsername')
            .addEventListener('keydown', (e) => {
                if (e.key === 'Enter')
                    document.querySelector('#inputPassword').focus()
            })
        document
            .querySelector('#inputPassword')
            .addEventListener('keydown', (e) => {
                if (e.key === 'Enter') loginUser()
            })
    }
}

const styleHolder = document.getElementById('styleHolder')
const main = document.querySelector('main')

const login = `<div class="flexbox mainHeader">
<a id="switchToRegister" href="#register">Neu hier? Registrieren Sie sich.</a>
</div>
<p class="siteInfo">Login</p>
<div class="flexbox inputDivLogin">
<input id="inputUsername" class="inputLogin" type="text" placeholder="Benuztername">
<input id="inputPassword" class="inputLogin" type="password" placeholder="Passwort">
<p class="errorMessage">Benutzername oder Passwort falsch</p>
<div class="flexbox loginBtnDiv">
    <a class="flexbox btn" id="btnLogin">Login</a>
</div>
</div>`

async function loginUser() {
    const username = document.getElementById('inputUsername').value
    const password = document.getElementById('inputPassword').value
    const loginURL = API_URL + '/login'
    try {
        const response = await fetch(`${loginURL}`, {
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
            document.querySelector('.errorMessage').style.display = 'none'
            sessionStorage.setItem('token', data)
            window.location.hash = '#menu'
        } else {
            document.querySelector('.errorMessage').style.display = 'block'
        }
    } catch (err) {
        console.error(err)
    }
}
