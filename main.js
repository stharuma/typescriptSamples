"use strict";
exports.__esModule = true;
var message = 'Welcome to Typescript';
console.log(message);
var x = 30;
var y = 45;
console.log(x + '  ' + y);
//let x = 33;//Cannot redeclare block-scoped variable 'x'.
//const y=77;// Cannot redeclare block-scoped variable 'y'.
//const str //'str' is declared but its value is never read.
//  'const' declarations must be initialized.
// Variable Type
var isStart = true;
var num = 100;
var name = 'stharuma';
var note = "I am " + name + " \n         and developing web app";
console.log(note);
//null and undefined
var n = null;
var u = undefined;
//array declaration
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
var person1 = ['Max', 34];
//enum color {Red, Green, Pink}
var color;
(function (color) {
    color[color["Red"] = 4] = "Red";
    color[color["Green"] = 5] = "Green";
    color[color["Pink"] = 6] = "Pink";
})(color || (color = {}));
var c = color.Pink;
console.log('enum ' + c);
var randomvalue = 19;
randomvalue = true;
randomvalue = 'stharuma';
//any variable type work with following print messages
console.log(randomvalue.name);
//console.log(randomvalue());
console.log(randomvalue.toUppercase());
// unknown type
//let myVariable:unknown = 46;
var myVariable = 46;
console.log(myVariable.toUpperCase());
function hasName(obj) {
    return !!obj && typeof obj === 'object' && name in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var result;
result = 10;
result = 'stharuma';
result = false;
var answer = 'no';
// answer =19;//Type '19' is not assignable to type 'string'.
answer = 'yes';
// union type
var multyType;
multyType = 10;
multyType = true; // inteligence support
//multyType='sss';//Type '"sss"' is not assignable to type 'number | boolean'.
var anyType;
anyType = 19;
anyType = true;
anyType = 'sssss'; // no inteligence support
