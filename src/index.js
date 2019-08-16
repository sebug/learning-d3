import * as d3 from "d3";

function hello() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello for D3';
    console.log(d3);
    return element;
}

document.body.appendChild(hello());
