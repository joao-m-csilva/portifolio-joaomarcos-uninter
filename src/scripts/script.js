// Captura o formulário e o local onde será exibida a resposta
const formulario = document.getElementById("form-contato");
const respostaFormulario = document.getElementById("resposta-formulario");

// Impede o envio padrão e valida os campos preenchidos
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        respostaFormulario.textContent = "Preencha todos os campos antes de enviar.";
        return;
    }

    // Validação simples para verificar se o e-mail possui formato básico
    if (!email.includes("@") || !email.includes(".")) {
        respostaFormulario.textContent = "Digite um e-mail válido.";
        return;
    }

    respostaFormulario.textContent = "Mensagem enviada com sucesso!";
    formulario.reset();
});
