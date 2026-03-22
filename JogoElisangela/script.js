const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const bloco = 20;

let snake, dx, dy, comida, pausado, vidas, pontos, perguntaIndex, perguntaAtual;

// animação
let ultimoTempo = 0;
let velocidade = 120;

// boca
let bocaAngulo = 0.2;
let abrindo = true;

// RESET
function resetarJogo() {
    snake = [{x: 10, y: 10}];
    dx = 1;
    dy = 0;
    comida = gerarComida();
    pausado = true;
    vidas = 3;
    pontos = 0;
    perguntaIndex = 0;

    atualizarHUD();

    document.getElementById("modalResultado").classList.remove("ativo");
    document.getElementById("inicioModal").classList.add("ativo");
}

resetarJogo();

// PERGUNTAS
let perguntas = [
{
p: "(ENEM - adaptada) Durante a intérfase, a célula realiza diversas atividades essenciais para sua divisão. A fase G1 é caracterizada principalmente por qual processo?",
img: "",
op: [
"Duplicação do DNA",
"Crescimento celular e intensa síntese de proteínas",
"Separação dos cromossomos homólogos",
"Divisão do citoplasma"
],
c: 1
},

{
p: "(Mackenzie - adaptada) A fase S do ciclo celular é fundamental para garantir a transmissão correta da informação genética. Nessa fase ocorre:",
img: "",
op: [
"Redução do número de cromossomos",
"Síntese de proteínas estruturais",
"Duplicaçao do DNA",
"Separação das cromátides irmãs"
],
c: 2
},

{
p: "(Vestibular FUVEST - adaptada) Na fase G2 da intérfase, a célula se prepara para a divisão celular. Esse período é caracterizado por:",
img: "",
op: [
"Reorganização da membrana plasmática",
"Verificação e reparo do DNA duplicado",
"Separação dos cromossomos",
"Produção de gametas"
],
c: 1
},

{
p: "(ENEM - adaptada) Durante a mitose, os cromossomos tornam-se visíveis e ocorre a formação do fuso mitótico. Esse evento caracteriza a fase:",
img: "",
op: [
"Metáfase",
"Anáfase",
"Prófase",
"Telófase"
],
c: 2
},

{
p: "(Mackenzie - adaptada) Na metáfase da mitose, os cromossomos organizam-se no plano equatorial da célula. Essa organização tem como principal função:",
img: "",
op: [
"Permitir a duplicação do DNA",
"Facilitar a divisão do citoplasma",
"Garantir a distribuição igual do material genético",
"Reduzir o número de cromossomos"
],
c: 2
},

{
p: "(ENEM - adaptada) A separação das cromátides-irmãs ocorre durante a anáfase. Esse processo é essencial porque:",
img: "",
op: [
"Reduz o número de cromossomos",
"Garante que cada célula filha receba cópias idênticas do DNA",
"Promove variabilidade genética",
"Impede a divisão celular"
],
c: 1
},

{
p: "(FUVEST - adaptada) Na meiose I, ocorre um processo importante para a variabilidade genética, conhecido como crossing over. Esse fenômeno acontece:",
img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Meiosis_Overview.svg",
op: [
"Na metáfase II",
"Na prófase I",
"Na anáfase II",
"Na telófase I"
],
c: 1
},

{
p: "(Mackenzie - adaptada) A principal diferença entre a meiose I e a meiose II está relacionada ao comportamento dos cromossomos. Na meiose I ocorre:",
img: "",
op: [
"Separação das cromátides irmãs",
"Duplicação do DNA",
"Separação dos cromossomos homólogos",
"Formação de células diploides"
],
c: 2
}

];

// iniciar
function iniciarJogo(){
    document.getElementById("inicioModal").classList.remove("ativo");
    pausado=false;
    requestAnimationFrame(loop);
}

// controle
document.addEventListener("keydown", e=>{
    let k=e.key.toLowerCase();
    if(pausado) return;

    if(k==="w"&&dy===0){dx=0;dy=-1;}
    if(k==="s"&&dy===0){dx=0;dy=1;}
    if(k==="a"&&dx===0){dx=-1;dy=0;}
    if(k==="d"&&dx===0){dx=1;dy=0;}
});

// loop
function loop(tempo){
    if(pausado) return;

    if(tempo - ultimoTempo > velocidade){
        atualizar();
        ultimoTempo = tempo;
    }

    desenhar();
    requestAnimationFrame(loop);
}

// atualizar
function atualizar(){
    let cabeça={x:snake[0].x+dx,y:snake[0].y+dy};

    if(cabeça.x<0||cabeça.y<0||cabeça.x>=25||cabeça.y>=25){
        perderVida();
        return;
    }

    if(snake.some(p=>p.x===cabeça.x&&p.y===cabeça.y)){
        pontos=Math.max(0,pontos-5);
        snake.pop();
        atualizarHUD();
        return;
    }

    snake.unshift(cabeça);

    if(cabeça.x===comida.x&&cabeça.y===comida.y){
        perguntar();
    }else{
        snake.pop();
    }
}

// desenhar
function desenhar(){
    ctx.fillStyle="rgba(8,20,34,0.8)";
    ctx.fillRect(0,0,500,500);

    if(abrindo){
        bocaAngulo+=0.03;
        if(bocaAngulo>0.5) abrindo=false;
    }else{
        bocaAngulo-=0.03;
        if(bocaAngulo<0.1) abrindo=true;
    }

    snake.forEach((p,i)=>{
        if(i===0){
            ctx.fillStyle="#00ffcc";
            ctx.beginPath();
            ctx.moveTo(p.x*bloco+10,p.y*bloco+10);
            ctx.arc(p.x*bloco+10,p.y*bloco+10,10,bocaAngulo,Math.PI*2-bocaAngulo);
            ctx.fill();
        }else{
            ctx.fillStyle="#00ffaa";
            ctx.beginPath();
            ctx.arc(p.x*bloco+10,p.y*bloco+10,8,0,Math.PI*2);
            ctx.fill();
        }
    });

    ctx.fillStyle="orange";
    ctx.beginPath();
    ctx.arc(comida.x*bloco+10,comida.y*bloco+10,6,0,Math.PI*2);
    ctx.fill();
}

// comida
function gerarComida(){
    return{
        x:Math.floor(Math.random()*21)+2,
        y:Math.floor(Math.random()*21)+2
    };
}

// pergunta
function perguntar(){
    pausado=true;

    perguntaAtual=perguntas[perguntaIndex%perguntas.length];

    document.getElementById("pergunta").innerText=perguntaAtual.p;

    let img=document.getElementById("imgPergunta");
    if(perguntaAtual.img){
        img.src=perguntaAtual.img;
        img.style.display="block";
    }else{
        img.style.display="none";
    }

    let op=document.getElementById("opcoes");
    op.innerHTML="";

    perguntaAtual.op.forEach((t,i)=>{
        let btn=document.createElement("div");
        btn.className="opcao";
        btn.innerText=t;
        btn.onclick=()=>verificar(i);
        op.appendChild(btn);
    });

    document.getElementById("modalPergunta").classList.add("ativo");
}

// feedback
function mostrarFeedback(msg){
    let f=document.getElementById("feedback");
    f.innerText=msg;
    f.classList.add("show");
    setTimeout(()=>f.classList.remove("show"),1500);
}

// resposta
function verificar(i){
    if(i===perguntaAtual.c){
        pontos+=10;
        snake.push({...snake[snake.length-1]});
        comida=gerarComida();
        perguntaIndex++;
        pausado=false;

        mostrarFeedback("✔ Acertou! +10");

        document.getElementById("modalPergunta").classList.remove("ativo");
        requestAnimationFrame(loop);
    }else{
        mostrarFeedback("❌ Errou!");

        if(snake.length>1){
            snake.pop();
        }else{
            perderVida();
        }
    }

    atualizarHUD();

    if(pontos>=80){
        mostrarResultado("🏆 Vitória!","Você dominou o conteúdo!");
    }
}

// vida
function perderVida(){
    vidas--;
    if(vidas<=0){
        mostrarResultado("💀 Game Over","Tente novamente!");
    }
}

// resultado
function mostrarResultado(titulo,texto){
    pausado=true;

    document.getElementById("tituloResultado").innerText=titulo;
    document.getElementById("textoResultado").innerText=texto;

    document.getElementById("modalResultado").classList.add("ativo");
}

// HUD
function atualizarHUD(){
    document.getElementById("score").innerText="Pontuação: "+pontos;
    document.getElementById("vidas").innerText="Vidas: "+"❤️".repeat(vidas);
}

atualizarHUD();