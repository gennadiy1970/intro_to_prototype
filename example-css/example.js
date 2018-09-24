function Family () {}

Family.prototype.color = 'red';
const grand = new Family ();

const father = Object.create(grand)
const son = Object.create(father)
console.table([
    ['grand:', grand.color], 
    ['father:',father.color], 
    ['son:', son.color]
]);


father.color = 'orange';
console.log('============= father.color = "orange" ================');
console.table([
    ['grand:', grand.color], 
    ['father:',father.color], 
    ['son:', son.color]
]);

console.log('============= son.color = "navy" ================');
son.color= 'navy';
console.table([
    ['grand:', grand.color], 
    ['father:',father.color], 
    ['son:', son.color]
]);