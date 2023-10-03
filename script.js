function criptografarCesar(texto, chave) {
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (char.match(/[a-z]/i)) {
            const codigo = texto.charCodeAt(i);

            if (codigo >= 65 && codigo <= 90) {
                char = String.fromCharCode(((codigo - 65 + chave) % 26) + 65);
            } else if (codigo >= 97 && codigo <= 122) {
                char = String.fromCharCode(((codigo - 97 + chave) % 26) + 97);
            }
        }

        resultado += char;
    }

    return resultado;
}

function descriptografarCesar(texto, chave) {
    return criptografarCesar(texto, (26 - chave) % 26);
}

function criptografar() {
    const textoOriginal = document.getElementById("textoOriginal").value;
    const chave = parseInt(document.getElementById("chave").value);
    const resultado = criptografarCesar(textoOriginal, chave);
    document.getElementById("resultado").value = resultado;
}

function descriptografar() {
    const textoCriptografado = document.getElementById("textoOriginal").value;
    const chave = parseInt(document.getElementById("chave").value);
    const resultado = descriptografarCesar(textoCriptografado, chave);
    document.getElementById("resultado").value = resultado;
}
