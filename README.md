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
    -You can do this, remember that you still have to set up new variables that you made for the class
    ```
    constructor(name, power, transform){
        super(name, power);
        this.transform = transform;
    }
    ```


