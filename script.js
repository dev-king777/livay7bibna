// On sélectionne les éléments de l'intro
const video = document.getElementById('background-video');
const poster = document.getElementById('static-poster');
const overlay = document.getElementById('overlay');
const buttonContainer = document.getElementById('button-container');
const enterButton = document.getElementById('enter-button');
const fadeScreen = document.getElementById('fade-to-black-screen');

// Action au clic sur "ENTER"
enterButton.addEventListener('click', () => {
    enterButton.disabled = true;
    buttonContainer.classList.add('fade-out');
    overlay.classList.add('fade-out');

    setTimeout(() => {
        poster.classList.add('fade-out');
        video.play();
    }, 500);
});

// Action à la fin de la vidéo (LA VERSION CORRIGÉE ET FINALE)
video.addEventListener('ended', () => {
    console.log("Vidéo terminé. Redirection vers cadeau.html");

    // On active l'écran noir avec une transition douce
    fadeScreen.style.transition = 'opacity 1.5s ease-in';
    fadeScreen.style.opacity = '1';

    // Après la transition, ON REDIRIGE vers la page du cadeau
    setTimeout(() => {
        window.location.href = 'cadeau.html';
    }, 1500); // 1.5s, la durée de la transition
});
