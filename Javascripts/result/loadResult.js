export function loadResult() {
  styleHolder.innerHTML = `<link rel="stylesheet" href="./Stylesheets/resultStyle.css"></link>`
  main.innerHTML = result
  document.querySelector('#logoutBtn').addEventListener('click', () => {
    main.innerHTML = ''
    window.location.hash = '#login'
  })
  document.querySelector('#homeBtn').addEventListener('click', () => {
    main.innerHTML = ''
    window.location.hash = '#menu'
  })
  getOffers()
  getUserForm()
}

const styleHolder = document.getElementById('styleHolder')
const main = document.querySelector('main')
const result = ` <div class="flexbox mainHeader">
<a class="flexbox btn" id="homeBtn">Home</a>
<a class="flexbox btn" id="logoutBtn">Logout</a>
</div>
<p class="title">Unsere Top-3-Angebote für Sie!</p>
<div class="flexbox offerContainer">
<a class="flexbox offerCard">
    <p class="flexbox offerCardTitle"></p>
    <div class="flexbox offerCardInfoBlock">
        <p class="offerInfoText">Anbieter: </p>
        <p class="offerInfoText">Basispreis: </p>
        <p class="offerInfoText">Aktivierungsgebühr: </p>
        <p class="offerInfoText">Geschätze Nutzkosten: </p>
        <p class="offerInfoText offerTotal">Total: </p>
    </div>
</a>
<a class="flexbox offerCard">
    <p class="flexbox offerCardTitle"></p>
    <div class="flexbox offerCardInfoBlock">
        <p class="offerInfoText">Anbieter: </p>
        <p class="offerInfoText">Basispreis: </p>
        <p class="offerInfoText">Aktivierungsgebühr: </p>
        <p class="offerInfoText">Geschätze Nutzkosten: </p>
        <p class="offerInfoText offerTotal">Total: </p>
    </div>
</a>
<a class="flexbox offerCard">
    <p class="flexbox offerCardTitle"></p>
    <div class="flexbox offerCardInfoBlock">
        <p class="offerInfoText">Anbieter: </p>
        <p class="offerInfoText">Basispreis: </p>
        <p class="offerInfoText">Aktivierungsgebühr: </p>
        <p class="offerInfoText">Geschätze Nutzkosten: </p>
        <p class="offerInfoText offerTotal">Total: </p>
    </div>
</a>
</div>`

function getOffers() {
  fetch('https://handy-tarifvergleich-server.azurewebsites.net/offers/all')
    .then((res) => res.json())
    .then((data) => {
      const offers = data
      console.log(offers)
    })
}

function getUserForm() {
  fetch('https://handy-tarifvergleich-server.azurewebsites.net/users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const userForm = data.Form
      console.log(userForm)
    })
}
