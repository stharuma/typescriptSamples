export {}

function fullName(person:{firstname:string, lastname:string}):string{
    return person.firstname +" "+ person.lastname;
 }
 let p ={
     firstname: 'Suresh',
     lastname: 'Tharuma'
 }
 let p1 ={
    firstname: 'Suresh'
}
console.log(fullName(p));
interface person{
    firstname:string, 
    lastname:string    
}
function fullNameUsingInterface(person:person):string{
    return person.firstname +" "+ person.lastname;
 }
 console.log(fullNameUsingInterface(p));

 interface personOptionalLastname{
    firstname:string, 
    lastname?:string    
}
function fullNameUsingOptionalLastname(person:personOptionalLastname):string{
    if(person.lastname)
       return person.firstname +" "+ person.lastname;
    return person.firstname   
 }

 function fullNameUsingOptionalparam(person:personOptionalLastname):string{
    if(person.lastname)
      // return person.firstname +" "+ person.lastname;
      return `${person.firstname} ${person.lastname}`;
    return `${person.firstname}`;   
 }

console.log(fullNameUsingOptionalLastname(p1));
console.log(fullNameUsingOptionalparam(p1));

