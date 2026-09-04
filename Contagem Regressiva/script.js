const dataCarnaval = new Date(2027, 1, 9, 0, 0, 0);

const elementoDias = document.getElementById("dias");
const elementoHoras = document.getElementById("horas");
const elementoMinutos = document.getElementById("minutos");
const elementoSegundos = document.getElementById("segundos");

const contador = document.getElementById("fevereiro");

function adicionarZero(numero) {
    return String(numero).padStart(2, "0");
}

function atualizarContagem() {
    const agora = new Date();
    const diferenca = dataCarnaval - agora;

    if (diferenca <= 0) {
        contador.innerHTML = `
            <div class="tempo">
                <strong>🎉</strong>
                <span>O Carnaval chegou!</span>
            </div>
        `;

        return;
    }

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    elementoDias.textContent = adicionarZero(dias);
    elementoHoras.textContent = adicionarZero(horas);
    elementoMinutos.textContent = adicionarZero(minutos);
    elementoSegundos.textContent = adicionarZero(segundos);
}

atualizarContagem();

setInterval(atualizarContagem, 1000);

const slides = document.querySelectorAll(".slide");

const containerBolinhas =
    document.getElementById("bolinhas");

const contadorSlide =
    document.getElementById("contadorSlide");

const botaoAnterior =
    document.getElementById("botaoAnterior");

const botaoProximo =
    document.getElementById("botaoProximo");

let slideAtual = 0;
let intervaloCarrossel;

slides.forEach((slide, indice) => {

    const bolinha =
        document.createElement("button");

    bolinha.classList.add("bolinha");

    bolinha.setAttribute(
        "aria-label",
        `Ir para slide ${indice + 1}`
    );

    if (indice === 0) {
        bolinha.classList.add("ativa");
    }

    bolinha.addEventListener("click", () => {
        mostrarSlide(indice);
        reiniciarCarrossel();
    });

    containerBolinhas.appendChild(bolinha);
});

const bolinhas =
    document.querySelectorAll(".bolinha");

function mostrarSlide(numero) {

    slides[slideAtual]
        .classList.remove("ativo");

    bolinhas[slideAtual]
        .classList.remove("ativa");

    slideAtual = numero;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    slides[slideAtual]
        .classList.add("ativo");

    bolinhas[slideAtual]
        .classList.add("ativa");

    atualizarNumeroSlide();
}

function atualizarNumeroSlide() {

    contadorSlide.textContent =
        `${adicionarZero(slideAtual + 1)} / ${adicionarZero(slides.length)}`;

}

function proximoSlide() {
    mostrarSlide(slideAtual + 1);
}

function anteriorSlide() {
    mostrarSlide(slideAtual - 1);
}

function iniciarCarrossel() {

    intervaloCarrossel =
        setInterval(proximoSlide, 5500);

}

function reiniciarCarrossel() {

    clearInterval(intervaloCarrossel);

    iniciarCarrossel();

}

botaoProximo.addEventListener("click", () => {

    proximoSlide();

    reiniciarCarrossel();

});

botaoAnterior.addEventListener("click", () => {

    anteriorSlide();

    reiniciarCarrossel();

});

document.addEventListener("keydown", (evento) => {

    if (evento.key === "ArrowRight") {

        proximoSlide();

        reiniciarCarrossel();

    }

    if (evento.key === "ArrowLeft") {

        anteriorSlide();

        reiniciarCarrossel();

    }

});

atualizarNumeroSlide();

iniciarCarrossel();