let affichageTodo = document.getElementById('lstTodo');
let btnVider = document.getElementById('btnVider');
let laListe = localStorage.getItem('maList');
let theBox = document.getElementById('theBox');
let textBox = document.getElementById('textBox');

if (!laListe) {
  console.log('Nouvelle liste crée');
  localStorage.setItem('maList', JSON.stringify([]));
} else {
  laListe = JSON.parse(laListe);
}


for (let i = 0; i < laListe.length; i++) {
  affichageTodo.insertAdjacentHTML("beforebegin", (createNewRow(laListe[i], i)));
}


function createNewRow(data, rowNb) {
  let = color = "";
  switch (data.status) {
    case "To Do":
      color = "bgRed";
      break;
    case "En Cours":
      color = "bgOrange";
      break;
    case "Terminé":
      color = "bgGreen";
      break;
  }
  return (`
    <tr>
      <th><a class="todoNom" onclick="getDescription(${rowNb})">${data.nom}</a></th>
      <td>${data.date}</td>
      <td><p class="statut ${color}">${data.status}</p></td>
      <td><a href="Editer.html?num=${rowNb}" type="button" class="btn btn-outline-dark">Editer</a></td>
      <td><button type="button" class="btn-close" onclick="confirmSupTodo(${rowNb})"></button></td>
    </tr>
  `)
}


btnVider.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
})


function getDescription(nb) {
  //alert(laListe[nb].desc);
  textBox.innerHTML = `
  <h3 class="text-center" style="text-transform: capitalize;">${laListe[nb].nom}</h3>
  <p class="text-center">Date : ${laListe[nb].date} | Statut : <span style="text-transform: capitalize;">${laListe[nb].status} </span></p>
  <hr>
  
  <p><u>Description</u> : <br>${laListe[nb].desc}</p>
  `;
  theBox.style.visibility = "visible";
  theBox.style.top = "2vh";
}

function closeAlert() {
  theBox.style.top = "-1vh";
  theBox.style.visibility = "hidden";
}


function confirmSupTodo(numTodo) {
  if (confirm("Voulez vous vraiment le supprimer") == true) {
    supprimerTodo(numTodo);
  }
}

function supprimerTodo(numTodo) {
  laListe.splice(numTodo, 1);
  localStorage.setItem('maList', JSON.stringify(laListe));
  window.location.href = "./";
}