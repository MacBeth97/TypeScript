//NAMESPACES - where we want to group similar things
//To make funtions availible outside of the namesapce, prepend with export
namespace MyMath {
    export namespace Circle {
        const PI = 3.14;
        export function calculateCircumference(diameter: number) {
            return diameter* PI;
        };
    }
}