function configurar() {
    document.getElementById("btnEnviarMensagem").onclick = enviarMensagem;
    document.getElementById("btnLimparMensagem").onclick = limparMensagem;

    document.getElementById("txtMensagem").onkeyup = function (event) {
        if (event.key == "Enter") {
            enviarMensagem();
        } else if (event.key == "ArrowLeft") {
            limparMensagem();
        }
    };
}
configurar();

function enviarMensagem() {
    var nome = document.getElementById("txtNome").value;
    var mensagem = document.getElementById("txtMensagem").value;

    if (nome == "") {
        alert("Digite seu nome.");
    } else {
        if (mensagem != "") {
            adicionarMensagemRecebida(nome, mensagem);
            limparMensagem();
        } else {
            alert("Por favor, escreva algo.");
        }
    }
}

function adicionarMensagemRecebida(nome, mensagem) {
    var listaMensagens = document.getElementById("ulMensagensRecebidas");

    /* 
    <li>
        Element 4
    </li>
    
    <li>
        <span>Jean Robert:</span>
        <span>Eae meu, beleza?</span>
    </li> 
    */

    var li = document.createElement("li");
    var spanNome = document.createElement("span");
    var spanMensagem = document.createElement("span");

    spanNome.appendChild(document.createTextNode(nome + " - "));
    spanNome.classList.add("msgNome");

    spanMensagem.appendChild(document.createTextNode(mensagem));
    spanMensagem.classList.add("msgTexto");

    li.appendChild(spanNome);
    li.appendChild(spanMensagem);

    listaMensagens.appendChild(li);
}

function limparMensagem() {
    document.getElementById("txtMensagem").value = "";
}