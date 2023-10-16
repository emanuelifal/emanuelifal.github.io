const form = document.querySelector("#pre-matricula");
const dddInput = document.querySelector("#ddd");
const emailInput = document.querySelector("#email");
const checkboxes = document.querySelectorAll('input[name="atividade-extracurricular"]');

form.addEventListener("submit", submitMessage);

const DDD = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, // São Paulo
    21, 22, 24, // Rio de Janeiro
    27, 28, // Espírito Santo
    31, 32, 33, 34, 35, 37, 38, // Minas Gerais
    41, 42, 43, 44, 45, 46, // Paraná
    47, 48, 49, // Santa Catarina
    51, 53, 54, 55, // Rio Grande do Sul
    61, // Distrito Federal
    62, 64, // Goiás
    63, // Tocantins
    65, 66, // Mato Grosso
    67, // Mato Grosso do Sul
    68, // Acre
    69, // Rondônia
    71, 73, 74, 75, 77, // Bahia
    79, // Sergipe
    81, 87, // Pernambuco
    82, // Alagoas
    83, // Paraíba
    84, // Rio Grande do Norte
    85, 88, // Ceará
    86, 89, // Piauí
    91, 93, 94, // Pará
    92, 97, // Amazonas
    95, // Roraima
    96, // Amapá
    98, 99 // Maranhão
];

function submitMessage(event) {
    if (!verificarForm()) {
        event.preventDefault();
        return;
    }
    alert('Formulário entregue!');
}

function verificarForm() {
    if (!verificarDDD()) {
        alert("DDD incorreto!");
        return false;
    }
    if(!verificarEmail()) {
        alert("Verifique se está correto!");
        return false;
    }
    if (!verificarCheckBoxes()) {
        alert("Só 3 atividades são permitidas");
        return false;
    }
    return true;
}

function verificarDDD() {
    return DDD.includes(Number(dddInput.value));
}

function verificarEmail() {
    return emailInput.value.includes(".");
}

function verificarCheckBoxes() {
    const ativos = [...checkboxes].filter((input) => input.checked);
    return ativos.length <= 3;
}
