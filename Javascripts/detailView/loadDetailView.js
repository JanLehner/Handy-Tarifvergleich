export function loadDetailView() {
    styleHolder.innerHTML = `<link rel="stylesheet" href="./Stylesheets/detailViewStyle.css"></link>`;
    main.innerHTML = detailView;
}

const styleHolder = document.getElementById("styleHolder");
const main = document.querySelector('main');

const detailView = `<div class="flexbox mainHeader">
<a class="flexbox btn logoutBtn">Logout</a>
</div>
<p class="flexbox formTitle">Bearbeiten</p>
<div class="flexbox infoDiv">
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">Aboname:</p>
    <input class="flexbox infoInput" type="text" value="" placeholder="string">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">Provider:</p>
    <input class="flexbox infoInput" type="text" value="" placeholder="string">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">Angebots-URL:</p>
    <input class="flexbox infoInput" type="url" value="" placeholder="string">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">Grundpreis:</p>
    <input class="flexbox infoInput" type="number" value="" placeholder="decimal">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">Telefonkosten CH (min):</p>
    <input class="flexbox infoInput" type="number" value="" placeholder="decimal">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">Gigabytekosten CH:</p>
    <input class="flexbox infoInput" type="number" value="" placeholder="decimal">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">SMS-Kosten CH:</p>
    <input class="flexbox infoInput" type="number" value="" placeholder="decimal">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">Telefonkosten EU (min):</p>
    <input class="flexbox infoInput" type="number" value="" placeholder="decimal">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">Gigabytekosten EU:</p>
    <input class="flexbox infoInput" type="number" value="" placeholder="decimal">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">SMS-Kosten EU:</p>
    <input class="flexbox infoInput" type="number" value="" placeholder="decimal">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">Telefonguthaben CH (min):</p>
    <input class="flexbox infoInput" type="number" value="" placeholder="decimal">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">Gigabyteguthaben CH:</p>
    <input class="flexbox infoInput" type="number" value="" placeholder="decimal">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">SMS-Guthaben CH:</p>
    <input class="flexbox infoInput" type="number" value="" placeholder="decimal">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">Telefonguthaben EU (min):</p>
    <input class="flexbox infoInput" type="number" value="" placeholder="decimal">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">Gigabyteguthaben EU:</p>
    <input class="flexbox infoInput" type="number" value="" placeholder="decimal">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">SMS-Guthaben EU:</p>
    <input class="flexbox infoInput" type="number" value="" placeholder="decimal">
</div>
<div class="flexbox infoCard">
    <p class="flexbox infoTitle">Aktivierungsgebühr:</p>
    <input class="flexbox infoInput" type="number" value="" placeholder="decimal">
</div>
</div>
<div class="flexbox saveBtnDiv">
<p class="errorMessage">Füllen Sie alle Felder aus.</p>
</div>
<div class="flexbox saveBtnDiv">
<a class="flexbox btn saveBtn">Speichern</a>
</div>`;