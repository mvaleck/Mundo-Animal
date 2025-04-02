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
    let felinos = document.getElementById('felinos')
    let secaoFelinos = document.getElementById('secaoFelinos')

    felinos.addEventListener('click', function () {
        secaoFelinos.scrollIntoView({behavior: "smooth"})
        
    })

//secao caes
    let caes = document.getElementById('caes')
    let secaoCaes = document.getElementById('secaoCaes')
    caes.addEventListener('click', function () {
        secaoCaes.scrollIntoView({behavior: "smooth"})
        
    })

//SEÇÃO MARINHOS
    let marinhos = document.getElementById('marinhos')
    let secaoMarinhos = document.getElementById('secaoMarinhos')
    marinhos.addEventListener('click', function () {
        secaoMarinhos.scrollIntoView({behavior: "smooth"})
        
    })

//seção gm
    let gm = document.getElementById('gm')
    let secaoGm = document.getElementById('secaoGm')
    gm.addEventListener('click', function () {
        secaoGm.scrollIntoView({behavior: "smooth"})
        
    })

//SEÇÃO Outros
    let outros = document.getElementById('outros')
    let secaoOutros = document.getElementById('secaoOutros')
    outros.addEventListener('click', function () {
        secaoOutros.scrollIntoView({behavior: "smooth"})
        
    })


});

document.addEventListener('DOMContentLoaded', function () {

//SEÇÃO RAPINA
let rapina = document.getElementById('rapina')
let secaoRapina = document.getElementById('secaoRapina')
rapina.addEventListener('click', function () {
    secaoRapina.scrollIntoView({behavior:"smooth"})
})

//SEÇÃO Aquáticas
let aquaticas = document.getElementById('aquaticas')
let secaoAquaticas = document.getElementById('secaoAquaticas')
aquaticas.addEventListener('click', function () {
    secaoAquaticas.scrollIntoView({behavior:"smooth"})
})

//SEÇÃO CANORAS
let canoras = document.getElementById('canoras')
let secaoCanoras = document.getElementById('secaoCanoras')
canoras.addEventListener('click', function () {
    secaoCanoras.scrollIntoView({behavior:"smooth"})
})

//SEÇÃO Exóticas
let exoticas = document.getElementById('exoticas')
let secaoExoticas = document.getElementById('secaoExoticas')
exoticas.addEventListener('click', function () {
    secaoExoticas.scrollIntoView({behavior:"smooth"})
})

//SEÇÃO CORREDORAS
let corredoras = document.getElementById('corredoras')
let secaoCorredoras = document.getElementById('secaoCorredoras')
corredoras.addEventListener('click', function () {
    secaoCorredoras.scrollIntoView({behavior:"smooth"})
})



    
});








//SETA BOTÃO: Mostra o botão quando o usuário rola para baixo
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