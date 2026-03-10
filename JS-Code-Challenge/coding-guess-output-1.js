// Guess the output:

// Q-1
let newList = [1,2,3].push(4);

console.log(newList); 
// Output: 4
// push() returns the new length of the array, not the array itself.

// console.log(newList.push(5));
// Error: newList is a number (4), numbers don't have push()

// --------------------------------------------------

// Q-2
const numbers = [1,2,3,4,5];
const [y] = numbers;

console.log(y);
// Output: 1
// Array destructuring takes the first element

// --------------------------------------------------

// Q-3
const duplicateKey = {name: "Bittu", age:26, name:"Rajeev"};
console.log(duplicateKey);

// Output: { name: "Rajeev", age: 26 }
// When duplicate keys exist, the last one overwrites the previous.

// --------------------------------------------------

// Q-4
function test(){
    return this.name;
}

var obj = {name: "Bittu"};

console.log(test()); 
// Output: undefined (or global name if defined)
// In normal function call, this refers to global object.

console.log(test.call(obj));
// Output: Bittu
// call() explicitly sets this to obj.

// --------------------------------------------------

// Q-5
const a = {};
const b = {key: "b"};
const c = {key: "c"};

a[b] = 123;
a[c] = 456;

console.log(a[b]);
// Output: 456
// Object keys are converted to string "[object Object]"
// So both keys overwrite the same property.

// --------------------------------------------------

// Q-6
(function(){
    var a1 = b1 = 5;
})();

console.log(b1);
// Output: 5
// b1 becomes global variable

console.log(a1);
// Error: a1 is function scoped

// --------------------------------------------------

// Q-7
var fullName = "Bittu";

var obj = {
    fullName: "Rahul",
    prop: {
        fullName: "Suraj",
        getFullName: function(){
            return this.fullName;
        }
    }
};

console.log(obj.prop.getFullName());
// Output: Suraj
// this refers to prop object

const getName = obj.prop.getFullName;

console.log(getName());
// Output: Bittu
// this refers to global object

// --------------------------------------------------

// Q-8
let Object1 = {name: "Bittu", age: 24};
let Object2 = Object.create(Object1);
Object2.city = "BLR";

console.log("name" in Object1);
// Output: true

console.log("name" in Object2);
// Output: true
// 'in' checks prototype chain also

console.log(Object1.hasOwnProperty("name"));
// Output: true

console.log(Object2.hasOwnProperty("name"));
// Output: false
// hasOwnProperty checks only own properties
