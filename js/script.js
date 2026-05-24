// ==========================================
// 1. FUNCIONALIDADE EXTRA: SAUDAÇÃO DINÂMICA
// ==========================================
// Executa automaticamente assim que a página é carregada
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
        
        // Altera o texto do Banner dinamicamente
        saudacaoEl.innerText = saudacaoText + "Soluções Tecnológicas Inteligentes";
    }
}

// ==========================================
// 2. FORMULÁRIO DE INSCRIÇÃO: NEWSLETTER (Home)
// ==========================================
function assinarNewsletter() {
    const emailInput = document.getElementById('emailNewsletter');
    const email = emailInput.value.trim();

    // Validação lógica simples usando o indexOf
    if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Por favor, insira um e-mail válido para se inscrever na nossa newsletter.");
    } else {
        alert("Inscrição realizada com sucesso! Bem-vindo à newsletter da Arcanjo.");
        emailInput.value = ""; // Limpa o campo após o sucesso
    }
}

// ==========================================
// 3. FORMULÁRIO DE CADASTRO/CONTATO (Contato)
// ==========================================
function validarFormulario(event) {
    // Evita o recarregamento automático da página
    event.preventDefault();

    // Capturando os elementos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const servico = document.getElementById('servico').value;
    const mensagem = document.getElementById('mensagem').value.trim();
    const feedback = document.getElementById('feedback-sistema');

    // Resetando estados do alerta
    feedback.style.display = "none";
    feedback.className = "mensagem-alerta";

    // Validação 1: Todos os campos preenchidos
    if (nome === "" || email === "" || servico === "" || mensagem === "") {
        feedback.innerText = "Erro: Todos os campos do formulário são obrigatórios!";
        feedback.classList.add("erro");
        feedback.style.display = "block";
        return false;
    }

    // Validação 2: Verificar se digitou Nome e Sobrenome (procura espaço)
    if (!nome.includes(" ")) {
        feedback.innerText = "Erro: Por favor, digite seu nome completo (Nome e Sobrenome).";
        feedback.classList.add("erro");
        feedback.style.display = "block";
        return false;
    }

    // Validação 3: Validação estrutural do E-mail corporativo
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        feedback.innerText = "Erro: Insira um endereço de e-mail válido.";
        feedback.classList.add("erro");
        feedback.style.display = "block";
        return false;
    }

    // Se passar nas validações: Exibe mensagem de sucesso do sistema real
    feedback.innerText = "Sucesso! Sua solicitação de suporte foi registrada. Entraremos em contato em breve.";
    feedback.classList.add("sucesso");
    feedback.style.display = "block";

    // Reseta o formulário
    document.getElementById('formContato').reset();
    return true;
}