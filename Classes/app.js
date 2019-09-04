var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Person = /** @class */ (function () {
    //shortcut to add to class
    function Person(name, username) {
        this.username = username;
        //Same as priv but accesible from any calss that inherits
        this.age = 21;
        //this.name refers to class property, name refers to argument passed
        this.name = name;
    }
    //No need to specify function keyword
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Young");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());

//Instantiate class
var person = new Person("Gareth", "gareth");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool"); //Wont work with private method
// INHERITANCE
//Takes all data in inherited class
//Content specified in main class overwrites inherited SuperClass
var Gareth = /** @class */ (function (_super) {
    __extends(Gareth, _super);
    function Gareth(username) {
        var _this = 
        //When extending a class, always call super, which calls constructer of SuperClass
        _super.call(this, "Gareth", username) || this;
        _this.name = "Gareth";
        _this.age = 23;
        return _this;
    }
    ;
    return Gareth;
}(Person));

var gareth = new Gareth("gareth");
console.log(gareth);
//Getter and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Plant;
}());

var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
//Static Properties
//Means property can always be used without instantiation
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    ;
    Helpers.PI = 3.14;
    return Helpers;
}());
;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
//Abstract Classes
//Cannot be instantiated directly
//Always have to be inherited from
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    ;
    return Project;
}());
;
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    ;
    return ITProject;
}(Project));
//Instantiate abstract class
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
//Private Constructors
//create only one instance at runtime
//Can also make something readonly
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    ;
    OnlyOne.getInstance = function () {
        //Check if not yet instantiated
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        ;
        return OnlyOne.instance;
    };
    ;
    return OnlyOne;
}());
;
var right = OnlyOne.getInstance();
console.log(right.name);
