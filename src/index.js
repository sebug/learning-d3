function hello() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello for D3';
    return element;
}

document.body.appendChild(hello());
