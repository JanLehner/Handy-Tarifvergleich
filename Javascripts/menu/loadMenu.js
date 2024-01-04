export function loadMenu() {
    styleHolder.innerHTML = `<link rel="stylesheet" href="./Stylesheets/menuStyle.css"></link>`;
    main.innerHTML = menu;
};

const styleHolder = document.getElementById("styleHolder");
const main = document.querySelector('main');
const menu = `<div class="flexbox mainHeader">
<a class="flexbox btn logoutBtn">Logout</a>
</div>
<div class="flexbox infoMenuDiv">
<p class="flexbox infoMenuTitle">Willkommen Benutzer.</p>
<p class="flexbox infoMenuDescr">Was würden Sie gerne machen?</p>
</div>
<div class="flexbox actionsDiv">
<div class="flexbox actionCardDiv">
    <div class="flexbox actionTitle">Angebote bearbeiten</div>
    <div class="flexbox actionDescr">
        <p class="flexbox actionDescrText">Bearbeiten Sie die Angebotsauswahl für die Berechnung der
            Empfehlung.</p>
    </div>
</div>
<div class="flexbox actionCardDiv">
    <div class="flexbox actionTitle">Nutzungsprofil bearbeiten</div>
    <div class="flexbox actionDescr">
        <p class="flexbox actionDescrText">Aktualisieren Sie Ihr Nutzungsprofil auf Ihre aktuellenBedürfnisse.</p>
    </div>
</div>
<div class="flexbox actionCardDiv">
    <div class="flexbox actionTitle">Abonnement bestimmen</div>
    <div class="flexbox actionDescr">
        <p class="flexbox actionDescrText">Finden Sie die drei günstigsten Abonnements für Ihr Nutzverhalten.</p>
    </div>
</div>
</div>`;