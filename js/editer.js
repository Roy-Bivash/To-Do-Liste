let btnModifier = document.getElementById('btnModifier');
let saisieNom = document.getElementById('saisieNom');
let saisieDesc = document.getElementById('saisieDesc');
let saisieDate = document.getElementById('saisieDate');
let saisieStatut = document.getElementById('saisieStatut');
let laListe = localStorage.getItem('maList');
laListe = JSON.parse(laListe);
let numTODO = getUrlData("num");

function getUrlData(param) {
  // recuperation du rapamettre page dans l'URL
  var url_string = window.location.href;
  var url = new URL(url_string);
  var res = url.searchParams.get(param);
  return res;
}


function createPage() {

  saisieNom.value = laListe[numTODO].nom;
  saisieDesc.value = laListe[numTODO].desc;
  saisieDate.value = laListe[numTODO].date;





}



btnModifier.addEventListener('click', () => {

  //alert(saisieStatut.options[saisieStatut.selectedIndex].value);

  laListe[numTODO].nom = saisieNom.value;
  laListe[numTODO].desc = saisieDesc.value;
  laListe[numTODO].date = saisieDate.value;
  laListe[numTODO].status = saisieStatut.options[saisieStatut.selectedIndex].value;


  localStorage.setItem('maList', JSON.stringify(laListe));
  window.location.href = "./index.html";
})

