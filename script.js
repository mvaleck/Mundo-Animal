//botao saiba mais 
let botaoSM = document.querySelectorAll('.botaoSM');

botaoSM.forEach(function(botao) { //for each pra percorrer todos os botoes
    if ("ontouchstart" in window) {
        // Para dispositivos móveis, usar touchstart e touchend
        botao.addEventListener('touchstart', entra);
        botao.addEventListener('touchend', sai);
    } else {
        // Para desktop, manter mouseenter e mouseout
        botao.addEventListener('mouseenter', entra);
        botao.addEventListener('mouseout', sai);
    }
});

function entra(event) {
    event.target.style.backgroundColor = 'grey';  // Altera a cor de fundo do botão que recebeu o evento
}

function sai(event) {
    event.target.style.backgroundColor = '';  // Volta pra cor normal
   
}

//GO TO section animais
const animais = document.getElementById('animais')
const secaoAnimais = document.getElementById('categoria')

animais.addEventListener('click', function () {
    secaoAnimais.scrollIntoView({behavior: 'smooth'})
    
})

/* ESTILIZAÇÃO SECTION ANIMAIS
forEach para garantir que cada elemento receba o evento corretamente,
usamos cixa diretamente, sem precisar do event.target
 */
let textElements = document.querySelectorAll('.text');

textElements.forEach((caixa) => {
    if ("ontouchstart" in window) {
        // Para dispositivos móveis
        caixa.addEventListener('touchstart', () => {
            caixa.style.backgroundColor = 'rgb(160, 202, 156)';
            caixa.style.transform = 'scale(1.1)';
            caixa.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
        });

        caixa.addEventListener('touchend', () => {
            caixa.style.backgroundColor = '';
            caixa.style.transform = 'scale(1)';
        });

        // Para remover o efeito ao tocar fora da caixa
        document.addEventListener('touchstart', (event) => {
            if (!caixa.contains(event.target)) {
                caixa.style.backgroundColor = '';
                caixa.style.transform = 'scale(1)';
            }
        });
    } else {
        // Para desktops
        caixa.addEventListener('mouseenter', () => {
            caixa.style.backgroundColor = 'rgb(160, 202, 156)';
            caixa.style.transform = 'scale(1.1)';
            caixa.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
        });

        caixa.addEventListener('mouseleave', () => {
            caixa.style.backgroundColor = '';
            caixa.style.transform = 'scale(1)';
        });
    }
});

//GO TO Mamiferos
const pageM = document.getElementById('pageM')
pageM.addEventListener('click' , clicou)
function clicou() {
    window.location.href ='mamiferos.html'
}

//GO TO AVES
const pageA = document.getElementById('pageA')
pageA.addEventListener('click' , clicouA)
function clicouA() {
    window.location.href ='aves.html'
}

//GO TO REPTEIS
const pageR = document.getElementById('pageR')
pageR.addEventListener('click' , clicouR)
function clicouR() {
    window.location.href ='repteis.html'
}

//GO TO INSETOS
const pageI = document.getElementById('pageI')
pageI.addEventListener('click' , clicouI)
function clicouI() {
    window.location.href = 'insetos.html'
    
}

//GO to como ajudar
const comoAjudar = document.getElementById('comoAjudar')
const secaoComoajudar = document.querySelector('.comoAjudar')

comoAjudar.addEventListener('click', function () {
    secaoComoajudar.scrollIntoView({behavior: 'smooth'})
})

//SETA BOTÃO
let scrollBtn = document.querySelector(".scrollTopBtn");
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("show"); // Aparece suavemente
    } else {
        scrollBtn.classList.remove("show"); // Some suavemente
    }
});

scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});