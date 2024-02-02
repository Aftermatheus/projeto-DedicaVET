let selectedSinais = []; // Lista para armazenar os sinais clínicos selecionados

function search() {
    let input = removeAccents(document.getElementById('searchbar').value.toLowerCase());
    let x = document.getElementsByClassName('sinais');

    if (input === '') {
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    } else {
        for (let i = 0; i < x.length; i++) {
            let textWithoutAccents = removeAccents(x[i].innerHTML.toLowerCase());
            if (!textWithoutAccents.includes(input)) {
                x[i].style.display = "none";
            } else {
                x[i].style.display = "list-item";
            }
        }
    }
}

function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para lidar com a seleção de sinais clínicos
function selectSinal(sinal) {
    let index = selectedSinais.indexOf(sinal);
    if (index === -1) {
        selectedSinais.push(sinal); // Adiciona se não estiver presente
    } else {
        selectedSinais.splice(index, 1); // Remove se estiver presente
    }

    // Limpar barra de pesquisa
    document.getElementById('searchbar').value = '';

    // Ocultar área de resultados
    document.getElementById('lista-de-resultados').style.display = 'none';

    // Resetar lista de resultados
    let x = document.getElementsByClassName('sinais');
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "list-item";
    }

    displaySelectedSinais();
}

// Função para exibir os sinais clínicos selecionados em caixas com botão de exclusão
function displaySelectedSinais() {
    let selectedSinaisContainer = document.getElementById('selected-sinais');
    selectedSinaisContainer.innerHTML = ''; // Limpa o conteúdo atual

    selectedSinais.forEach(function (sinal) {
        let sinalBox = document.createElement('div');
        sinalBox.classList.add('selected-sinal-box');

        let sinalText = document.createElement('span');
        sinalText.textContent = sinal;
        sinalBox.appendChild(sinalText);

        let closeButton = document.createElement('button');
        closeButton.textContent = 'x';
        closeButton.classList.add('close-button');
        closeButton.addEventListener('click', function () {
            removeSelectedSinal(sinal);
        });
        sinalBox.appendChild(closeButton);

        selectedSinaisContainer.appendChild(sinalBox);
    });
}

// Função para remover um sinal clínico selecionado
function removeSelectedSinal(sinal) {
    let index = selectedSinais.indexOf(sinal);
    if (index !== -1) {
        selectedSinais.splice(index, 1);
        displaySelectedSinais(); // Atualiza a exibição dos sinais selecionados
    }
}

