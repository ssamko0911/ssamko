const imageDark = 'icons/mode-dark.png';
const imageLight = 'icons/mode-white.png';

const toggleMode = function () {
    const bodyElement = document.body;
    const imageElement = document.querySelector('#btn-img');
    const buttonElement = document.querySelector('#btn-mode')

    bodyElement.classList.toggle('dark-mode');

    if (bodyElement.className === 'dark-mode') {
        imageElement.src = imageLight;
        imageElement.title = 'Light mode';
    } else {
        imageElement.src = imageDark;
        imageElement.title = 'Dark mode';
    }
}