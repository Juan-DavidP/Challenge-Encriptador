/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptar() {
    let textoIngresado = document.getElementById('input-encriptar').value;
    let textoCifrado = "";
    let textoMinusculas = textoIngresado.toLowerCase();
    if (textoIngresado === textoMinusculas) {
        for (char of textoIngresado) {
            if (char == "e") {
                char = "enter"
            }
            if (char == "i") {
                char = "imes"
            }
            if (char == "a") {
                char = "ai"
            }
            if (char == "o") {
                char = "ober"
            }
            if (char == "u") {
                char = "ufat"
            }
            textoCifrado = textoCifrado + char;
            document.querySelector('#input-encriptado').value = textoCifrado;
        }
    } else {
        alert("Se ingreso una mayúscula o un acento intentelo de nuevo");

    }
    document.querySelector('#input-encriptar').value = "";
    document.getElementById('input-encriptado').style.backgroundImage = "none";
    document.getElementById('mensajes').style.display = "none";
    document.getElementById('div-boton-copiar').style.display = "block";
}
// function desencriptar() {
//     let textoIngresado = document.getElementById('input-encriptar').value;
//     let textoDescifrado = "";
//     for (char of textoIngresado) {
//         if (char == "enter") {
//             char = "e"
//         }
//         if (char == "imes") {
//             char = "i"
//         }
//         if (char == "ai") {
//             char = "a"
//         }
//         if (char == "ober") {
//             char = "o"
//         }
//         if (char == "ufat") {
//             char = "u"
//         }
//     }
// }

function desencriptar() {
    let texto = document.getElementById('input-encriptar').value;
    texto = texto.toLowerCase();
    let textoEncriptado = texto.replace(/enter/mg, 'e');
    textoEncriptado = textoEncriptado.replace(/imes/mg, 'i');
    textoEncriptado = textoEncriptado.replace(/ai/mg, 'a');
    textoEncriptado = textoEncriptado.replace(/ober/mg, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/mg, 'u');
    document.querySelector('#input-encriptado').value = textoEncriptado;
    document.getElementById('input-encriptar').value = "";
}

function copiar() {
    let textoCopiar = document.getElementById('input-encriptado');
    textoCopiar.select();
    textoCopiar.setSelectionRange(0, 9999999999);
    navigator.clipboard.writeText(textoCopiar.value);
    alert("Se ha copiado el texto");
}

