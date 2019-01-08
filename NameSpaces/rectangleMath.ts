//NAMESPACES - where we want to group similar things
//To make funtions availible outside of the namesapce, prepend with export
namespace MyMath {
    const PI = 3.14;

    export function calculateRectangle(width: number, length: number) {
        return width * length;
    };
}