function swapStyleSheet(sheet) {
  var link = document.getElementById('pagestyle');
  // garde le dossier de la page actuelle ("" ou "../")
  var dossier = link.getAttribute('href').replace(/[^\/]*$/, '');
  link.setAttribute('href', dossier + sheet);
  try { localStorage.setItem('theme', sheet); } catch (e) { }
}

(function () {
  var theme;
  try { theme = localStorage.getItem('theme'); } catch (e) { }
  if (theme) swapStyleSheet(theme);
})();

//code généré avec ia en réponse au prompt suivant :
// "en Javascript, écrit un code à implémenter dans mon site, permettant de changer le thème css d'un site web,
// en rempacant sa feuille de style css et de le garder sur toute les page du navigateurs