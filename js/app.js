// Variable
const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
const bodyMode = document.querySelector('#container');
const h1font = document.querySelector('#h1Font');
const labelSwitch = document.querySelector('#theme');
const title = document.querySelector('#title');

// Node List
const followersNumber = document.querySelectorAll('#cardsArea .followers-number');
const array = [...followersNumber];

const bgCards = document.querySelectorAll('.cards');
const arrayCards = [...bgCards];

const overviewCards = document.querySelectorAll('.number-overview');
const overviewArray = [...overviewCards];

// Event Listeners
eventListener();

function eventListener() {
    colorSwitch.addEventListener('click', darkMode)
};

// Funtions
function darkMode() {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        element.classList.toggle('dark-font-p')
    }

    for (let i = 0; i < arrayCards.length; i++) {
        const element = arrayCards[i];
        if(element.classList.contains('card-bg-light')) {
            element.classList.replace('card-bg-light', 'card-bg-dark');
        } else {
            element.classList.replace('card-bg-dark', 'card-bg-light');
        }
    }

    for (let i = 0; i < overviewArray.length; i++) {
        const element = overviewArray[i];
        if(element.classList.contains('light-font-h1')) {
            element.classList.replace('light-font-h1', 'dark-font-h1');
        } else {
            element.classList.replace('dark-font-h1', 'light-font-h1');
        }
    }
    
    if(bodyMode.classList.contains('body-contain-light')) {
        bodyMode.classList.replace('body-contain-light', 'body-contain-dark');
    } else {
        bodyMode.classList.replace('body-contain-dark', 'body-contain-light');
    }

    h1font.classList.toggle('dark-font-p');
// Se requiere hacer con un replace
    
    if (title.classList.contains('light-font-p')){
        title.classList.replace('light-font-p', 'dark-font-p');
    } else {
        title.classList.replace('dark-font-p', 'light-font-p');
    }

    labelSwitch.classList.toggle('dark-font-p');
};