document.addEventListener('contextmenu', event => event.preventDefault());

function moveButton(x) {
    number = Math.floor(Math.random()*600);

    x.style.left = `${number}px`;
    x.style.top = `${number}px`;
}

function great(x) {
    number = Math.floor(Math.random()*600);

    x.style.left = `${number}px`;
    x.style.top = `${number}px`;
}

function yes() {
    alert('Boa 06');
}
