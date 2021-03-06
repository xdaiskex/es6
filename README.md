# Learning ES6

My attempt at explaining ES6 since I just learned it recently
## Classes

```
class Saiyan{
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
```
- Use `class` to make a new Saiyan class

### Constructors
- Use `Constructor` to set up parameter values that are passed in, these values are set when a new Saiyan is made
``` 
constructor(name, power){
    this.name = name;
    this.power = power;
}
```
### Static functions
- `static saiyanCount(count)` is a static function that can be used, even without creating a class instance
```
Saiyan.saiyanCount(7);
```

### Template Strings
- You can use backticks to create template strings where you can include JavaScript variables using `${...}`
```
console.log(`There are ${count} saiyans left`);
```
- To create a new instance of the class, you use `new` and the class name, adding values if necessary
```
let goku = new Saiyan('goku', '9000');
goku.introduction();
```
- The above code creates a new Saiyan called goku with a power level of 9000, calling the method `introduction()` will result in "My name is goku and my power level is 9000"

### Extend and super

```
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
```
- You can also copy a class and add extra functionality using `extends`
- Doing this allows you to keep all the variables and functions, as well as not having to set all the variables
    - For example, instead of doing
    ```
    constructor(name, power, transform){
        this.name = name;
        this.power = power;
        this.transform = transform;
    }
    ```
    - You can do this, remember that you still have to set up new variables that you made for the class
    ```
    constructor(name, power, transform){
        super(name, power);
        this.transform = transform;
    }
    ```

## Map (Object)

```
let myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);
myMap.set('c3', 'Food');
myMap.delete('a1');

console.log(myMap);
console.log(myMap.size);
```
- Map objects allow you to store key value pairs, a1 points to Hello and b2 points to Goodbye
- Use `new Map` to make a new Map object and set it to the myMap variable
- Each key value pair is encased in brackets, and the whole thing is encased in another bracket as seen below
```
let myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);
```

### Set
- You can set new key value pairs using `set`
```
myMap.set('c3', 'Food');
```

### Delete
- You can also delete a group by deleting the key, in this case deleting a1 will delete that key value pair
```
myMap.delete('a1');
```

### Size
- You can check how many key value pairs are in the object by using `size`
```
console.log(myMap.size);
```

## Map (function)
```
var words = ['apple', 'banana', 'orange', 'grape'];
var length = words.map(fruit => fruit.length);
console.log(length);

var odd = [1, 3, 5, 7, 9];
var even = odd.map(numbers => numbers * 2);
console.log(even); 
```
- Map functions are different than Map objects, they take an old array and returns a new one while keeping the old one
- length is now set to an array of 4 integers, each with the number of letters of their respective words
    - words still has ['apple', 'banana', 'orange', 'grape']
    - length now has ['5', '6', '6', '5']
    ```
    var words = ['apple', 'banana', 'orange', 'grape'];
    var length = words.map(fruit => fruit.length);
    console.log(length);
    ```
- even is now set to an array of 5 integers, each number is the result of their respective numbers multiplied by 2
    - odd still has [1, 3, 5, 7, 9]
    - even now has [2, 6, 10, 14, 18]
    ```
    var odd = [1, 3, 5, 7, 9];
    var even = odd.map(numbers => numbers * 2);
    console.log(even); 
    ```

## Arrow Functions

```
let add1 = function(a, b){
    return a + b;
}
let add2 = (a, b) => {
    return a + b;
}
let add3 = (a, b) => a + b;

console.log(add1(1, 2));
console.log(add2(3, 4));
console.log(add3(5, 6));
```

- Arrow functions allow code to be shorter, all you need to do is remove the `function` keyword, and put an arrow `=>` after the parameters
    - If you only have 1 statement, you don't even need the brackets
    - If you only have 1 parameter (a) instead of (a, b), you don't even need the parenthesis
    ```
    let add4 = function(a){
        return a * 2;
    }
    ```
    - Can also be written as
    ```
    let add4 = a => a * 2;
    ```

- All 3 console logs will output the same result
    ```
    let numbers = [1, 2, 3, 4, 5];

    let double1 = numbers.map(function(n){
        return n * 2;
    });
    let double2 = numbers.map((n) => {
        return n * 2;
    });
    let double3 = numbers.map(n => n * 2);

    console.log(double1);
    console.log(double2);
    console.log(double3);
    ```

## Arrow functions in regards to "this"

- `this` is **defined** using a regular function notation instead of an arrow function
    ```
    let person1 = {
        name: "Anthony",
        sayName: function(){
            console.log(`Hi I am  ${this.name}`);
        }
    }
    person1.sayName();
    ```

- `this` is **undefined** when using this inside of an arrow function
    ```
    let person2 = {
        name: "Anthony",
        sayName: () => {
            console.log(`Hi I am  ${this.name}`);
        }
    }
    person2.sayName();
    ```

- `this` is **undefined** when using this inside of a normal function
    ```
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
    ```

- `this` is **defined** when using this inside of an arrow function
    ```
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
    ```

## Promises

```
var myPromise = new Promise(function(resolve, reject){
    setTimeout(() => resolve(4), 2000);
});

myPromise.then((res) => {
    res +=3;
    console.log(res);
});
```

- Promises represents the eventual result of an asynchronous operation
    - Usually JavaScript code runs all at once, but promises can let some code wait before they are executed
- You can create a new promise by using `new Promise()`
- Promises take in 2 parameters, `resolve` and `reject`
    - Resolving a promise is used for the success
    - Rejecting a promise is used for the failure/error 

```
setTimeout(() => resolve(4), 2000);
```
- `setTimeout()` will resolve after 2 seconds and pass in the value of 4

```
myPromise.then(res => {
    res += 3;
    console.log(res);
});
```
- Use `then` to handle what happens after resolve and/or reject
- When myPromise resolves, take the value that was passed in (4) and add 3 to it
    - The console will log `res` which is now equal to 7 after a `setTimeout()` of 2 seconds


```
let promiseToCleanRoom = new Promise((resolve, reject) => {
    let isClean = false;

    if (isClean){
        resolve('clean');
    }else{
        reject('not clean');
    }
});

promiseToCleanRoom.then(res => {
    console.log('the room is ' + res);
}).catch(rej => {
    console.log('the room is ' + rej);
});
```
- If `isClean` is true, then the promise will be resolved and the value passed in will be "clean"
- If `isClean` is false, then the promise will be rejected and the value passed in will be "not clean"

```
promiseToCleanRoom.then(res => {
    console.log('the room is ' + res);
}).catch(rej => {
    console.log('the room is ' + rej);
});
```
- On res/resolve, the console will log out "the room is `clean`"
- On rej/reject, the console will log out "the room is `not clean`"
    - Use `catch` to catch the reject

### Chained Promises
```
let cleanRoom = () => {
    return new Promise((resolve, reject) => {
        resolve('cleaned the room');
    });
};

let removeGarbage = message => {
    return new Promise((resolve, reject) => {
        resolve (message + ' remove garbage');
    });
};

let winIcecream = message => {
    return new Promise((resolve, reject) => {
        resolve(message + ' won icecream');
    });
};

cleanRoom().then(result => {
    return removeGarbage(result);
}).then(result => {
    return winIcecream(result);
}).then(result => {
    console.log('finished ' + result);
}); 

```
- This is an example of chained promises
- `cleanRoom()` returns a promise with a resolve that has the value "cleaned the room"
    - `removeGarabe()` returns a promise with a resolve that has the value "remove garbage" **appended** to the previous message
    - `winIcecream()` returns a promise with a resolve that has the value "won icecream" **appended** to the previous message
- If `cleanRoom()` is fulfilled, then return `removeGarbage()`
    - If `removeGarbage()` is fulfilled, then return `winIcecream()`
    - If `winIcecream()` is fulfilled, then console log "finished" and append the messages from earlier

### Promise.all
```
let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('promise 1 is fulfilled'); 
    }, 1000);
});

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 2 is fulfilled');
    }, 2000);
});

Promise.all([myPromise1, myPromise2]).then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});  
```
- `Promise.all()` will take an array of promises and it will wait until all of them are resolved before running `then`
- After waiting 1 second for myPromise1 and 2 seconds for myPromise2 for a total of 2 seconds(not 3), the console will log out the data which is ["promise 1 is fulfilled", "promise 2 is fulfilled"]


### Pokemon API Promise Example
```
let pokemon = number => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`).then(res => {
        res.json().then(data => {
            console.log(`${data.name}, ${data.types[0].type.name} type, it can use ${data.abilities[1].ability.name}`);
        })
    }).catch(err => {
        console.log(err);
    });
};

pokemon(8); 
```
- Promises can be used to perform a function after a succussful API call
- After `fetch` finishes grabbing the information from the pokemon API, `then` will run and console log "bulbasaur, poison type, it can use overgrow" **AFTER** the function `pokemon()` is called