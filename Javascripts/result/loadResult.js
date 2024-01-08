import { checkIfUserIsLoggedIn, logout } from '../functions/generalFunctions.js'

export async function loadResult() {
  const isUserLoggedIn = await checkIfUserIsLoggedIn()
  if (!isUserLoggedIn) return (window.location.hash = '#login')
  styleHolder.innerHTML = `<link rel="stylesheet" href="./Stylesheets/resultStyle.css"></link>`
  main.innerHTML = result
  document.querySelector('#logoutBtn').addEventListener('click', () => {
    logout()
  })
  document.querySelector('#homeBtn').addEventListener('click', () => {
    main.innerHTML = ''
    window.location.hash = '#menu'
  })
  const form = await getUserForm()
  const offers = await getOffers()
  determineResult(form, offers)
}

const styleHolder = document.getElementById('styleHolder')
const main = document.querySelector('main')
const result = ` <div class="flexbox mainHeader">
<a class="flexbox btn" id="homeBtn">Home</a>
<a class="flexbox btn" id="logoutBtn">Logout</a>
</div>
<p class="title">Unsere Top-3-Angebote für Sie!</p>
<div class="flexbox offerContainer">
<a class="flexbox offerCard" id="offerCard1Url" target = "_blank">
    <p id="offerCard1Title" class="flexbox offerCardTitle"></p>
    <div class="flexbox offerCardInfoBlock">
        <p id="offerCard1Provider" class="offerInfoText">Anbieter: </p>
        <p id="offerCard1BasePrice" class="offerInfoText">Basispreis: </p>
        <p id="offerCard1UsageCost" class="offerInfoText">Geschätze Nutzkosten: </p>
        <p id="offerCard1Total" class="offerInfoText offerTotal">Total pro Monat: </p>
        <p id="offerCard1ActiFee" class="offerInfoText">Aktivierungsgebühr: </p>
    </div>
</a>
<a class="flexbox offerCard" id="offerCard2Url" target = "_blank">
    <p id="offerCard2Title" class="flexbox offerCardTitle"></p>
    <div class="flexbox offerCardInfoBlock">
        <p id="offerCard2Provider" class="offerInfoText">Anbieter: </p>
        <p id="offerCard2BasePrice" class="offerInfoText">Basispreis: </p>
        <p id="offerCard2UsageCost" class="offerInfoText">Geschätze Nutzkosten: </p>
        <p id="offerCard2Total" class="offerInfoText offerTotal">Total pro Monat: </p>
        <p id="offerCard2ActiFee" class="offerInfoText">Aktivierungsgebühr: </p>
    </div>
</a>
<a class="flexbox offerCard" id="offerCard3Url" target = "_blank">
    <p id="offerCard3Title" class="flexbox offerCardTitle"></p>
    <div class="flexbox offerCardInfoBlock">
        <p id="offerCard3Provider" class="offerInfoText">Anbieter: </p>
        <p id="offerCard3BasePrice" class="offerInfoText">Basispreis: </p>
        <p id="offerCard3UsageCost" class="offerInfoText">Geschätze Nutzkosten: </p>
        <p id="offerCard3Total" class="offerInfoText offerTotal">Total pro Monat: </p>
        <p id="offerCard3ActiFee" class="offerInfoText">Aktivierungsgebühr: </p>
    </div>
</a>
</div>`

function determineResult(userForm, offers) {
  let resultArray = []
  if (userForm.StrongWorldWideUsage == true) {
    resultArray = getBestWorldOffers(offers, userForm)
  } else {
    resultArray = getBestOffers(offers, userForm)
  }
  resultArray.sort((a, b) => {
    return a.Total - b.Total
  })
  displayResult(resultArray)
}

function displayResult(resultArray) {
  for (let i = 0; i <= 2; i++) {
    let url = document.getElementById(`offerCard${i + 1}Url`)
    url.href = resultArray[i].URL
    let title = document.getElementById(`offerCard${i + 1}Title`)
    title.innerHTML = i + 1 + '. ' + resultArray[i].OfferName
    let prov = document.getElementById(`offerCard${i + 1}Provider`)
    prov.innerHTML = 'Anbieter: ' + resultArray[i].Provider
    let baseP = document.getElementById(`offerCard${i + 1}BasePrice`)
    baseP.innerHTML = 'Basispreis: ' + resultArray[i].BasePrice + ' CHF'
    let ActiFee = document.getElementById(`offerCard${i + 1}ActiFee`)
    ActiFee.innerHTML =
      'Aktivierungsgebühr: ' + resultArray[i].ActivationFee + ' CHF'
    let UsaCo = document.getElementById(`offerCard${i + 1}UsageCost`)
    UsaCo.innerHTML =
      'Geschätze Nutzkosten: ' + resultArray[i].EstimatedUsagecost + ' CHF'
    let Total = document.getElementById(`offerCard${i + 1}Total`)
    Total.innerHTML = 'Total pro Monat: ' + resultArray[i].Total + ' CHF'
  }
}

function getBestOffers(offers, userForm) {
  let result = []
  offers.forEach((offer) => {
    const offerCost = calculateCostForOffer(offer, userForm)
    const formatedOffer = formatOffer(
      offer.offerUrl,
      offer.name,
      offer.provider,
      offer.basePrice,
      offer.activationFee,
      offerCost[1],
      offerCost[0]
    )
    result.push(formatedOffer)
  })
  return result
}

function getBestWorldOffers(offers, userForm) {
  let result = []
  offers.forEach((offer) => {
    if (offer.worldOffer == true) {
      const offerCost = calculateCostForOffer(offer, userForm)
      console.log(offer)
      const formatedOffer = formatOffer(
        offer.offerUrl,
        offer.name,
        offer.provider,
        offer.basePrice,
        offer.activationFee,
        offerCost[1],
        offerCost[0]
      )
      result.push(formatedOffer)
    }
  })
  return result
}

function calculateCostForOffer(offer, userForm) {
  let price = 0

  const NettoCallminutesPerMonthCH =
    userForm.CallminutesPerMonthCH - offer.deductions.freeCallminutesCH
  const NettoGBPerMonthCH =
    userForm.GBPerMonthCH - offer.deductions.freeGBInternetCH
  const NettoSMSPerMonthCH = userForm.SMSPerMonthCH - offer.deductions.freeSMSCH
  const NettoCallminutesPerMonthEurope =
    userForm.CallminutesPerMonthEurope - offer.deductions.freeCallminutesEurope
  const NettoGBPerMonthEurope =
    userForm.GBPerMonthEurope - offer.deductions.freeGBInternetEurope
  const NettoSMSPerMonthEurope =
    userForm.SMSPerMonthEurope - offer.deductions.freeSMSEurope

  price += NettoCallminutesPerMonthCH * offer.cost.callPerCallminuteCH
  price += NettoGBPerMonthCH * offer.cost.internetPerGBCH
  price += NettoSMSPerMonthCH * offer.cost.smsPerCountCH
  price += NettoCallminutesPerMonthEurope * offer.cost.callPerCallminuteEurope
  price += NettoGBPerMonthEurope * offer.cost.internetPerGBEurope
  price += NettoSMSPerMonthEurope * offer.cost.smsPerCountEurope

  let usageCost = price
  if (usageCost < 0) usageCost = 0
  let total = price + offer.basePrice
  return [total, usageCost]
}

function formatOffer(
  offerURL,
  offerName,
  provider,
  basePrice,
  activationFee,
  estimatedUsagecost,
  total
) {
  const formatedOffer = {
    URL: offerURL,
    OfferName: offerName,
    Provider: provider,
    BasePrice: basePrice,
    ActivationFee: activationFee,
    EstimatedUsagecost: estimatedUsagecost,
    Total: total,
  }
  return formatedOffer
}

async function getOffers() {
  try {
    const response = await fetch(
      `https://handy-tarifvergleich-server.azurewebsites.net/offers/all`,
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      }
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Fetch Error', error)
  }
}

async function getUserForm() {
  try {
    const response = await fetch(
      `https://handy-tarifvergleich-server.azurewebsites.net/users/me`,
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      }
    )
    const data = await response.json()
    return data.Form
  } catch (error) {
    console.log('Fetch Error', error)
  }
}
