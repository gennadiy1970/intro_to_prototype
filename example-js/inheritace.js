// bash -c "node inheritace.js" > res.txt

function Grand(name) {
  this.name = name;
}
Grand.prototype.eyeColor = "grey";
Grand.prototype.lastname = "Simpson";
Grand.prototype.get = function() {
  return ({
    name: this.name,
    lastname: this.lastname,
    eyeColor: this.eyeColor,
    maidename: this.maidename || "",
    mothermaidename: this.mothermaidename || ""
});
};

function Father(name) {
  Grand.apply(this, arguments);
}
Father.prototype = Object.create(Grand.prototype);
Father.prototype.constructor = Father;

function Mother(name) {
  Grand.call(this, name);
}

Mother.prototype = Object.create(Grand.prototype, {
    eyeColor: {
        value:  "green"
    },
    maidename: {
        value:  "Bouvier"
    }
});

Mother.prototype.constructor = Mother;

function Son() {
  Father.apply(this, arguments);
}

function Daughter() {
    Father.apply(this, arguments);
}

Son.prototype = Object.create(Mother.prototype, {
    mothermaidename: {
        value: Mother.prototype.maidename
    },
    maidename: {
        value: undefined,
        writable : false,
        enumerable : false,
        configurable : false
    }
});
Son.prototype.constructor = Son;

Daughter.prototype = Object.create(Mother.prototype, {
    mothermaidename: {
        value: Mother.prototype.maidename
    },
    maidename: {
        value: Father.prototype.lastname,
        writable : true,
        enumerable : true,
        configurable : true
    },
    eyeColor: {
        value: Father.prototype.eyeColor
    }
});
Daughter.prototype.constructor = Daughter;

const grand = new Grand("Abraham");
const father = new Father("Homer");
const mother = new Mother("Marge");
const son = new Son("Bart");
const lise = new Daughter("Lise");
const maggie = new Daughter("Maggie");

console.group("This is a list of  own object properties");
console.table({ grand, father, mother, son, lise, maggie });
console.groupEnd("This is a list of  own object properties")

console.group("The method .get() of Grand.prototype:");
console.table({
  'id:0': grand.get(),
  'id:1': father.get(),
  'id:2': mother.get(),
  'id:3': son.get(),
  'id:4': lise.get(),
  'id:5': maggie.get()
});
console.groupEnd("The method .get() of Grand.prototype:");
