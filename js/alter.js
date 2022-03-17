
function setInfo(item){
    console.log(item);
    const page = document.getElementById('page');
    page.style.backgroundImage = `url('${item}')`;
}

{/* <td class="mdl-data-table__cell--non-numeric"><form action="#">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
    <label class="mdl-button mdl-js-button mdl-button--icon" for="sample6">
      <span id="something">0</span>
    </label>
    <div class="mdl-textfield__expandable-holder">
      <input class="mdl-textfield__input" type="text" id="sample6">
      <label class="mdl-textfield__label" for="sample-expandable">Expandable Input</label>
    </div>
  </div>
</form></td> */}