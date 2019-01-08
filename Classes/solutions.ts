class Car {
    name: string;
    acceleration: number = 0;

    honk() {
        console.log("Tooooooooot!");
    };

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }

    constructor(name: string) {
        this.name = name;
    }
};
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

//Ex 2
class baseObject {
    width: number = 0;
    length: number = 0;
}

class Rectangle extends baseObject {

    calcSize() {
        return this.width * this.length;
    }
};
const rectangle = new Rectangle();
rectangle.width = 5
rectangle.length = 2
rectangle.calcSize();
console.log(rectangle.calcSize());



//Ex 3
class Persona {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = ""
        };
    }
};
let persona = new Persona();
console.log(persona.firstName);
persona.firstName = "Ga";
console.log(persona.firstName);
persona.firstName = "Gareth";
console.log(persona.firstName);

