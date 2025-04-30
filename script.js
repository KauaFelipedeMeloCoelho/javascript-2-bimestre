function mostrarTroco() {
    // Pega os valores digitados
    var valorPago = document.getElementById("valorPago").value;
    var precoProduto = document.getElementById("precoProduto").value;

    // Converte os valores para número
    var pago = Number(valorPago);
    var preco = Number(precoProduto);

    // Calcula o troco
    var troco = pago - preco;

    // Mostra a mensagem
    var mensagem = document.getElementById("mensagem");

    if (troco < 0) {
        mensagem.innerText = "Você ainda deve R$ " + Math.abs(troco);
    } else {
        mensagem.innerText = "O troco é R$ " + troco;
    }
}