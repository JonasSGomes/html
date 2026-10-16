//script.js
let input = document.getElementById("input")
let buscar = document.getElementById("buscar")
let resultado = document.getElementById("resultado")

function traduzirClima(codigo) {
    if (codigo == 0) {
       return {texto: "Céu Limpo", icone: "🌞"}
    }
    if (codigo == 1 || codigo == 2 || codigo == 3) {
        return {texto: "Nublado", icone: "⛅"}
    }
    if (codigo >= 51 && codigo <= 65) {
        return {texto: "Chuva", icone: "🌧️"}
    }
    if (codigo >= 80 && codigo <= 82) {
        return {texto: "Pancadas de chuva", icone: "⛈️"}
    }
    return {texto: "Indefinido", icone: "❓"}
}

function mostrarClima(dadosClima) {
    let atual = dadosClima.current
    let clima = traduzirClima(atual.weather_code)
   
    let titulo = document.createElement("h2")
    titulo.innerText = clima.icone + " " + clima.texto
    let temperatura = document.createElement("p")
    temperatura.innerText = "Temperatura: " + atual.temperature_2m + " °C"
    let cidade = document.createElement("h2")
    cidade.innerText = "Cidade: " + atual.name
    resultado.appendChild(cidade)
    resultado.appendChild(titulo)
    resultado.appendChild(temperatura)
}
function mostrarPrevisao(dadosClima) {
    let dia = dadosClima.daily
    let previsao = document.createElement("ul")
    for(let [indice, data] of dia.time.entries()) {
        let clima = traduzirClima(dia.weather_code[indice])
        let minima = dia.temperature_2m_min[indice]
        let maxima = dia.temperature_2m_max[indice]
       
        let item = document.createElement("li")
        item.innerText = data + ":" + clima.icone + " " + minima + "C " + maxima + "C"
        // 17/10/2026 🌞 23°C   30°C
        // 18/10/2026 🌧️ 16°C   24°C
        previsao.appendChild(item)  
    }
    resultado.appendChild(previsao)
}
async function buscarClima(cidadeNome) {
    try {
        let geolocalizacao = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + cidadeNome + "&count=1&language=pt")
        let dados = await geolocalizacao.json()

        if(!dados.results || dados.results.length == 0) {
            resultado.innerText = "Cidade não encontrada"
            return
        }
        let cidade = dados.results[0]
        let latitude = cidade.latitude
        let longitude = cidade.longitude
       
        let resposta = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude +"&current=temperature_2m,relative_humidity_2m,weather_code,apparent_temperature" + "&daily=temperature_2m_max,temperature_2m_min,weather_code" + "&timezone=auto")
        let dadosClima = await resposta.json()
        console.log(dadosClima)
        resultado.innerHTML = ""
        mostrarClima(dadosClima)
        mostrarPrevisao(dadosClima)
    }
    catch (erro) {
        resultado.innerText = "falha ao conectar a API"
    }
}
buscar.addEventListener("click", function() {
    buscarClima(input.value)
})