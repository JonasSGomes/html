let imagens = document.querySelectorAll(".img")
let indice = 0
function mostrarImagem(){
	imagens.forEach(function(img){
		img.classList.remove("ativa")
	})
	imagens[indice].classList.add("ativa")
}

function avancarAutomatico(){
	indice++
	if(indice >= imagens.length){
		indice = 0
	}
	mostrarImagem()
}
setInterval(avancarAutomatico, 3000) //3 segundos

