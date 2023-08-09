const imageDark = 'icons/mode-dark.gif';
const imageLight = 'icons/mode-white.gif';

const bodyElement = document.body;
const imageElement = document.querySelector('#btn-img');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.btn');
const btnCloseModal = document.querySelector('.close-modal');

const toggleMode = function () {
    bodyElement.classList.toggle('dark-mode');

    if (bodyElement.className === 'dark-mode') {
        imageElement.src = imageLight;
        imageElement.title = 'Light mode';
        btn.style.color = '#FF2D20';

    } else {
        imageElement.src = imageDark;
        imageElement.title = 'Dark mode';
    }
}

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// btn open/close logic;
btn.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);

//  overlay close logic;
overlay.addEventListener('click', closeModal);

// key Esc pressed logic;
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
