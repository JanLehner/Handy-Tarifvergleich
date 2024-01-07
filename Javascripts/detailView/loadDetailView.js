import {
  isUserAdmin,
  checkIfUserIsLoggedIn,
} from '../functions/generalFunctions.js'

export async function loadDetailView(id) {
  const isUserLoggedIn = await checkIfUserIsLoggedIn()
  if (!isUserLoggedIn) return (window.location.hash = '#login')
  const isAdmin = await isUserAdmin()
  if (!isAdmin) return (window.location.hash = '#menu')

  const styleHolder = document.getElementById('styleHolder')
  styleHolder.innerHTML = `<link rel="stylesheet" href="./Stylesheets/detailViewStyle.css"></link>`
  await getOfferData(id)
}

async function getOfferData(offerId) {
  const main = document.querySelector('main')
  fetch(
    `https://handy-tarifvergleich-server.azurewebsites.net/offers?offerId=${offerId}`
  )
    .then((res) => res.json())
    .then((data) => {
      main.innerHTML = `<div class="flexbox mainHeader">
      <a class="flexbox btn cancelBtn">Cancel</a>
      </div>
      <p class="flexbox formTitle">Bearbeiten</p>
      <div class="flexbox infoDiv">
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Aboname:</p>
          <input class="flexbox infoInput" type="text" value="${data.name}" placeholder="string">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Provider:</p>
          <input class="flexbox infoInput" type="text" value="${data.provider}" placeholder="string">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Angebots-URL:</p>
          <input class="flexbox infoInput" type="url" value="${data.offerUrl}" placeholder="string">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Grundpreis:</p>
          <input class="flexbox infoInput" type="number" value="${data.basePrice}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Telefonkosten CH (min):</p>
          <input class="flexbox infoInput" type="number" value="${data.cost.callPerCallminuteCH}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Gigabytekosten CH:</p>
          <input class="flexbox infoInput" type="number" value="${data.cost.internetPerGBCH}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">SMS-Kosten CH:</p>
          <input class="flexbox infoInput" type="number" value="${data.cost.smsPerCountCH}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Telefonkosten EU (min):</p>
          <input class="flexbox infoInput" type="number" value="${data.cost.callPerCallminuteEurope}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Gigabytekosten EU:</p>
          <input class="flexbox infoInput" type="number" value="${data.cost.internetPerGBEurope}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">SMS-Kosten EU:</p>
          <input class="flexbox infoInput" type="number" value="${data.cost.smsPerCountEurope}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Telefonguthaben CH (min):</p>
          <input class="flexbox infoInput" type="number" value="${data.deductions.freeGBInternetCH}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Gigabyteguthaben CH:</p>
          <input class="flexbox infoInput" type="number" value="${data.deductions.freeCallminutesCH}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">SMS-Guthaben CH:</p>
          <input class="flexbox infoInput" type="number" value="${data.deductions.freeSMSCH}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Telefonguthaben EU (min):</p>
          <input class="flexbox infoInput" type="number" value="${data.deductions.freeGBInternetEurope}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Gigabyteguthaben EU:</p>
          <input class="flexbox infoInput" type="number" value="${data.deductions.freeCallminutesEurope}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">SMS-Guthaben EU:</p>
          <input class="flexbox infoInput" type="number" value="${data.deductions.freeSMSEurope}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Aktivierungsgebühr:</p>
          <input class="flexbox infoInput" type="number" value="${data.activationFee}" placeholder="decimal">
      </div>
      </div>
      <div class="flexbox saveBtnDiv">
      <p class="errorMessage">Füllen Sie alle Felder aus.</p>
      </div>
      <div class="flexbox saveBtnDiv">
      <a class="flexbox btn saveBtn">Speichern</a>
      </div>`
      document.querySelector('.cancelBtn').addEventListener('click', () => {
        main.innerHTML = ''
        window.location.hash = '#offer'
      })
    })
}
