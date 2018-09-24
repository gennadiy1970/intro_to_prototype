var grandfather = document.querySelector('.grandfather')
var father = document.querySelector('.father')
var son = document.querySelector('.son')

const inputGF = grandfather.querySelector('input[name="grandfather"]')
const inputF = grandfather.querySelector('input[name="father"]')
const inputS = grandfather.querySelector('input[name="son"]')

inputGF.addEventListener('change', setBackground);
inputF.addEventListener('change', setBackground);
inputS.addEventListener('change', setBackground);

function setBackground (e) {
    const name = e.target.name;
    console.log(e.target.name);
    window[name].style.background = e.target.value;
}