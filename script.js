
function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}
Player.prototype.gainXp = function (xp) {
    this.points += xp;
    if (this.points >= 10) {
        this.lvl++;
        this.points -= 10;
    }
    console.log(this.describe());
}
Player.prototype.describe = function () {
    return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
}

const player1 = new Player('Bob');
const player2 = new Player('Alice');

player1.gainXp(4);
player2.gainXp(7);
player1.gainXp(5);
player2.gainXp(1);
player1.gainXp(7);
player2.gainXp(9);
player1.gainXp(5);
player2.gainXp(2);

// console.log(player1.describe());
// console.log(player2.describe());


// Prototypical Inheritance & call()
// function Shape(name) {
//     this.name = name;
// }
// Shape.prototype.logName = function () {
//     console.log(`Shape Name: ${this.name}`);
// }
// function Rectangle(name, height, width) {
//     Shape.call(this, name); 
//     this.height = height;
//     this.width = width; 
// }
// // Inherits Shape Prototypes
// Rectangle.prototype = Object.create(Shape.prototype);

// Rectangle.prototype.logName = function () {
//     console.log(`Rectangle Name: ${this.name}`);
// }

// function Circle(name, radius) {
//     Shape.call(this, name); 
//     this.radius = radius; 
// }
// // Inherits Shape Prototypes
// Circle.prototype = Object.create(Shape.prototype);

// // Set prototype constructors
// Rectangle.prototype.constructor = Rectangle;
// Circle.prototype.constructor = Circle;


// const rect = new Rectangle('Rectangle 1', 20, 20);
// const cir = new Circle('Circle 1', 30);

// console.log(rect, cir);
// rect.logName();
// cir.logName();

// console.log(rect.constructor);

// Object create 
// const rectanglePrototypes = {
//     area: function () {
//         return this.width + this.height; 
//     }, 
//     perimeter: function () {
//         return 2 * (this.width + this.height);
//     },
//     isSquare: function () {
//         return this.height === this.width;
//     }
// }

// function createRectangle(height, width) {
//     // takes in object prototypes
//     return Object.create(rectanglePrototypes, {
//         height: {
//             value: height,
//         },
//         width: {
//             value: width,
//         },
//     });
// }

// const rect = createRectangle(10, 20);
// console.log(rect);
// console.log(rect.area());
// console.log(rect.isSquare());

// const rect2 = createRectangle(20, 20);
// console.log(rect2.area());

// Add methods to the prototype chain


// function Rectangle(name, width, height) {
//     this.name = name;
//     this.width = width;
//     this.height = height;
// }

// Rectangle.prototype.area = function () {
//     return this.width * this.height;
// };

// Rectangle.prototype.perimeter = function () {
//     return 2 * (this.width + this.height);
// };

// Rectangle.prototype.isSquare = function () {
//     return this.width === this.height;
// };

// Rectangle.prototype.changeName = function (newName) {
//     return (this.name = newName);
// };

// const rect = new Rectangle('Rect', 10, 20);
// const rect2 = new Rectangle('Rect 2', 30, 40);

// console.log(rect);
// console.log(rect.area());
// console.log(rect.perimeter());
// console.log(rect.isSquare());
// console.log(rect.changeName('Test'));
// console.log(rect.name);


// Prototypes & the Prototype Chain

// function Rectangle(name, width, height) {
//     this.name = name;
//     this.width = width;
//     this.height = height;
//     this.area = function () {
//         return this.height * this.width;
//     };
// }
// const rect = new Rectangle('Rect', 10, 10);
// console.log(rect.toString);

// // shows prototype of an object
// console.log(Object.getPrototypeOf(rect));


// Working with Object Properties
// function Rectangle(name, width, height) {
//     this.name = name;
//     this.width = width;
//     this.height = height;
//     this.area = function () {
//         return this.height * this.width;
//     };
// }

// const rect1 = new Rectangle('Rectangle 1', 20, 20);
// const rect2 = new Rectangle('Rectangle 2', 20, 30);

// console.log(rect1.name, rect2.width);
// console.log(rect1['width']);
// // Add property
// rect1.color = 'red';

// rect2.perimeter = () => 2 * (rect2.width + rect2.height);

// // Delete Property
// delete rect2.perimeter

// // Check for a specific property
// console.log(rect2.hasOwnProperty('color'));
// console.log(rect1.hasOwnProperty('color'));

// // Get keys
// console.log(Object.keys(rect1));

// // Get values
// console.log(Object.values(rect2));

// // Get entries
// console.log(Object.entries(rect1));

// for(let [key, value] of Object.entries(rect1)) {
//     if (typeof value !== 'function') {
//         console.log(`${key} - ${value}`);
//     }
// }

//console.log(rect2);



// Literals vs Built-in Constructors
// const strLit = 'Hello';
// const strObj = new String('Hello');

// console.log(strLit, typeof strLit);
// console.log(strObj, typeof strObj);


// // Boxing
// console.log(strLit.toUpperCase());
// console.log(strLit[0]);

// // Unboxing - object turned back into a literal
// console.log(strObj.valueOf, typeof strObj.valueOf());

// console.log(strLit.constructor);
// console.log(strObj.constructor);

// console.log(strLit instanceof String);
// console.log(strObj instanceof String);

// // Other types
// const numLit = 20;
// const numObj = new Number (20);

// console.log(numLit, typeof numLit); 
// console.log(numObj, typeof numObj);
// const boolLit = true;
// const boolObj = new Boolean (true);
// console.log(boolLit, typeof boolLit); 
// console.log(boolObj, typeof boolObj);
// const arrLit = [1, 2, 3, 4, 5];
// const arrObj = new Array(1, 2, 3, 4, 5);
// console.log(arrLit, typeof arrLit); 
// console. log(arrObj, typeof arrObj);

// const funcLit = function (x) {
//     return x * x;
// }
// console.log(funcLit, typeof funcLit);

// console.log(funcLit(5));

// const funcObj = new Function('x', 'return x * x');

// console.log(funcObj(3));

// const obj1 = {};

// const obj2 = new Object();

// console.log(obj1, typeof obj1);
// console.log(obj2, typeof obj2);


// Constructors
// capital letter R is convention for contructors
// function Rectangle(name, width, height) {
//     this.name = name;
//     this.width = width;
//     this.height = height;
//     this.area = function () {
//         return this.height * this.width;
//     }
// }
// const rect1 = new Rectangle('Rectangle 1', 10, 10);
// console.log(rect1.name);
// console.log(rect1.area());

// const rect2 = new Rectangle('Rectangle 2', 20, 10);
// const rect3 = new Rectangle('Rectangle 3', 30, 30);
// console.log(rect2.name, rect3.name);
// console.log(rect2.area(), rect3.area());

// console.log(rect1.constructor);
// console.log(rect2 instanceof Rectangle);


// Object Literals

// for 1 object
// const rectangle = {
//     name: 'Rectangle 1', 
//     width: 20, 
//     height: 10, 
//     area: function() {
//         return this.width * this.height;
//     },
// };

// // for 2nd object
// const rectangle2 = {
//     name: 'Rectangle 2', 
//     width: 30, 
//     height: 20, 
//     area: function() {
//         return this.width * this.height;
//     },
// };

// console.log(rectangle2.area());
