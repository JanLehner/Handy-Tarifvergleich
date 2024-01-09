import { checkIfUserIsLoggedIn } from '../functions/generalFunctions.js'

export async function loadForm() {
    const isUserLoggedIn = await checkIfUserIsLoggedIn()
    if (!isUserLoggedIn) return (window.location.hash = '#login')

    styleHolder.innerHTML =
        '<link rel="stylesheet" href="./Stylesheets/formStyle.css"></link>'
    main.innerHTML = form
    document.querySelector('.saveBtn').addEventListener('click', saveUserForm())
    document.querySelector('.cancelBtn').addEventListener('click', () => {
        main.innerHTML = ''
        window.location.hash = '#menu'
    })
    getUserFormData()
}

function getUserFormData() {
    fetch('https://handy-tarifvergleich-server.azurewebsites.net/users/me', {
        method: 'GET',
        headers: {
            Accept: '*/*',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            document.querySelector('input[name="q1"][value="Ja"]').checked =
                data.Form.StrongWorldWideUsage
            document.querySelector('input[name="q1"][value="Nein"]').checked =
                !data.Form.StrongWorldWideUsage
            document.querySelector('input[name="q2"][value="0"]').checked =
                data.Form.CallminutesPerMonthCH == 0
            document.querySelector('input[name="q2"][value="2"]').checked =
                data.Form.CallminutesPerMonthCH == 2
            document.querySelector('input[name="q2"][value="5"]').checked =
                data.Form.CallminutesPerMonthCH == 5
            document.querySelector('input[name="q2"][value="10"]').checked =
                data.Form.CallminutesPerMonthCH == 10
            document.querySelector('input[name="q2"][value="30"]').checked =
                data.Form.CallminutesPerMonthCH == 30
            document.querySelector('input[name="q2"][value="60"]').checked =
                data.Form.CallminutesPerMonthCH == 60
            document.querySelector('input[name="q2"][value="120"]').checked =
                data.Form.CallminutesPerMonthCH == 120
            document.querySelector('input[name="q2"][value="180"]').checked =
                data.Form.CallminutesPerMonthCH == 180
            document.querySelector('input[name="q3"][value="0"]').checked =
                data.Form.CallminutesPerMonthEurope == 0
            document.querySelector('input[name="q3"][value="2"]').checked =
                data.Form.CallminutesPerMonthEurope == 2
            document.querySelector('input[name="q3"][value="5"]').checked =
                data.Form.CallminutesPerMonthEurope == 5
            document.querySelector('input[name="q3"][value="10"]').checked =
                data.Form.CallminutesPerMonthEurope == 10
            document.querySelector('input[name="q3"][value="30"]').checked =
                data.Form.CallminutesPerMonthEurope == 30
            document.querySelector('input[name="q3"][value="60"]').checked =
                data.Form.CallminutesPerMonthEurope == 60
            document.querySelector('input[name="q3"][value="120"]').checked =
                data.Form.CallminutesPerMonthEurope == 120
            document.querySelector('input[name="q3"][value="180"]').checked =
                data.Form.CallminutesPerMonthEurope == 180
            document.querySelector('input[name="q4"][value="0"]').checked =
                data.Form.GBPerMonthCH == 0
            document.querySelector('input[name="q4"][value="1"]').checked =
                data.Form.GBPerMonthCH == 1
            document.querySelector('input[name="q4"][value="5"]').checked =
                data.Form.GBPerMonthCH == 5
            document.querySelector('input[name="q4"][value="10"]').checked =
                data.Form.GBPerMonthCH == 10
            document.querySelector('input[name="q4"][value="20"]').checked =
                data.Form.GBPerMonthCH == 20
            document.querySelector('input[name="q4"][value="50"]').checked =
                data.Form.GBPerMonthCH == 50
            document.querySelector('input[name="q4"][value="100"]').checked =
                data.Form.GBPerMonthCH == 100
            document.querySelector('input[name="q5"][value="0"]').checked =
                data.Form.GBPerMonthEurope == 0
            document.querySelector('input[name="q5"][value="1"]').checked =
                data.Form.GBPerMonthEurope == 1
            document.querySelector('input[name="q5"][value="5"]').checked =
                data.Form.GBPerMonthEurope == 5
            document.querySelector('input[name="q5"][value="10"]').checked =
                data.Form.GBPerMonthEurope == 10
            document.querySelector('input[name="q5"][value="20"]').checked =
                data.Form.GBPerMonthEurope == 20
            document.querySelector('input[name="q5"][value="50"]').checked =
                data.Form.GBPerMonthEurope == 50
            document.querySelector('input[name="q5"][value="100"]').checked =
                data.Form.GBPerMonthEurope == 100
            document.querySelector('input[name="q6"][value="0"]').checked =
                data.Form.SMSPerMonthCH == 0
            document.querySelector('input[name="q6"][value="2"]').checked =
                data.Form.SMSPerMonthCH == 2
            document.querySelector('input[name="q6"][value="5"]').checked =
                data.Form.SMSPerMonthCH == 5
            document.querySelector('input[name="q6"][value="10"]').checked =
                data.Form.SMSPerMonthCH == 10
            document.querySelector('input[name="q6"][value="20"]').checked =
                data.Form.SMSPerMonthCH == 20
            document.querySelector('input[name="q6"][value="50"]').checked =
                data.Form.SMSPerMonthCH == 50
            document.querySelector('input[name="q6"][value="100"]').checked =
                data.Form.SMSPerMonthCH == 100
            document.querySelector('input[name="q7"][value="0"]').checked =
                data.Form.SMSPerMonthEurope == 0
            document.querySelector('input[name="q7"][value="2"]').checked =
                data.Form.SMSPerMonthEurope == 2
            document.querySelector('input[name="q7"][value="5"]').checked =
                data.Form.SMSPerMonthEurope == 5
            document.querySelector('input[name="q7"][value="10"]').checked =
                data.Form.SMSPerMonthEurope == 10
            document.querySelector('input[name="q7"][value="20"]').checked =
                data.Form.SMSPerMonthEurope == 20
            document.querySelector('input[name="q7"][value="50"]').checked =
                data.Form.SMSPerMonthEurope == 50
            document.querySelector('input[name="q7"][value="100"]').checked =
                data.Form.SMSPerMonthEurope == 100
        })
        .catch((error) => {
            console.error('Error fetching data:', error)
        })
}

const styleHolder = document.getElementById('styleHolder')
const main = document.querySelector('main')

const form = `<div class="flexbox mainHeader">
<a class="flexbox btn cancelBtn">Home</a>
</div>
<p class="flexbox formTitle">Form</p>
<div class="flexbox formQuestionDiv">
<div class="flexbox formQuestionBlock">
    <p class="formQuestion">Tätigen Sie häufig Telefonate in Länder ausserhalb von Europa?</p>
    <div class="flexbox formAnswerContainer">
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q1" value="Ja">Ja
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q1" value="Nein">Nein
        </label>
    </div>
</div>
<div class="flexbox formQuestionBlock">
    <p class="formQuestion">Wie viele Minuten telefonieren Sie durchschnittlich im Inland pro Monat?</p>
    <div class="flexbox formAnswerContainer">
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q2" value="0">0
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q2" value="2">2
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q2" value="5">5
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q2" value="10">10
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q2" value="30">30
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q2" value="60">60
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q2" value="120">120
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q2" value="180">180
        </label>
    </div>
</div>
<div class="flexbox formQuestionBlock">
    <p class="formQuestion">Wie viele Minuten telefonieren Sie durchschnittlich (in die / in der)
        EU pro Monat?</p>
    <div class="flexbox formAnswerContainer">
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q3" value="0">0
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q3" value="2">2
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q3" value="5">5
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q3" value="10">10
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q3" value="30">30
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q3" value="60">60
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q3" value="120">120
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q3" value="180">180
        </label>
    </div>
</div>
<div class="flexbox formQuestionBlock">
    <p class="formQuestion">Wie viele Gigabytes Mobile Daten brauchen Sie pro Monat in der Schweiz?</p>
    <div class="flexbox formAnswerContainer">
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q4" value="0">0
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q4" value="1">1
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q4" value="5">5
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q4" value="10">10
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q4" value="20">20
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q4" value="50">50
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q4" value="100">100
        </label>
    </div>
</div>
<div class="flexbox formQuestionBlock">
    <p class="formQuestion">Wie viele Gigabytes Mobile Daten brauchen Sie pro Monat in der EU?</p>
    <div class="flexbox formAnswerContainer">
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q5" value="0">0
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q5" value="1">1
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q5" value="5">5
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q5" value="10">10
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q5" value="20">20
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q5" value="50">50
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q5" value="100">100
        </label>
    </div>
</div>
<div class="flexbox formQuestionBlock">
    <p class="formQuestion">Wie viele SMS versenden Sie durchschnittlich im Inland pro Monat?</p>
    <div class="flexbox formAnswerContainer">
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q6" value="0">0
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q6" value="2">2
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q6" value="5">5
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q6" value="10">10
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q6" value="20">20
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q6" value="50">50
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q6" value="100">100
        </label>
    </div>
</div>
<div class="flexbox formQuestionBlock">
    <p class="formQuestion">Wie viele SMS versenden Sie durchschnittlich (in die / in der) EU pro Monat?</p>
    <div class="flexbox formAnswerContainer">
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q7" value="0">0
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q7" value="2">2
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q7" value="5">5
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q7" value="10">10
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q7" value="20">20
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q7" value="50">50
        </label>
        <label class="flexbox questionLabel">
            <input class="checkboxForm" type="radio" name="q7" value="100">100
        </label>
    </div>
</div>
</div>
<div class="flexbox saveBtnDiv">
<a class="flexbox btn saveBtn">Speichern</a>
</div>`

function saveUserForm() {
    const saveBtn = document.querySelector('.saveBtn')

    saveBtn.addEventListener('click', () => {
        let strongWorldWideUsage
        if (document.querySelector('input[name="q1"]:checked').value == 'Ja')
            strongWorldWideUsage = true
        else strongWorldWideUsage = false
        const form = {
            StrongWorldWideUsage: strongWorldWideUsage,
            CallminutesPerMonthCH: document.querySelector(
                'input[name="q2"]:checked',
            ).value,
            CallminutesPerMonthEurope: document.querySelector(
                'input[name="q3"]:checked',
            ).value,
            GBPerMonthCH: document.querySelector('input[name="q4"]:checked')
                .value,
            GBPerMonthEurope: document.querySelector('input[name="q5"]:checked')
                .value,
            SMSPerMonthCH: document.querySelector('input[name="q6"]:checked')
                .value,
            SMSPerMonthEurope: document.querySelector(
                'input[name="q7"]:checked',
            ).value,
        }

        fetch(
            'https://handy-tarifvergleich-server.azurewebsites.net/users/form/update',
            {
                method: 'PUT',
                headers: {
                    Accept: '*/*',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                },
                body: JSON.stringify(form),
            },
        )
            .then(() => {
                main.innerHTML = ''
                window.location.hash = '#menu'
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    })
}
