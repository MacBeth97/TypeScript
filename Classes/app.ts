class Person {
    name: string;
    //Priv only avail within object
    private type: string;
    //Same as priv but accesible from any calss that inherits
    protected age: number = 21;

                            //shortcut to add to class
    constructor(name:string, public username: string) {
        //this.name refers to class property, name refers to argument passed
        this.name = name;
    }

    //No need to specify function keyword
    printAge() {
        console.log(this.age);
        this.setType("Young");
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }

};

//Instantiate class
const person = new Person("Gareth", "gareth");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool"); //Wont work with private method

// INHERITANCE
//Takes all data in inherited class
//Content specified in main class overwrites inherited SuperClass
class Gareth extends Person {
    name = "Gareth";

    constructor(username: string) {
        //When extending a class, always call super, which calls constructer of SuperClass
        super("Gareth", username);
        this.age = 23;
    };
}
const gareth = new Gareth("gareth");
console.log(gareth);

//Getter and Setters
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    };
};

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);

//Static Properties
//Means property can always be used without instantiation
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }; 
};
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

//Abstract Classes
//Cannot be instantiated directly
//Always have to be inherited from
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    };
};

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    };
}

//Instantiate abstract class
let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

//Private Constructors
//create only one instance at runtime
//Can also make something readonly
class OnlyOne {
    private static instance: OnlyOne;
    public readonly name: string;

    private constructor(name: string) {
        this.name = name;
    };

    static getInstance() {
        //Check if not yet instantiated
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        };
        return OnlyOne.instance;
    };
};

let right = OnlyOne.getInstance();
console.log(right.name);
