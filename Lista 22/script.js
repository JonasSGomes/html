// 1. Selecionar elementos
let btnCor = document.getElementById('btn-cor');
let elementos = document.querySelectorAll('.elemento');

btnCor.addEventListener('click', function() {
    elementos.forEach(function(el) {
        el.classList.toggle('ativado');
    });
});

// 2. Adicionar classe em todos
let btnAtivo = document.getElementById('btn-ativo');
let paragrafo = document.getElementById('paragrafo');
let caixa = document.getElementById('caixa');

btnAtivo.addEventListener('click', function() {
    paragrafo.classList.add('ativo');
    caixa.classList.add('ativo');
});

// 3. Clique em todos
let clicaveis = document.querySelectorAll('.clicavel');

clicaveis.forEach(function(item) {
    item.addEventListener('click', function() {
        console.log('clicou');
    });
});

// 4. Adicionar classe ao clicar
let divsRosa = document.querySelectorAll('.div-rosa');

divsRosa.forEach(function(div) {
    div.addEventListener('click', function() {
        div.classList.add('rosa');
    });
});

// 5. Toggle
let divsToggle = document.querySelectorAll('.div-toggle');

divsToggle.forEach(function(div) {
    div.addEventListener('click', function() {
        div.classList.toggle('toggle-ativo');
    });
});

// 6. Destacar vários
let destaqueMulti = document.querySelectorAll('.destaque-multi');

destaqueMulti.forEach(function(div) {
    div.addEventListener('click', function() {
        div.classList.add('selecionado');
    });
});

// 7. Remover destaque ao clicar novamente
destaqueMulti.forEach(function(div) {
    div.addEventListener('click', function() {
        div.classList.toggle('selecionado');
    });
});

// 8. Seleção única
let divsUnicas = document.querySelectorAll('.unica');

divsUnicas.forEach(function(div) {
    div.addEventListener('click', function() {
        // Remove de todas
        divsUnicas.forEach(function(d) {
            d.classList.remove('ativo');
        });
        // Adiciona apenas na clicada
        div.classList.add('ativo');
    });
});

// 9. Menu ativo
let menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // Remove de todos
        menuItems.forEach(function(m) {
            m.classList.remove('menu-ativo');
        });
        // Adiciona no clicado
        item.classList.add('menu-ativo');
    });
});
