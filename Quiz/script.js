let perguntas = [
    {
        pergunta : "Qual seleção foi eliminada invicta na semifinal da Copa de 1990, perdendo apenas nos pênaltis?",
        respostas: ["Argentina", "Itália", "Holanda", "Alemanha"],
        correta: 1
    },
    {
        pergunta: "Em qual estádio Neymar marcou dois gols na estreia da Copa de 2014?",
        respostas: ["Arena Corinthians - Croácia", "Estádio do Morumbi - Brasil", "Arena da Amazônia - Brasil", "Maracanã - Brasil"],
        correta: 0
    },
    {
        pergunta: "Quem tem o recorde de gols na Champions League (2013-14) com 17 gols?",
        respostas: ["Lionel Messi", "Zlatan Ibrahimović", "Cristiano Ronaldo", "Sergio Agüero"],
        correta: 2
    },
    {
        pergunta: "Qual time foi o único campeão da Libertadores com 100% de aproveitamento em 1963?",
        respostas: ["Santos", "Peñarol", "Boca Juniors", "Flamengo"],
        correta: 0
    },
    {
        pergunta: "Qual jogador venceu Libertadores, Champions League e jogou a Copa do Mundo?",
        respostas: ["Ronaldinho Gaúcho", "Ronaldo Nazário", "Pelé", "Maradona"],
        correta: 0
    },
    {
        pergunta: "Qual foi a primeira seleção africana a chegar às quartas de final de uma Copa do Mundo?",
        respostas: ["Nigéria", "Senegal", "Camarões", "Gana"],
        correta: 2
    },
    {
        pergunta: "Qual desses clubes foi o primeiro que o Neymar enfrentou e marcou gol em fase eliminatória da Champions League?",
        respostas: ["Bayern de Munique", "Chelsea", "Atlético de Madrid", "Juventus"],
        correta: 2
    },
    {
        pergunta: "Qual clube disputou mais finais de Champions League consecutivas?",
        respostas: ["Bayern de Munique", "Ajax", "Real Madrid", "Milan"],
        correta: 2
    },
    {
        pergunta: "Qual foi o clube brasileiro que mais vezes perdeu finais de Libertadores?",
        respostas: ["São Paulo", "Palmeiras", "Grêmio", "Internacional"],
        correta: 1
    },
    {
        pergunta: "Qual jogador participou de final de Copa do Mundo e também de final de Libertadores, mas nunca venceu nenhuma das duas?",
        respostas: ["Diego Forlán", "Carlos Tevez", "Hernán Crespo", "Michael Platini"],
        correta: 2
    },

]

//Váriaveis de controle

let perguntaAtual = 0
//Qual pergunta ta sendo exibida
//Começa na posição 0 //Primeira pergunta
let pontuacao = 0 //Quantas respostas certas

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual]
    //Pega a pergunta atual dentro do Array

    document.getElementById ("pergunta").innerText = pergunta.pergunta
    //Limpa a div antes de adicionar novas respostas
    let respostasDiv = document.getElementById ("respostas")
    respostasDiv.innerHTML = ""
    pergunta.respostas.forEach(function(resposta,index) {
        respostasDiv.innerHTML += `<button onclick="verificarRespota(${index})">${resposta}</button>`
    })
}
function verificarRespota (index) {
    let pergunta = perguntas[perguntaAtual]

    let resultado = document.getElementById ("resultado")
    if (index == pergunta.correta) {
        resultado.innerText = "RESPOSTA CERTA"
        pontuacao++
    } else {
        resultado.innerText = "RESPOSTA ERRADA"
    }
}
function proximaPergunta () {
    perguntaAtual++
    //vai para proxima pergunta
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta ()
        document.getElementById ("resultado").innerText = ""
    } else {
        mostrarResultadoFinal()
    }
}
    function mostrarResultadoFinal () {
        document.getElementById("container").innerHTML = `
        <h2> Quiz Finalizado! </h2>
        <p> Sua pontuacao foi: ${pontuacao}</p>
        <button onclick = "location.reload()"> Jogar novamente </button>
        ` //acento agudo ao lado do p 
    }
    mostrarPergunta ()