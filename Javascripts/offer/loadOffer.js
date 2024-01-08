const API_URL = `https://handy-tarifvergleich-server.azurewebsites.net`

export function loadOffer() {
  if (sessionStorage.getItem('reload') == 'true') {
    sessionStorage.setItem('reload', false)
    window.location.reload()
  }
  const styleHolder = document.getElementById('styleHolder')
  styleHolder.innerHTML = `<link rel="stylesheet" href="./Stylesheets/offersStyle.css"></link>`
  const main = document.querySelector('main')
  main.innerHTML = `<div class="flexbox mainHeader">
    <a class="flexbox btn" id="homeBtn">Home</a>
    <a class="flexbox btn" id="logoutBtn">Logout</a>
    </div>
    <p class="title">Abonnements</p>
    <div class="flexbox offerContainer"></div>`

  document.querySelector('#homeBtn').addEventListener('click', () => {
    window.location.hash = '#menu'
  })

  document.querySelector('#logoutBtn').addEventListener('click', () => {
    sessionStorage.removeItem('token')
    window.location.hash = '#login'
  })

  const loadOfferURL = API_URL + '/offers/all'

  fetch(`${loadOfferURL}`)
    .then((response) => response.json())
    .then((data) => {
      const offersContainer = document.querySelector('.offerContainer')
      data.forEach((offer) => {
        const offerCard = document.createElement('div')
        offerCard.classList.add('flexbox', 'offerCard')
        offerCard.setAttribute('id', `offer${offer.offerId}`)

        const offerCardHeader = document.createElement('div')
        offerCardHeader.classList.add('flexbox', 'offerCardHeader')

        offerCardHeader.innerHTML = `
        <a class="flexbox btn offerCardBtn" id="offerEditBtn${offer.offerId}">
            <svg width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="icomoon-ignore">
                </g>
                <path d="M30.771 5.802l-4.251-4.251-1.040 1.041-1.456-1.455c-0.208-0.208-0.546-0.208-0.754 0l-8.638 8.639c-0.208 0.208-0.208 0.546 0 0.754 0.104 0.104 0.241 0.156 0.377 0.156s0.273-0.052 0.377-0.156l8.261-8.262 1.079 1.078-18.319 18.318 1.235 1.235c-0.52-0.257-1.086-0.388-1.652-0.388-0.957 0-1.914 0.365-2.644 1.095-0.075 0.074-0.147 0.154-0.216 0.238-0.034 0.040-0.067 0.082-0.098 0.123-0.038 0.047-0.073 0.096-0.107 0.146-0.026 0.036-0.052 0.072-0.076 0.108-1.55 2.331-1.62 6.789-1.62 6.789s0.162 0.008 0.444 0.008c1.281 0 5.010-0.175 6.961-2.126 1.162-1.163 1.396-2.9 0.706-4.297l1.319 1.319 20.113-20.113zM7.879 28.139c-1.19 1.19-3.278 1.6-4.767 1.741l2.427-2.427-0.754-0.754-2.325 2.325c0.189-1.422 0.566-3.146 1.28-4.217l0.030-0.043 0.026-0.037c0.023-0.033 0.047-0.068 0.088-0.12 0.018-0.023 0.035-0.047 0.067-0.084 0.047-0.056 0.095-0.11 0.148-0.163 0.505-0.505 1.176-0.783 1.89-0.783s1.385 0.278 1.89 0.783c1.041 1.042 1.041 2.737 0 3.779zM29.264 5.802l-6.324 6.324-2.744-2.743 6.324-6.324 2.744 2.743zM19.442 10.136l2.744 2.743-11.528 11.528-2.744-2.743 11.528-11.528z" fill="#1D2731">
                </path>
            </svg>
        </a>
        <a class="flexbox btn offerCardBtn" id="offerDeleteBtn${offer.offerId}">
            <svg fill="#1D2731" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
                <g>
                    <g>
                        <path d="M404.714,60.236h-59.147V15.314C345.566,6.858,338.709,0,330.252,0H181.746c-8.456,0-15.314,6.858-15.314,15.314v44.922
h-59.147c-29.123,0-52.815,23.694-52.815,52.817v63.57c0,8.456,6.858,15.314,15.314,15.314h16.188v304.749
c0,8.456,6.858,15.314,15.314,15.314h309.428c8.456,0,15.314-6.858,15.314-15.314V191.937h16.188
c8.456,0,15.314-6.858,15.314-15.314v-63.57C457.53,83.93,433.836,60.236,404.714,60.236z M197.06,30.628h117.88v29.608H197.06
V30.628z M150.409,481.367H117.4V294.009h16.506c9.1,0,16.504,7.404,16.504,16.504V481.367z M270.714,481.369h-33.009V310.515
c0-9.1,7.404-16.504,16.505-16.504c9.1,0,16.504,7.404,16.504,16.504V481.369z M394.599,481.37h-30.234v-0.002V310.515
c0-9.1,7.404-16.504,16.504-16.504h13.731V481.37z M395.4,263.381h-0.002h-14.53c-25.989,0-47.132,21.144-47.132,47.132V481.37
h-32.392V310.515c0-25.989-21.144-47.132-47.132-47.132c-25.991,0-47.134,21.144-47.134,47.132v170.857H181.04V310.515
c0-25.989-21.144-47.132-47.132-47.132H116.6v-16.314h207.219c8.456,0,15.314-6.858,15.314-15.314s-6.858-15.314-15.314-15.314
H116.6v-24.502H395.4V263.381z M410.714,161.309H101.286h-16.19v-48.256c0-12.234,9.953-22.188,22.187-22.188h297.431
c12.234,0,22.187,9.954,22.187,22.188v48.256H410.714z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M380.59,220.931c-0.704-0.704-1.499-1.348-2.328-1.914c-0.842-0.55-1.73-1.026-2.649-1.409
c-0.919-0.383-1.882-0.672-2.862-0.873c-4.977-0.994-10.26,0.628-13.815,4.196c-0.72,0.704-1.348,1.485-1.914,2.329
c-0.551,0.827-1.026,1.715-1.409,2.634c-0.383,0.919-0.674,1.882-0.873,2.864c-0.199,0.994-0.305,2.006-0.305,3.002
c0,4.028,1.637,7.979,4.501,10.827c0.709,0.703,1.489,1.346,2.315,1.896c0.844,0.551,1.73,1.026,2.649,1.409
c0.919,0.383,1.882,0.674,2.864,0.873c0.994,0.199,1.991,0.306,3.002,0.306c0.994,0,1.991-0.107,2.986-0.306
c0.98-0.199,1.945-0.49,2.862-0.873c0.92-0.383,1.809-0.858,2.649-1.409c0.827-0.55,1.623-1.193,2.328-1.897
c0.704-0.704,1.332-1.487,1.899-2.329c0.551-0.827,1.026-1.715,1.409-2.648c0.383-0.92,0.674-1.884,0.873-2.864
c0.199-0.982,0.291-1.992,0.291-2.986C385.063,227.715,383.438,223.764,380.59,220.931z"></path>
                    </g>
                </g>
            </svg>
        </a>`

        const offerCardMain = document.createElement('div')
        offerCardMain.classList.add('flexbox', 'offerCardMain')

        const offerName = document.createElement('p')
        offerName.classList.add('offerCardText')
        offerName.textContent = `Angebotsname: ${offer.name}`

        const offerProvider = document.createElement('p')
        offerProvider.classList.add('offerCardText')
        offerProvider.textContent = `Anbieter: ${offer.provider}`

        offerCardMain.appendChild(offerName)
        offerCardMain.appendChild(offerProvider)

        offerCard.appendChild(offerCardHeader)
        offerCard.appendChild(offerCardMain)

        offersContainer.appendChild(offerCard)

        const offerCardEdit = document.querySelector(
          `#offerEditBtn${offer.offerId}`
        )
        offerCardEdit.addEventListener('click', () => {
          main.innerHTML = ''
          window.location.hash = `#detail${offer.offerId}`
        })

        const offerCardDelete = document.querySelector(
          `#offerDeleteBtn${offer.offerId}`
        )
        offerCardDelete.addEventListener('click', () => {
          deleteOffer(offer.offerId)
        })
      })
      const addOfferCard = document.createElement('div')
      addOfferCard.classList.add('flexbox', 'offerCard')
      addOfferCard.setAttribute('id', `addOfferCard`)
      addOfferCard.innerHTML = `<a class="flexbox btn" id="addOfferBtn">add</a>`
      offersContainer.appendChild(addOfferCard)
      const addOfferBtn = document.querySelector('#addOfferBtn')
      addOfferBtn.addEventListener('click', () => {
        main.innerHTML = ''
        window.location.hash = '#add'
      })
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
}

async function deleteOffer(offerId) {
  if (!confirm('Wollen Sie das Angebot wirklich löschen?')) {
    return
  }

  const deleteOfferURL = API_URL + `/offers/delete?offerId=${offerId}`

  try {
    const response = await fetch(`${deleteOfferURL}`, {
      method: 'DELETE',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    })

    if (!response.ok) {
      throw new Error('Could not delete offer (HTTP error)')
    }

    const data = await response.text()

    if (response.status === 200) {
      window.location.reload()
    } else {
      console.log('Delete offer error:', data)
    }
  } catch (err) {
    console.error(err)
  }
}
