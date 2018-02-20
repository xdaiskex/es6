"use strict"


// Classes, constructoers
/* class Saiyan{
    constructor(name, power){
        this.name = name;
        this.power = power;
    }

    static saiyanCount(count){
        console.log(`There are ${count} saiyans left`);
    }

    introduction(){
        console.log(`My name is ${this.name} and my power level is ${this.power}`);
    }
}

Saiyan.saiyanCount(7);

let goku = new Saiyan('goku', '9000');

goku.introduction();

// Extends, super

class SuperSaiyan extends Saiyan{
    constructor(name, power, transform){
        super(name, power);
        this.transform = transform;
    }

    transforms(){
        if(this.transform == 'true'){
            this.power *= 2;
            console.log(`${this.name} is a Super Saiyan with a power level of ${this.power}.`);
        }
        else{
            console.log(`${this.name} cannot transform into a Super Saiyan.`);
        }
    }
}

let vegeta = new SuperSaiyan('vegeta', '8000', 'true');
vegeta.transforms();
let nappa = new SuperSaiyan('nappa', '7000', 'false');
nappa.transforms();  */

// Template strings, variables, functions

/* window.onload = function(){
    let name = 'john';

    function makeUpperCase(word){
        return word.toUpperCase();
    }
    let template = 
        `<h1>${makeUpperCase('Hello')} ${name}</h1>
        <p>
            This is a simple template in JavaScript
        </p>`;
    document.getElementById('template').innerHTML = template;
}  */

/* 
// New String and Number functions

let theString = 'Hello, my name is Anthony and I love JavaScript';

console.log(theString.startsWith('Hello'));
console.log(theString.endsWith('JavaScript'));
console.log(theString.includes('name'));

// Hex
console.log(0xFF);

// Binary
console.log(0b101011);

// Octal
console.log(0o543);

// isFinite
console.log(Number.isFinite(Infinity));

// isNan
console.log(Number.isNaN(NaN));

// isInteger
console.log(Number.isInteger(Infinity)); */

/* // Default Parameters

function greet(greeting = 'Hello World'){
    console.log(greeting);
}

greet();
greet('sup');
*/

// Set

/*
let myArray = [11, 22, 33];
let mySet = new Set(myArray);

mySet.add('100');
mySet.add({a: 1, b: 2});
mySet.delete(22);
mySet.clear();
mySet.add(50);
mySet.add(20);
mySet.add(10);

console.log(mySet);
console.log(mySet.size);

mySet.forEach(function(val){
    console.log(val);
});
*/

// Map

/* let myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);
myMap.set('c3', 'Food');
myMap.delete('a1');

console.log(myMap);
console.log(myMap.size);

var words = ['apple', 'banana', 'orange', 'grape'];
var length = words.map(fruit => fruit.length);
console.log(length);

var odd = [1, 3, 5, 7, 9];
var even = odd.map(numbers => numbers * 2);
console.log(even); */

// Weakset 

/*

let carWeakSet = new WeakSet();

let car1 = {
    make: 'Honda',
    model: 'Civic'
}

carWeakSet.add(car1);

let car2 = {
    make: 'Toyota',
    model: 'Camry'
}

carWeakSet.add(car2);
carWeakSet.delete(car1);

console.log(carWeakSet);

// Weakmap

let carWeakMap = new WeakMap();
let key1 = {
    id: 1
}

let car3 = {
    make: 'Honda',
    model: 'Civic'
}

let key2 = {
    id: 1
}

let car4 = {
    make: 'Toyota',
    model: 'Camry'
}

carWeakMap.set(key1, car3);
carWeakMap.set(key2, car4);
carWeakMap.delete(key1);

console.log(carWeakMap); */

// Arrow functions

/* let add1 = function(a, b){
    return a + b;
}
let add2 = (a, b) => {
    return a + b;
}
let add3 = (a, b) => a + b;

console.log(add1(1, 2));
console.log(add2(3, 4));
console.log(add3(5, 6));

let numbers = [1, 2, 3, 4, 5];

let double1 = numbers.map(function(n){
    return n * 2;
});
let double2 = numbers.map((n) => n * 2);
let double3 = numbers.map(n => n * 2);

console.log(double1);
console.log(double2);
console.log(double3); */

let person1 = {
    name: "Anthony",
    sayName: function(){
        console.log(`Hi I am  ${this.name}`);
    }
}
person1.sayName();

//This is undefined
let person2 = {
    name: "Anthony",
    sayName: () => {
        console.log(`Hi I am  ${this.name}`);
    }
}
person2.sayName();

//This is undefined
let person3 = {
    name: "Anthony",
    hobbies: ['volleyball, cooking, videogames'],
    showHobbies: function(){
        this.hobbies.forEach(function(hobby){
            console.log(`${this.name} likes ${hobby}`);
        });
    }
}
person3.showHobbies();

let person4 = {
    name: "Anthony",
    hobbies: ['volleyball, cooking, videogames'],
    showHobbies: function () {
        this.hobbies.forEach(hobby => {
            console.log(`${this.name} likes ${hobby}`);
        });
    }
}
person4.showHobbies(); 

// Promises

/*
// Immediately Resolved 

var myPromise = Promise.resolve('Foo');

myPromise.then((res) => console.log(res));

var myPromise1 = new Promise(function(resolve, reject){
    setTimeout(() => resolve(4), 2000);
});

myPromise1.then((res) => {
    res +=3;
    console.log(res);
});

function getData(method, url){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
            if(this.status >= 200 && this.status < 300){
                resolve(xhr.response);
            }
            else{
                reject({
                    status: this.status,
                    statusText: xhr.statusText  
                });
            }
        };
        xhr.onerror = function(){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function(data){
    //console.log(data);
    let todos = JSON.parse(data);
    let output = '';
    for(let todo of todos){
        output += `
            <li>
                <h3>${todo.title}</h3>
                <p>Completed: ${todo.completed}</p>
            </li>
        `;
    }
    document.getElementById('template').innerHTML = output;
}).catch(function(err){
    console.log(err);
}); */

/* let promiseToCleanRoom = new Promise((resolve, reject) => {
    //clean room

    let isClean = false;

    if (isClean){
        resolve('clean');
    }else{
        reject('not clean');
    }

    //don't clean room
});

promiseToCleanRoom.then((fromResolve) => {
    console.log('the room is ' + fromResolve);
}).catch((fromReject) => {
    console.log('the room is ' + fromReject);
});

let cleanRoom = () => {
    return new Promise((resolve, reject) => {
        resolve('cleaned the room');
    });
};

let removeGarbage = (message) => {
    return new Promise((resolve, reject) => {
        resolve (message + ' remove garbage');
    });
};

let winIcecream = (message) => {
    return new Promise((resolve, reject) => {
        resolve(message + ' won icecream');
    });
};

cleanRoom().then(function(result){
    return removeGarbage(result);  
}).then(function(result){
    return winIcecream(result);
}).then(function(result){
    console.log('finished ' + result);
});

cleanRoom().then(result => {
    return removeGarbage(result);
}).then(result => {
    return winIcecream(result);
}).then(result => {
    console.log('finished ' + result);
}); */

/* let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('Good to go'); 
    }, 1000);
});

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promise 2 - the promising');
    }, 2000);
});

Promise.all([myPromise, myPromise2]).then(data =>{
    console.log(`Data is ${data}`);
}).catch(err => {
    console.log(err);
}); */

/* let pokemon = number => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`).then(res => {
        res.json().then(data => {
            console.log(`${data.name}, ${data.types[0].type.name} type, it can use ${data.abilities[1].ability.name}`);
        })
    }).catch(err => {
        console.log(err);
    });
};

pokemon(8); */