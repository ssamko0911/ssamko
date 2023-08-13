// definitions area;

const dataObject = {
    softSkills: [
        'Problem Solving &#129504',
        'Critical Thinking &#129488',
        'Time management &#9202',
        'Agility &#128175',
        'Teamwork &#128077',
        'Effective communication\t&#128172',
        'Attention to details &#9997',
    ],
    hardSkills: [
        'PHP &#129504',
        'JS &#129488',
        'HTML &#9202',
    ],
    myAchievements: [
        'Permanent training - <a href="https://www.codewars.com/users/ssamko0911" target="_blank">CodeWars</a>',
        'One of my samples - <a href="https://github.com/ssamko0911/laravel_projects_with_tasks" target="_blank">Coded with Laravel</a>',
        'Open-source contributions - <a href="https://github.com/salesagility/SuiteCRM/pulls/serhiisamko091184" target="_blank">SuiteCRM</a>',
        'I like JAVA - <a href="https://github.com/ssamko0911/JavaEssentialHWrelaunch/tree/master/src/transporthub" target="_blank">Console Bus Station</a>',
        'HTML &#9202',
    ]
}

const headers = {
    softSkills: 'Soft Skills',
    hardSkills: 'Hard Skills',
    myAchievements: 'My achievements',
};

const imageDark = 'icons/mode-dark.gif';
const imageLight = 'icons/mode-white.gif';

const bodyElement = document.body;
const imageElement = document.querySelector('#btn-img');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btns = document.querySelectorAll('.show-modal');
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
    let list = document.getElementById("data-list");
    for (let i = 0; i < data.length; ++i) {
        let li = document.createElement('li');
        li.innerHTML = data[i];
        list.appendChild(li);
    }
}

// modal window logic;

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    document.querySelector('#data').remove();
}

// btn open/close logic;
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (event) {
        modal.id = event.target.id;

        let title = headers[modal.id];

        let modalContent = `
    <div id="data">
        <h1>${title}</h1>
        <ul id="data-list"></ul>
    </div>`;

        modal.insertAdjacentHTML('beforeend', modalContent);
        createList(dataObject[modal.id]);

        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

// btn close logic;
btnCloseModal.addEventListener('click', closeModal);

//  overlay close logic;
overlay.addEventListener('click', closeModal);

// key Esc pressed logic;
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
