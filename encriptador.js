/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptar() {
    let textoIngresado = document.getElementById('texto-ingresado').value;
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
            document.querySelector('#texto-final').value = textoCifrado;
        }
    } else {
        alert("Se ingreso una mayúscula o un acento intentelo de nuevo");

    }
    document.querySelector('#texto-ingresado').value = "";
    document.getElementById('texto-final').style.backgroundImage = "none";
    document.getElementById('textos').style.display = "none";
    document.getElementById('boton-copiar').style.display = "block";
}
// function desencriptar() {
//     let textoIngresado = document.getElementById('texto-ingresado').value;
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
    let texto = document.getElementById('texto-ingresado').value;
    texto = texto.toLowerCase();
    let textoEncriptado = texto.replace(/enter/mg, 'e');
    textoEncriptado = textoEncriptado.replace(/imes/mg, 'i');
    textoEncriptado = textoEncriptado.replace(/ai/mg, 'a');
    textoEncriptado = textoEncriptado.replace(/ober/mg, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/mg, 'u');
    document.querySelector('#texto-final').value = textoEncriptado;
    document.getElementById('texto-ingresado').value = "";
}


