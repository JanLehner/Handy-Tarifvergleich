export function loadLoading() {
  styleHolder.innerHTML = `<link rel="stylesheet" href="./Stylesheets/loadingStyle.css"></link>`
  main.innerHTML = loading
}

const styleHolder = document.getElementById('styleHolder')
const main = document.querySelector('main')

/*Der eingeklammerte Code wurde von https://loading.io/css/ übernommen*/
const loading = `<p class="loading">Lädt</p>
<div class="lds-facebook"><div></div><div></div><div></div></div>`
/*-------------------------------------------------------------------------------*/
