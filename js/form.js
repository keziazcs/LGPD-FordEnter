class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

let contatoData = null;

function Post(form) {
    contatoData = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value
    );

    Enviar(contatoData);
}

function Enviar(data) {
    if (data && data.nome !== "") {
        alert("Obrigado sr(a) " + data.nome + " os seus dados foram encaminhados com sucesso");
    }
}

// Passo 4: o botão "Enviar" só é habilitado quando o checkbox
// de aceite dos Termos e Condições estiver marcado.
document.addEventListener("DOMContentLoaded", function () {
    const checkboxTermos = document.getElementById("consentimento-termos");
    const botaoEnviar = document.getElementById("btn-enviar");

    if (checkboxTermos && botaoEnviar) {
        checkboxTermos.addEventListener("change", function () {
            botaoEnviar.disabled = !checkboxTermos.checked;
        });
    }
});
