import { Router } from './Javascripts/router.js'
import { loadForm } from './Javascripts/form/loadForm.js'
import { loadLogin } from './Javascripts/login/loadLogin.js'
import { loadRegister } from './Javascripts/register/loadRegister.js'
import { loadMenu } from './Javascripts/menu/loadMenu.js'
import { loadResult } from './Javascripts/result/loadResult.js'
import { loadOffer } from './Javascripts/offer/loadOffer.js'
import { loadDetailView } from './Javascripts/detailView/loadDetailView.js'
import { loadLoading } from './Javascripts/loading/loadLoading.js'
import { loadAdd } from './Javascripts/add/loadAdd.js'

const main = document.querySelector('main')
getAllRoutes()

export function getAllRoutes() {
  const routes = {
    form: { hash: '#form', function: loadForm },
    login: { hash: '#login', function: loadLogin },
    register: { hash: '#register', function: loadRegister },
    menu: { hash: '#menu', function: loadMenu },
    result: { hash: '#result', function: loadResult },
    offer: { hash: '#offer', function: loadOffer },
    loading: { hash: '#loading', function: loadLoading },
    add: { hash: '#add', function: loadAdd },
    error: { function: renderNotFound },
  }

  fetch('https://handy-tarifvergleich-server.azurewebsites.net/offers/all')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        routes[`detail${element.offerId}`] = {
          hash: `#detail${element.offerId}`,
          function: loadDetailView,
          id: element.offerId,
        }
      })
      const router = new Router(routes)
      router.urlResolve()
    })

  function renderNotFound() {
    main.innerHTML = `
  <h1>404 | Not found</h1>
  <a class="flexbox btn notFound" href="#">Return to home</a>`
  }
}
