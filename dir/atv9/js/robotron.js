const robotrons = document.querySelector('#slide');
const btnVoltar = document.querySelector("#voltar");
const btnAvancar = document.querySelector("#avancar");

let voltar = voltarTrocaDeCor;
let avancar = avancarTrocaDeCor;

function mudarDemonstracaoDoRobotron(tipo) {
    if (tipo === 'TrocaDeCor') {
        voltar = voltarTrocaDeCor;
        avancar = avancarTrocaDeCor;
    }
    else if (tipo === 'Slide') {
        voltar = voltarSlide;
        avancar = avancarSlide;
    }
    else if (tipo === 'Substituir') {
        voltar = voltarSubstituicao;
        avancar = avancarSubstituicao;
    }
}

btnVoltar.addEventListener('click', async () => {
    btnVoltar.setAttribute('disabled', true);
    voltar();
    await delay(300);
    btnVoltar.removeAttribute('disabled');
});
btnAvancar.addEventListener('click', async () => {
    btnAvancar.setAttribute('disabled', true);
    avancar();
    await delay(300);
    btnAvancar.removeAttribute('disabled');
});

function voltarTrocaDeCor() {
    const images = robotrons.querySelectorAll('img');
    const img01 = images[images.length-1];
    const img02 = images[0];
    robotrons.insertBefore(img01, img02);
}
function avancarTrocaDeCor() {
    const images = robotrons.querySelectorAll('img');
    const img01 = images[0];
    robotrons.appendChild(img01);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

    images[1].style.transition = 'none';
    images[1].style.translate = '0';
    robotrons.appendChild(images[0]);
