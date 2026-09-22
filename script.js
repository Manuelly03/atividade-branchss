console.log("Projeto Iniciado!");
let numero = 0;

function aumentar() {
    numero++;
    document.getElementById("contador").textContent = numero;
}

function diminuir() {
    numero--;
    document.getElementById("contador").textContent = numero;
}

function alternarTema() {
    document.body.classList.toggle("dark");
}

function somar() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    const resultado = numero1 + numero2;

    document.getElementById("resultado").textContent = resultado;
}