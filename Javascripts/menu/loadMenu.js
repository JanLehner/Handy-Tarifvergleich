import {
  isUserAdmin,
  checkIfUserIsLoggedIn,
  logout,
} from '../functions/generalFunctions.js'

export async function loadMenu() {
  const isUserLoggedIn = await checkIfUserIsLoggedIn()
  if (!isUserLoggedIn) return (window.location.hash = '#login')

  styleHolder.innerHTML = `<link rel="stylesheet" href="./Stylesheets/menuStyle.css"></link>`
  main.innerHTML = menu
  document.querySelector('.logoutBtn').addEventListener('click', logout)
  document.querySelector('#editProfileButton').addEventListener('click', () => {
    window.location.hash = '#form'
  })
  document
    .querySelector('#determineSubButton')
    .addEventListener('click', () => {
      window.location.hash = '#result'
    })

  const isAdmin = await isUserAdmin()

  if (isAdmin) {
    const actionCardDiv = document.createElement('div')
    actionCardDiv.className = 'flexbox actionCardDiv'
    actionCardDiv.innerHTML = `
      <a id="editOffersButton"><div class="flexbox actionTitle">Angebote bearbeiten</div>
      <div class="flexbox actionDescr">
        <p class="flexbox actionDescrText">Bearbeiten Sie die Angebotsauswahl für die Berechnung der Empfehlung.</p>
      </div></a>
    `

    const actionsDiv = document.querySelector('.actionsDiv')
    actionsDiv.insertAdjacentElement('afterbegin', actionCardDiv)

    document
      .querySelector('#editOffersButton')
      .addEventListener('click', () => {
        window.location.hash = '#offer'
      })
  }
}

const styleHolder = document.getElementById('styleHolder')
const main = document.querySelector('main')
const menu = `<div class="flexbox mainHeader">
<a class="flexbox btn logoutBtn">Logout</a>
</div>
<div class="flexbox infoMenuDiv">
<p class="flexbox infoMenuTitle">Willkommen Benutzer.</p>
<p class="flexbox infoMenuDescr">Was würden Sie gerne machen?</p>
</div>
<div class="flexbox actionsDiv">
<div class="flexbox actionCardDiv">
<a id="editProfileButton">
    <div class="flexbox actionTitle">Nutzungsprofil bearbeiten</div>
    <div class="flexbox actionDescr">
        <p class="flexbox actionDescrText">Aktualisieren Sie Ihr Nutzungsprofil auf Ihre aktuellen Bedürfnisse.</p>
    </div>
</a>
</div>
<div class="flexbox actionCardDiv">
<a id="determineSubButton">
    <div class="flexbox actionTitle">Abonnement bestimmen</div>
    <div class="flexbox actionDescr">
        <p class="flexbox actionDescrText">Finden Sie die drei günstigsten Abonnements für Ihr Nutzverhalten.</p>
    </div>
</a>
</div>
</div>`
