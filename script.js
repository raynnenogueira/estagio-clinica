// Aguarda o DOM carregar completamente antes de adicionar o evento
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-agendamento').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário

        alert('Agendamento enviado com sucesso!');

        this.reset(); // Limpa os campos do formulário
    });
});
