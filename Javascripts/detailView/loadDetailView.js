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
          <input class="flexbox infoInput" id="name" type="text" value="${data.name}" placeholder="string">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Provider:</p>
          <input class="flexbox infoInput" id="provider" type="text" value="${data.provider}" placeholder="string">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Angebots-URL:</p>
          <input class="flexbox infoInput" id="offerUrl" type="url" value="${data.offerUrl}" placeholder="string">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Grundpreis:</p>
          <input class="flexbox infoInput" id="basePrice" type="number" value="${data.basePrice}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Welt:</p>
          <input class="flexbox infoInput" id="worldOffer" type="checkbox" value="${data.worldOffer}">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Telefonkosten CH (min):</p>
          <input class="flexbox infoInput" id="callPerCallminuteCH" type="number" value="${data.cost.callPerCallminuteCH}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Gigabytekosten CH:</p>
          <input class="flexbox infoInput" id="internetPerGBCH" type="number" value="${data.cost.internetPerGBCH}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">SMS-Kosten CH:</p>
          <input class="flexbox infoInput" id="smsPerCountCH" type="number" value="${data.cost.smsPerCountCH}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Telefonkosten EU (min):</p>
          <input class="flexbox infoInput" id="callPerCallminuteEurope" type="number" value="${data.cost.callPerCallminuteEurope}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Gigabytekosten EU:</p>
          <input class="flexbox infoInput" id="internetPerGBEurope" type="number" value="${data.cost.internetPerGBEurope}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">SMS-Kosten EU:</p>
          <input class="flexbox infoInput" id="smsPerCountEurope" type="number" value="${data.cost.smsPerCountEurope}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Telefonguthaben CH (min):</p>
          <input class="flexbox infoInput" id="freeGBInternetCH" type="number" value="${data.deductions.freeGBInternetCH}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Gigabyteguthaben CH:</p>
          <input class="flexbox infoInput" id="freeCallminutesCH" type="number" value="${data.deductions.freeCallminutesCH}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">SMS-Guthaben CH:</p>
          <input class="flexbox infoInput" id="freeSMSCH" type="number" value="${data.deductions.freeSMSCH}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Telefonguthaben EU (min):</p>
          <input class="flexbox infoInput" id="freeGBInternetEurope" type="number" value="${data.deductions.freeGBInternetEurope}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Gigabyteguthaben EU:</p>
          <input class="flexbox infoInput" id="freeCallminutesEurope" type="number" value="${data.deductions.freeCallminutesEurope}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">SMS-Guthaben EU:</p>
          <input class="flexbox infoInput" id="freeSMSEurope" type="number" value="${data.deductions.freeSMSEurope}" placeholder="decimal">
      </div>
      <div class="flexbox infoCard">
          <p class="flexbox infoTitle">Aktivierungsgebühr:</p>
          <input class="flexbox infoInput" id="activationFee" type="number" value="${data.activationFee}" placeholder="decimal">
      </div>
      </div>
      <div class="flexbox saveBtnDiv">
      <p class="errorMessage" hidden>Füllen Sie alle Felder aus.</p>
      </div>
      <div class="flexbox saveBtnDiv">
      <a class="flexbox btn saveBtn">Speichern</a>
      </div>`
      document.querySelector('.cancelBtn').addEventListener('click', () => {
        main.innerHTML = ''
        window.location.hash = '#offer'
      })
      document.querySelector('.saveBtn').addEventListener('click', () => {
        saveOfferData(offerId)
      })
      document.querySelector('#worldOffer').checked = data.worldOffer
    })
}

async function saveOfferData(offerId) {
  const main = document.querySelector('main')
  const name = document.getElementById('name').value
  const provider = document.getElementById('provider').value
  const offerUrl = document.getElementById('offerUrl').value
  const basePrice = document.getElementById('basePrice').value
  const worldOffer = document.getElementById('worldOffer').value
  const callPerCallminuteCH = document.getElementById(
    'callPerCallminuteCH'
  ).value
  const internetPerGBCH = document.getElementById('internetPerGBCH').value
  const smsPerCountCH = document.getElementById('smsPerCountCH').value
  const callPerCallminuteEurope = document.getElementById(
    'callPerCallminuteEurope'
  ).value
  const internetPerGBEurope = document.getElementById(
    'internetPerGBEurope'
  ).value
  const smsPerCountEurope = document.getElementById('smsPerCountEurope').value
  const freeGBInternetCH = document.getElementById('freeGBInternetCH').value
  const freeCallminutesCH = document.getElementById('freeCallminutesCH').value
  const freeSMSCH = document.getElementById('freeSMSCH').value
  const freeGBInternetEurope = document.getElementById(
    'freeGBInternetEurope'
  ).value
  const freeCallminutesEurope = document.getElementById(
    'freeCallminutesEurope'
  ).value
  const freeSMSEurope = document.getElementById('freeSMSEurope').value
  const activationFee = document.getElementById('activationFee').value

  const offer = {
    offerId: offerId,
    name: name,
    provider: provider,
    offerUrl: offerUrl,
    basePrice: basePrice,
    worldOffer: worldOffer,
    cost: {
      callPerCallminuteCH: callPerCallminuteCH,
      internetPerGBCH: internetPerGBCH,
      smsPerCountCH: smsPerCountCH,
      callPerCallminuteEurope: callPerCallminuteEurope,
      internetPerGBEurope: internetPerGBEurope,
      smsPerCountEurope: smsPerCountEurope,
    },
    deductions: {
      freeGBInternetCH: freeGBInternetCH,
      freeCallminutesCH: freeCallminutesCH,
      freeSMSCH: freeSMSCH,
      freeGBInternetEurope: freeGBInternetEurope,
      freeCallminutesEurope: freeCallminutesEurope,
      freeSMSEurope: freeSMSEurope,
    },
    activationFee: activationFee,
  }
  const saveOfferURL = `https://handy-tarifvergleich-server.azurewebsites.net/offers/update?offerId=${offerId}`
  try {
    const response = await fetch(`${saveOfferURL}`, {
      method: 'PUT',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
      body: JSON.stringify(offer),
    })
    if (!response.ok) {
      throw new Error('Could not save offer (HTTP error)')
    }
    const data = await response.text()
    if (response.status === 200) {
      main.innerHTML = ''
      window.location.hash = '#offer'
    } else {
      console.log('Save offer error:', data)
    }
  } catch (err) {
    console.error(err)
  }
}
