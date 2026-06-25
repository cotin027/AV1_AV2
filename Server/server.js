let inscritos = 150;

function participar() {

inscritos++;

document.getElementById("contador").innerText =
inscritos;

}

function mostrar(botao){

let texto =
botao.nextElementSibling;

if(texto.style.display === "block"){
texto.style.display = "none";
}else{
texto.style.display = "block";
}

}

const formulario =
document.getElementById("formulario");

if(formulario){

formulario.addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("mensagem").innerHTML =
"Cadastro realizado com sucesso!";

});

}