class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetings() {
        console.log(`My name is ${this.name} and I am ${this.age} years`);
    }
}

// to use module in another file...
module.exports = Person;