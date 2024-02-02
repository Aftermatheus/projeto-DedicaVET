//FILTRAR SINAIS CLÍNICOS E OUTRAS ALTERAÇÕES POR NOMES
//REMOVER ACENTOS QUE CAUSAM ERROS NA FILTRAGEM
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
