const grandfather = document.querySelector('.grandfather')
const father = document.querySelector('.father')
const son = document.querySelector('.son')

const gfLastName = grandfather.querySelector('.value')
const fLastName = father.querySelector('.value')
const sLastName = son.querySelector('.value')


gfLastName.addEventListener('input', setGFLastname);
fLastName.addEventListener('input', setFLastname);
sLastName.addEventListener('input', setLastname);

function setGFLastname (e) {
    const lastname = e.target.textContent;
    console.log(lastname);
    fLastName.textContent = lastname;
    sLastName.textContent = lastname;

}
function setFLastname (e) {
    const lastname = e.target.textContent;
    console.log(lastname);
    sLastName.textContent = lastname;

}
function setLastname (e) {
    const lastname = e.target.textContent;
    console.log(lastname);
}
