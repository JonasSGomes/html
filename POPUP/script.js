function abrirPopup() {
  document.getElementById("meuPopup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("meuPopup").style.display = "none";
}

function confirmar() {
  alert("Item excluído!");
  fecharPopup();
}

document.getElementById("meuPopup").addEventListener("click", function(e) {
  if (e.target === this) fecharPopup();
});