"use strict";
exports.__esModule = true;
function fullName(person) {
    return person.firstname + " " + person.lastname;
}
var p = {
    firstname: 'Suresh',
    lastname: 'Tharuma'
};
var p1 = {
    firstname: 'Suresh'
};
console.log(fullName(p));
function fullNameUsingInterface(person) {
    return person.firstname + " " + person.lastname;
}
console.log(fullNameUsingInterface(p));
function fullNameUsingOptionalLastname(person) {
    if (person.lastname)
        return person.firstname + " " + person.lastname;
    return person.firstname;
}
console.log(fullNameUsingOptionalLastname(p1));
