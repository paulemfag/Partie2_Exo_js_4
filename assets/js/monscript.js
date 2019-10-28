// Sélectionne l'élement a partir de son id
var resetForm = document.getElementById('reset');
// Si l'on clique sur l'element
resetForm.onclick = function resetForm(){
// Affecte une valeur vide aux champs
document.getElementById('lastname').value="";
document.getElementById('firstname').value="";
document.getElementById('city').value="";
}
