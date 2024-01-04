export function loadResult() {
    styleHolder.innerHTML = `<link rel="stylesheet" href="./Stylesheets/resultStyle.css"></link>`;
    main.innerHTML = result;
};

const styleHolder = document.getElementById("styleHolder");
const main = document.querySelector('main');
const result = ` <div class="flexbox mainHeader">
<a class="flexbox btn" id="homeBtn">Home</a>
<a class="flexbox btn" id="logoutBtn">Logout</a>
</div>
<p class="title">Unsere Top-3-Angebote für Sie!</p>
<div class="flexbox offerContainer">
<a class="flexbox offerCard">
    <p class="flexbox offerCardTitle">Young Swiss Blue XL</p>
    <div class="flexbox offerCardInfoBlock">
        <p class="offerInfoText">Anbieter: </p>
        <p class="offerInfoText">Basispreis: </p>
        <p class="offerInfoText">Aktivierungsgebühr: </p>
        <p class="offerInfoText">Geschätze Nutzkosten: </p>
        <p class="offerInfoText offerTotal">Total: </p>
    </div>
</a>
<a class="flexbox offerCard">
    <p class="flexbox offerCardTitle">Young Swiss Blue XL</p>
    <div class="flexbox offerCardInfoBlock">
        <p class="offerInfoText">Anbieter: </p>
        <p class="offerInfoText">Basispreis: </p>
        <p class="offerInfoText">Aktivierungsgebühr: </p>
        <p class="offerInfoText">Geschätze Nutzkosten: </p>
        <p class="offerInfoText offerTotal">Total: </p>
    </div>
</a>
<a class="flexbox offerCard">
    <p class="flexbox offerCardTitle">Young Swiss Blue XL</p>
    <div class="flexbox offerCardInfoBlock">
        <p class="offerInfoText">Anbieter: </p>
        <p class="offerInfoText">Basispreis: </p>
        <p class="offerInfoText">Aktivierungsgebühr: </p>
        <p class="offerInfoText">Geschätze Nutzkosten: </p>
        <p class="offerInfoText offerTotal">Total: </p>
    </div>
</a>
</div>`;