// definitions area;

const imageDark = 'icons/mode-dark.gif';
const imageLight = 'icons/mode-white.gif';

const bodyElement = document.body;
const imageElement = document.querySelector('#btn-img');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.btn');
const btnCloseModal = document.querySelector('.close-modal');

// dark/light mode logic;
const toggleMode = function () {
    bodyElement.classList.toggle('dark-mode');

    if (bodyElement.className === 'dark-mode') {
        imageElement.src = imageLight;
        imageElement.title = 'Light mode';
    } else {
        imageElement.src = imageDark;
        imageElement.title = 'Dark mode';
    }
}

const createList = function (data) {
    let list = document.createElement('ul');
    let entry = document.createElement('li');
    data.forEach(element => {
        entry.textContent = element;
        list.appendChild(element);
    });
    return list;
}

let data = `
    <div id="data">
        <h1>Soft skills:</h1>
        <p>
        <ul>
            <li>Problem Solving &#129504</li>
            <li>Critical Thinking &#129488</li>
            <li>Time management &#9202</li>
            <li>Agility &#128175</li>
            <li>Teamwork &#128077</li>
            <li>Effective communication	&#128172</li>
            <li>Attention to details &#9997</li>
        </ul>
        </p>
</div>`;

// modal window logic;
const openModal = function () {
    if (modal.id === 'modal-soft') {
        modal.insertAdjacentHTML('beforeend', data);
    }
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    document.querySelector('#data').remove();
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
