


let musicaAtual = 1;

function iniciarMusica() {
    tocarMusica("musica1");
}

function tocarMusica(id) {
    let musica = document.getElementById(id);

    musica.play();

    musica.onended = function () {
        musicaAtual++;

        if (musicaAtual <= 3) {
            tocarMusica("musica" + musicaAtual);
        }
    };
}

function pausarMusica() {
    document.getElementById("musica" + musicaAtual).pause();
}