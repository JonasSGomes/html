//1

let texto = document.getElementById ("texto")
let fundo = document.getElementById ("fundo")
let borda = document.getElementById ("borda")
let texto2 = document.getElementById ("texto2")
let tamanho = document.getElementById ("tamanho")
let texto3 = document.getElementById ("texto3")

fundo.addEventListener ("click", function() {
    texto.classList.add("ativo")
})

//2

remover.addEventListener("click", function() {
    texto.classList.remove("ativo");
})

//3
alternar.addEventListener("click", function() {
    texto.classList.toggle("ativo");
})

//4

borda.addEventListener ("click", function() {
    texto2.classList.add("destaque")
})

//5
tamanho.addEventListener ("click", function () {
    texto3.classList.toggle("grande")
})

//6. Esconder elemento
let escondidoBtn = document.getElementById("escondido");
let texto4 = document.getElementById("texto4");

escondidoBtn.addEventListener("click", function() {
    texto4.classList.toggle("escondido");
});

//7. Destaque ao passar mouse
let texto5 = document.getElementById("texto5");

texto5.addEventListener("mouseover", function() {
    texto5.classList.add("hover");
});

texto5.addEventListener("mouseout", function() {
    texto5.classList.remove("hover");
});

//8. Botão ativo
let botaoAtivo = document.getElementById("botao-ativo");

botaoAtivo.addEventListener("click", function() {
    botaoAtivo.classList.toggle("botao-ativo");
});

//9. Seleção de item
let items = document.querySelectorAll(".item");

items.forEach(function(item) {
    item.addEventListener("click", function() {
        // Remove a classe de todos os itens
        items.forEach(function(i) {
            i.classList.remove("selecionado");
        });
        // Adiciona apenas no clicado
        item.classList.add("selecionado");
    });
});

//10. Modo escuro
let darkToggle = document.getElementById("dark-toggle");

darkToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        darkToggle.textContent = "Desativar Modo Escuro";
    } else {
        darkToggle.textContent = "Ativar Modo Escuro";
    }
});

//11. Menu escondido
let menuToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", function() {
    menu.classList.toggle("mostrar");
    if (menu.classList.contains("mostrar")) {
        menuToggle.textContent = "Esconder Menu";
    } else {
        menuToggle.textContent = "Mostrar Menu";
    }
});

//12. Caixa interativa
let caixaInterativa = document.getElementById("caixa-interativa");

caixaInterativa.addEventListener("click", function() {
    caixaInterativa.classList.toggle("cores");
});

caixaInterativa.addEventListener("mouseover", function() {
    caixaInterativa.classList.add("borda");
});

caixaInterativa.addEventListener("mouseout", function() {
    caixaInterativa.classList.remove("borda");
});

//13. Botões de cores
let btnVermelho = document.getElementById("btn-vermelho");
let btnAzul = document.getElementById("btn-azul");
let btnVerde = document.getElementById("btn-verde");
let caixaCores = document.getElementById("caixa-cores");

btnVermelho.addEventListener("click", function() {
    caixaCores.classList.remove("azul", "verde");
    caixaCores.classList.add("vermelho");
});

btnAzul.addEventListener("click", function() {
    caixaCores.classList.remove("vermelho", "verde");
    caixaCores.classList.add("azul");
});

btnVerde.addEventListener("click", function() {
    caixaCores.classList.remove("vermelho", "azul");
    caixaCores.classList.add("verde");
});
