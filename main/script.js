//botao saiba mais 
let botaoSM = document.querySelectorAll('.botaoSM');

botaoSM.forEach(function(botao) { //for each pra percorrer todos os botoes
    botao.addEventListener('mouseenter', entra);  // Aplica o evento de mouseenter em cada botão
    botao.addEventListener('mouseout', sai);  // Aplica o evento de mouseout em cada botão

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
    caixa.addEventListener('mouseenter', () => {
        caixa.style.backgroundColor = 'rgb(160, 202, 156)';
        caixa.style.transform = 'scale(1.1)';
        caixa.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
    });

    caixa.addEventListener('mouseleave', () => {
        caixa.style.backgroundColor = ''
        caixa.style.transform = 'scale(1)';
    });
});

//GO TO Mamiferos
const pageM = document.getElementById('pageM')
pageM.addEventListener('click' , clicou)
function clicou() {
    window.location.href ='mamiferos.html'
}
