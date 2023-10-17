let contador = 3

function js_add_rows() {
    let input = parseInt(document.querySelector('#txtNumRows').value);
    const template = document.querySelector("#template");

    if (isNaN(input) || input < 1 || input > 10) {
        document.querySelector('#error').innerHTML = 'Por favor, insira um valor entre 1 e 10.';
        return;
    }

    for (let i = 0; i < input; i++) {
        document.querySelector('#sampleTable').innerHTML += `<tr><td>Linha${contador} celula1</td><td>Linha${contador} celula2</td></tr>`;
        contador++
    }

    document.querySelector('#error').innerHTML = '';
}

filterInt = function (value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value);
    return 's';
};
