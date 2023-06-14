const URL_HP = 'https://hp-api.onrender.com/api/spells';
const tableBodyDOM = document.querySelector('#hp-characters-table-body');
 
fetch(URL_HP)
    .then(r => r.json())
    .then(renderTable);

function renderTable(d){
    const rows = d.map((character, count) => getCharacterRow(character, count+1));
    const charactersRowsString = rows.join('');
    tableBodyDOM.innerHTML = charactersRowsString;
}

function getCharacterRow({ name, description }, count){
    return `<tr>
    <td>${ count }</td>
    <td>${ name }</td>
    <td>${ description }</td>
    </tr>`;
}