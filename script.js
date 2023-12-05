
// Prototypes & the Prototype Chain
// video 170

function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function () {
        return this.height * this.width;
    };
}
const rect = new Rectangle('Rect', 10, 10);




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
