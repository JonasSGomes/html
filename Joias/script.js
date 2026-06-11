let slides = document.querySelectorAll('.slide');
let indice = 0;

function mostrarSlide(posicao) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[posicao].classList.add('active');
  indice = posicao;
}

function slideProximo() {
  indice = indice + 1;
  if (indice >= slides.length) {
    indice = 0;
  }
  mostrarSlide(indice);
}

function slideAnterior() {
  indice = indice - 1;
  if (indice < 0) {
    indice = slides.length - 1;
  }
  mostrarSlide(indice);
}

function pesquisarJoias() {
  let texto = document.getElementById('searchInput').value.toLowerCase();
  let cards = document.querySelectorAll('.card');

  for (let i = 0; i < cards.length; i++) {
    let nome = cards[i].getAttribute('data-name').toLowerCase();

    if (nome.indexOf(texto) >= 0) {
      cards[i].style.display = 'block';
    } else {
      cards[i].style.display = 'none';
    }
  }
}

let pesquisa = document.getElementById('searchInput');
if (pesquisa) {
  pesquisa.addEventListener('input', pesquisarJoias);
}

let formulario = document.getElementById('waitlistForm');
if (formulario) {
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    let nome = document.getElementById('name').value;
    let telefone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    if (nome === '' || telefone === '' || email === '') {
      document.getElementById('feedback').innerText = 'Preencha nome, telefone e e-mail.';
    } else {
      document.getElementById('feedback').innerText = 'Obrigado, ' + nome + '! Sua vaga foi registrada.';
      formulario.reset();
    }
  });
}

let perguntas = document.querySelectorAll('.faq-question');
for (let i = 0; i < perguntas.length; i++) {
  perguntas[i].addEventListener('click', function () {
    let resposta = this.nextElementSibling;

    if (resposta.style.display === 'block') {
      resposta.style.display = 'none';
    } else {
      resposta.style.display = 'block';
    }
  });
}

mostrarSlide(0);
setInterval(slideProximo, 3500);
