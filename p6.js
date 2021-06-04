class Shape {
constructor(sides = []){
    this.sides = sides;
    }
perimeter() {
    return (this.sides.length) ? this.sides.reduce((a,b) => a + b) : 0; 
}
}
/* console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0 */ 

class Rectangle extends Shape {
    constructor (length, width){
        super("Shape constructor");
        this.length = length;
        this.width = width;
        length = 0;
        width = 0; 
    }
    area = () => this.length * this.width;
 };

 /* console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0 */ 

class Triangle extends Shape {
    constructor (sideA = 0, sideB = 0, sideC = 0){
        super([sideA, sideB, sideC]),
        this.firstSide = sideA,
        this.secondSide = sideB,
        this.thirdSide = sideC
    }
    area = () => {
        let sum = (this.firstSide + this.secondSide + this.thirdSide)/2;
        return sum;
    }
}

/* console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0 */ 

const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for(const sidesData of data) {
    let myObj = null;

    switch (sidesData.length) {
        default:
            console.log(`Shape with ${sidesData.length} sides unsupported`)
            break;
        case 2:
            let length = sidesData[0];
            let width = sidesData [1];
            myObj = new Rectangle (length, width)
            let shapeName = length == width ? "Square" : "Rectangle";
             console.log (`${shapeName} with sides ${sidesData} has a perimeter of ${myObj.perimeter()} and an area of ${myObj.area()}`);
             break;
        case 3:
            myObj = new Triangle(...sidesData);
            console.log (`Triangle with sides ${sidesData} has a perimeter of ${myObj.perimeter()} and an area of ${myObj.area()}`);
            break;   
    }
}