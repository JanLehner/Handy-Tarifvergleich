import { Router } from "./Javascripts/router.js";
import { loadForm } from "./Javascripts/form/loadForm.js"
import { loadLogin } from "./Javascripts/login/loadLogin.js";
import { loadRegister } from "./Javascripts/register/loadRegister.js";
import { loadMenu } from "./Javascripts/menu/loadMenu.js";
import {loadResult } from "./Javascripts/result/loadResult.js"
import { loadOffer } from "./Javascripts/offer/loadOffer.js";

const main = document.querySelector("main");

const routes = {
  form: { hash: '#form', function: loadForm},
  login: { hash: '#login', function: loadLogin},
  register: { hash: '#register', function: loadRegister},
  menu: { hash: '#menu', function: loadMenu},
  result: { hash: '#result', function: loadResult},
  offer: { hash: '#offer', function: loadOffer},
  error: { function: renderNotFound },
};
let router = new Router(routes);

router.urlResolve();

function renderNotFound() {
  main.innerHTML = `
  <h1>404 | Not found</h1>
  <a class="flexbox btn notFound" href="#">Return to home</a>`;
}
