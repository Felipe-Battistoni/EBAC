function validarFormulario() {
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;
    var mensagem = document.getElementById('mensagem');
    if (Number(campoB) > Number(campoA)) {
        mensagem.textContent = 'Formulário válido.';
    } else {
        mensagem.textContent = 'Formulário inválido. O número B deve ser maior que o número A.';
    }
}