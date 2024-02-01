// Objetivo 1 - quando o usuário clicar no botão de seleçao de funcionalidades deve abrir uma caixa com os botões de seleção de função

// Passo 1 - pegar o botão de seleção de funcionalidades no JS para verificar quando o usuário clicar nele
const botaoCaes = document.querySelector(".btn-plataforma-caes");

// Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado
const elementoPlataformasCaes = document.querySelector(".btn-plataforma-caes .plataformas-caes");

// Passo 3 -  pegar o clique do usuário no JS
botaoCaes.addEventListener("click", () => {
    // Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

    const botaoEstaAberto = elementoPlataformasCaes.classList.contains("ativo")

    // Passo 1 - verificar se o botão já está aberto, se sim, devemos remover a classe ativo para que ele esconda o conteúdo novamente
    if (botaoEstaAberto) {
        elementoPlataformasCaes.classList.remove("ativo");
    } else {
        // Passo  4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão para que o conteúdo apareça
        elementoPlataformasCaes.classList.add("ativo")
    }

});

const botaoGatos = document.querySelector(".btn-plataforma-gatos");

const elementoPlataformasGatos = document.querySelector(".btn-plataforma-gatos .plataformas-gatos");

botaoGatos.addEventListener("click", () => {
    
    const botaoEstaAbertoG = elementoPlataformasGatos.classList.contains("ativo")
    
    if (botaoEstaAbertoG) {
        elementoPlataformasGatos.classList.remove("ativo");
    } else {
        elementoPlataformasGatos.classList.add("ativo")
    }

});



