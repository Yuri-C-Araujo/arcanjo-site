window.onload = function() {
    const saudacaoEl = document.getElementById('saudacao-banner');
    if (saudacaoEl) {
        const hora = new Date().getHours();
        let saudacaoText = "";
        
        if (hora >= 5 && hora < 12) {
            saudacaoText = "Bom dia! ";
        } else if (hora >= 12 && hora < 18) {
            saudacaoText = "Boa tarde! ";
        } else {
            saudacaoText = "Boa noite! ";
        }
        
        saudacaoEl.innerText = saudacaoText + "Soluções Tecnológicas Inteligentes";
    }
}

function assinarNewsletter() {
    const emailInput = document.getElementById('emailNewsletter');
    const email = emailInput.value.trim();

    if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Por favor, insira um e-mail válido para se inscrever na nossa newsletter.");
    } else {
        alert("Inscrição realizada com sucesso! Bem-vindo à newsletter da Arcanjo.");
        emailInput.value = ""; // Limpa o campo após o sucesso
    }
}

function validarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const servico = document.getElementById('servico').value;
    const mensagem = document.getElementById('mensagem').value.trim();
    const feedback = document.getElementById('feedback-sistema');

    feedback.style.display = "none";
    feedback.className = "mensagem-alerta";

    if (nome === "" || email === "" || servico === "" || mensagem === "") {
        feedback.innerText = "Erro: Todos os campos do formulário são obrigatórios!";
        feedback.classList.add("erro");
        feedback.style.display = "block";
        return false;
    }

    if (!nome.includes(" ")) {
        feedback.innerText = "Erro: Por favor, digite seu nome completo (Nome e Sobrenome).";
        feedback.classList.add("erro");
        feedback.style.display = "block";
        return false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        feedback.innerText = "Erro: Insira um endereço de e-mail válido.";
        feedback.classList.add("erro");
        feedback.style.display = "block";
        return false;
    }

    feedback.innerText = "Sucesso! Sua solicitação de suporte foi registrada. Entraremos em contato em breve.";
    feedback.classList.add("sucesso");
    feedback.style.display = "block";

    document.getElementById('formContato').reset();
    return true;
}