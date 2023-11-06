function consultarDominio() {
    var domain = document.getElementById("domainInput").value;

    fetch(`https://brasilapi.com.br/api/registrobr/v1/${domain}`)
        .then(response => response.json())
        .then(data => exibirResultado(data))
        .catch(error => console.error('Erro:', error));
}

function exibirResultado(data) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (data.status_code === 0) {
        var disponibilidade = document.createElement("p");
        disponibilidade.textContent = "O domínio está disponível para registro.";
        resultDiv.appendChild(disponibilidade);

        var suggestions = document.createElement("p");
        suggestions.textContent = "Sugestões de domínio: " + data.suggestions.join(", ");
        resultDiv.appendChild(suggestions);

        var imgOcupado = document.createElement("img");
        imgOcupado.src = "https://jornalfatos.com.br/wp-content/uploads/2016/10/OCUPADO-1200x900.jpg";
        imgOcupado.style.width = "90px";
        resultDiv.appendChild(imgOcupado);
    } else if (data.status_code === 2) {
        var disponibilidade = document.createElement("p");
        disponibilidade.textContent = "O domínio está registrado.";
        resultDiv.appendChild(disponibilidade);

        var hosts = document.createElement("p");
        hosts.textContent = "CDN's: " + data.hosts.join(", ");
        resultDiv.appendChild(hosts);

        var imgRegistrado = document.createElement("img");
        imgRegistrado.src = "https://jornalfatos.com.br/wp-content/uploads/2016/10/OCUPADO-1200x900.jpg";
        imgRegistrado.style.width = "90px";
        resultDiv.appendChild(imgRegistrado);
    } else if (data.status_code === 3) {
        var motivoIndisponibilidade = document.createElement("p");
        motivoIndisponibilidade.textContent = "Motivos de indisponibilidade: " + data.reasons.join(", ");
        resultDiv.appendChild(motivoIndisponibilidade);

        var imgIndisponivel = document.createElement("img");
        imgIndisponivel.src = "https://jornalfatos.com.br/wp-content/uploads/2016/10/OCUPADO-1200x900.jpg";
        imgIndisponivel.style.width = "90px";
        resultDiv.appendChild(imgIndisponivel);
    } else {
        var erro = document.createElement("p");
        erro.textContent = "Ocorreu um erro ao consultar o domínio.";
        resultDiv.appendChild(erro);
    }
}

document.getElementById("domainInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        consultarDominio();
    }
});
