document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    createElement('h1', "hello world", root);
})

function createElement(name, content, parent) {
    const ele = document.createElement(name);
    ele.innerText = content;
    parent.appendChild(ele);
    return ele
}