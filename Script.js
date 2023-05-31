const textarea = document.querySelector(".digitexto");
const mensagem = document.querySelector(".textonenhumaencontrada");

//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = Encriptar(textarea.value);
    mensagem.value = textoEncriptado;
    textarea.value = " ";
}

function btnDecodificar() {
    const textoDecodificado = Decodificar(textarea.value);
    mensagem.value = textoDecodificado;
    textarea.value = " ";
}

function btnCopiar() {
    const mensagemCopiada = document.querySelector(".textonenhumaencontrada");
    mensagemCopiada.select();
    document.execCommand('copy');
    mensagem.value = " ";
}

function Encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringEncriptada.includes(matrizCodigo[i][0])) {

            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function Decodificar(stringDecodificar) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecodificar = stringDecodificar.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringDecodificar.includes(matrizCodigo[i][1])) {

            stringDecodificar = stringDecodificar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDecodificar;
}
