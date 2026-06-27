let inscritos = 150;

/* =========================
   FUNCIONALIDADE 3 - CONTADOR
========================= */
function participar() {
    inscritos++;

    const contador = document.getElementById("contador");

    if (contador) {
        contador.innerText = inscritos;
    }
}

/* =========================
   FUNCIONALIDADE 1 - VER MAIS / VER MENOS
========================= */
function alternarInfo(id, botao) {
    const info = document.getElementById("info-extra-" + id);

    if (!info) return;

    if (info.style.display === "block") {
        info.style.display = "none";
        botao.innerText = "Ver mais";
    } else {
        info.style.display = "block";
        botao.innerText = "Ver menos";
    }
}

/* =========================
   FUNCIONALIDADE 4 - TEMA
========================= */
function alternarTema() {
    document.body.classList.toggle("tema-escuro");
}

/* =========================
   FUNCIONALIDADE 2 - FORMULÁRIO
========================= */
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");

    if (!formulario) return;

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const cidade = document.getElementById("cidade")?.value.trim();
        const mensagem = document.getElementById("mensagem");

        if (!nome || !email || !cidade) {
            mensagem.style.display = "block";
            mensagem.style.color = "red";
            mensagem.innerText = "Preencha todos os campos obrigatórios!";
            return;
        }

        mensagem.style.display = "block";
        mensagem.style.color = "green";
        mensagem.innerText = "Cadastro realizado com sucesso!";

        formulario.reset();

        // 🔥 aumenta contador ao cadastrar também
        inscritos++;

        const contador = document.getElementById("contador");
        if (contador) {
            contador.innerText = inscritos;
        }
    });
});