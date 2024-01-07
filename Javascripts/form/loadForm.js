export function loadForm() {
  styleHolder.innerHTML = `<link rel="stylesheet" href="./Stylesheets/formStyle.css"></link>`
  main.innerHTML = form
  document.querySelector('.cancelBtn').addEventListener('click', () => {
    window.location.hash = '#menu'
  })
}

const styleHolder = document.getElementById('styleHolder')
const main = document.querySelector('main')

const form = `<div class="flexbox mainHeader">
<a class="flexbox btn cancelBtn">Cancel</a>
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
<p class="errorMessage">Füllen Sie alle Felder aus.</p>
</div>
<div class="flexbox saveBtnDiv">
<a class="flexbox btn saveBtn">Speichern</a>
</div>`
