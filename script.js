// Função para lidar com o envio do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Obter o valor do campo de e-mail
    const email = document.getElementById('email').value;

    // Exibir uma mensagem de sucesso
    const mensagem = document.getElementById('mensagem-sucesso');
    mensagem.style.display = 'block';

    // Limpar o campo de e-mail
    document.getElementById('email').value = '';
});
