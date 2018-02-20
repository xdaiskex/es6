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
- Use `Constructor` to set up parameter values that are passed in, these values are initialized when a new instance is made
``` 
constructor(name, power){
    this.name = name;
    this.power = power;
}
```
- `static saiyanCount(count)` is a static function that can be used, even without creating a class instance
```
Saiyan.saiyanCount(7);
```

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
nappa.transforms();  
