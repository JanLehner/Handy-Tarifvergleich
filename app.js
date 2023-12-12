import { Router } from "./Javascripts/router.js";
import { loadForm } from "./Javascripts/form/loadForm.js"

const main = document.querySelector("main");

const routes = {
  form: { hash: '#form', function: loadForm},
  error: { function: renderNotFound },
};
let router = new Router(routes);

router.urlResolve();

function renderNotFound() {
  main.innerHTML = `
  <h1>404 | Not found</h1>
  <a href="#">Return to home</a>`;
}
