
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-music');

    // Inicia la música cuando el usuario toca o hace clic en la pantalla
    document.body.addEventListener('click', function () {
        if (audio.paused) {
            audio.play().catch(error => console.log('Reproducción bloqueada:', error));
        }
    });
});

