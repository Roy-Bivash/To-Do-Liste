let btnAjouter = document.getElementById('btnAjouter');


btnAjouter.addEventListener('click', () => {
  let saisieNom = document.getElementById('saisieNom');
  let saisieDesc = document.getElementById('saisieDesc');
  let saisieDate = document.getElementById('saisieDate');

  let list = JSON.parse(localStorage.getItem('maList'));

  list.push({
    nom: String(saisieNom.value),
    desc: String(saisieDesc.value),
    date: String(saisieDate.value),
    status: "To Do"
  });

  localStorage.setItem('maList', JSON.stringify(list));
  window.location.href = "./";
})


