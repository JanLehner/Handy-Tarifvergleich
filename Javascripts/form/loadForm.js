export function loadForm() {
  main.innerHTML = form;
}

const main = document.querySelector('main');

const form = `<form>
<label for="telefonateProMonat">Wie viele Telefonate pro Monat</label>
<br />
<input
  type="range"
  min="0"
  max="20"
  value="10"
  id="telefonateProMonat"
  list="tMarkers"
/>

<datalist id="tMarkers">
  <option value="0" label="0"></option>
  <option value="5" label="5"></option>
  <option value="10" label="10"></option>
  <option value="15" label="15"></option>
  <option value="20" label="20<"></option>
</datalist>

<br /><br />

<label>Tätigen Sie Telefonate ins Ausland?</label> <br />
<input type="radio" id="aNein" name="ausland" value="nein" />
<label for="aNein">Nein</label>
<input type="radio" id="aSelten" name="ausland" value="selten" />
<label for="aSelten">Selten</label>
<input type="radio" id="aJa" name="ausland" value="ja" />
<label for="aJa">Ja</label>
<input type="radio" id="aOft" name="ausland" value="oft" />
<label for="aOft">Oft</label>

<br /><br />

<label>Nutzen Sie oft das Internet, wenn Sie unterwegs sind?</label>
<br />
<input type="radio" id="uNein" name="unterwegs" value="nein" />
<label for="nNein">Nein</label>
<input type="radio" id="uSelten" name="unterwegs" value="selten" />
<label for="uSelten">Selten</label>
<input type="radio" id="uJa" name="unterwegs" value="ja" />
<label for="uJa">Ja</label>
<input type="radio" id="uOft" name="unterwegs" value="oft" />
<label for="uOft">Oft</label>

<br /><br />

<label for="datenVerbrauch">Wie viele Daten brauchen Sie (in GB)</label>
<br />
<input
  type="range"
  min="0"
  max="20"
  value="10"
  id="datenVerbrauch"
  list="dMarkers"
/>

<datalist id="dMarkers">
  <option value="0" label="0"></option>
  <option value="5" label="5"></option>
  <option value="10" label="10"></option>
  <option value="15" label="15"></option>
  <option value="20" label="20<"></option>
</datalist>

<br /><br />

<input type="submit" value="Sichern" />
</form>`;
  