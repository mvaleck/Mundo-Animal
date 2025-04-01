document.addEventListener('DOMContentLoaded', function () {
    let home = document.getElementById('home');
    home.addEventListener('click', goHome);
    home.addEventListener('mouseenter', mouseenterHome);
    home.addEventListener('mouseleave', mouseleaveHome);

    function goHome() {
        window.location.href = 'index.html'; 
    }

    function mouseenterHome() {
        home.style.color = 'white';
        home.style.backgroundColor = 'rgb(11, 63, 9)';
        home.style.cursor = 'pointer';
        home.style.transition = '0.3s';
    }

    function mouseleaveHome() {
        home.style.backgroundColor = '';
        home.style.color = 'black';
    }

// Seleciona todos os botões com a classe 'botao'
    let botoes = document.querySelectorAll('.botao');

    botoes.forEach(botao => {
        botao.addEventListener('mouseenter', enterBotao);
        botao.addEventListener('mouseleave', leaveBotao);
    });

    function enterBotao(event) {
        let botao = event.target;
        botao.style.color = 'white';
        botao.style.backgroundColor = 'rgb(11, 63, 9)';
        botao.style.cursor = 'pointer';
        botao.style.transition = '0.3s';
    }

    function leaveBotao(event) {
        let botao = event.target;
        botao.style.color = 'black';
        botao.style.backgroundColor = '';
    }

//function pra quando clicar no botao, rolar pra section correta
//seção felinos
    const felinos = document.getElementById('felinos')
    const secaoFelinos = document.getElementById('secaoFelinos')

    felinos.addEventListener('click', function () {
        secaoFelinos.scrollIntoView({behavior: "smooth"})
        
    })

//secao caes
    const caes = document.getElementById('caes')
    const secaoCaes = document.getElementById('secaoCaes')
    caes.addEventListener('click', function () {
        secaoCaes.scrollIntoView({behavior: "smooth"})
        
    })

//SEÇÃO MARINHOS
    const marinhos = document.getElementById('marinhos')
    const secaoMarinhos = document.getElementById('secaoMarinhos')
    marinhos.addEventListener('click', function () {
        secaoMarinhos.scrollIntoView({behavior: "smooth"})
        
    })

//seção gm
    const gm = document.getElementById('gm')
    const secaoGm = document.getElementById('secaoGm')
    gm.addEventListener('click', function () {
        secaoGm.scrollIntoView({behavior: "smooth"})
        
    })

//SEÇÃO Outros
    const outros = document.getElementById('outros')
    const secaoOutros = document.getElementById('secaoOutros')
    outros.addEventListener('click', function () {
        secaoOutros.scrollIntoView({behavior: "smooth"})
        
    })

//seta inteligente

// Mostra o botão quando o usuário rola para baixo
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


});
