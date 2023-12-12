import { Router } from "./Javascripts/router.js";
import { loadForm } from "./Javascripts/form/loadForm.js"
import { loadLogin } from "./Javascripts/login/loadLogin.js";
import { loadRegister } from "./Javascripts/register/loadRegister.js";

const main = document.querySelector("main");

const routes = {
  form: { hash: '#form', function: loadForm},
  login: { hash: '#login', function: loadLogin},
  register: { hash: '#login', function: loadRegister},
  error: { function: renderNotFound },
};
let router = new Router(routes);

router.urlResolve();

function renderNotFound() {
  main.innerHTML = `
  <h1>404 | Not found</h1>
  <a href="#">Return to home</a>`;
}
