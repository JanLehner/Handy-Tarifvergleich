export function loadForm() {
  main.innerHTML = form;
}

const main = document.querySelector('main');

const form = `<form id="form">
<label for="telefonateProMonat"
  >Wie viele Telefonate führen Sie pro Monat?</label
>
<br />
<input
  type="range"
  min="0"
  max="20"
  id="telefonateProMonat"
  name="telefonateProMonat"
  value="10"
  class="slider"
/>

<datalist>
  <option label="0"></option>
  <option label="5"></option>
  <option label="10"></option>
  <option label="15"></option>
  <option label="20"></option>
</datalist>

<br /><br />

<label>Tätigen Sie Telefonate ins Ausland?</label>
<br />
<input type="radio" id="aNein" name="ausland" value="nein" />
<label class="radio-label" for="aNein">Nein</label>
<input type="radio" id="aSelten" name="ausland" value="selten" />
<label class="radio-label" for="aSelten">Selten</label>
<input type="radio" id="aJa" name="ausland" value="ja" />
<label class="radio-label" for="aJa">Ja</label>
<input type="radio" id="aOft" name="ausland" value="oft" />
<label class="radio-label" for="aOft">Oft</label>

<br /><br />

<label>Nutzen Sie das Internet, wenn Sie unterwegs sind?</label>
<br />
<input type="radio" id="uNein" name="unterwegs" value="nein" />
<label class="radio-label" for="uNein">Nein</label>
<input type="radio" id="uSelten" name="unterwegs" value="selten" />
<label class="radio-label" for="uSelten">Selten</label>
<input type="radio" id="uJa" name="unterwegs" value="ja" />
<label class="radio-label" for="uJa">Ja</label>
<input type="radio" id="uOft" name="unterwegs" value="oft" />
<label class="radio-label" for="uOft">Oft</label>

<br /><br />

<label for="datenVerbrauch"
  >Wie viele Gigabyte an Daten brauchen Sie pro Monat?</label
>
<br />
<input
  type="range"
  min="0"
  max="20"
  id="datenVerbrauch"
  value="10"
  name="datenVerbrauch"
  class="slider"
/>

<datalist>
  <option label="0"></option>
  <option label="5"></option>
  <option label="10"></option>
  <option label="15"></option>
  <option label="20"></option>
</datalist>

<br /><br />

<input type="submit" value="Sichern" id="submit" />
</form>`;
