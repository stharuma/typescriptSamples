export {}
// in javascript function
function add(num1, num2):number{
    return num1 + num2;
}

console.log('add ='+add(10,8));
console.log('add ='+add('stharuma ',8));

function addTonumbers(num1:number, num2:number){
    return num1 + num2;
}

console.log('add  numbers = '+ addTonumbers(100,89));
//console.log('add ='+addTonumbers('stharuma ',8));// Argument of type '"stharuma "' is not assignable to parameter of type 'number'.//

//optional parameter num2?
function addnumbers(num1:number, num2?:number){
    if(num2){
      return num1 + num2;
    }
    return num1;  
}

console.log('add  numbers = '+ addnumbers(100,189));
console.log('add  numbers = '+ addnumbers(10));
//optional parameter num2?
function addnumberswithdefaultvalue(num1:number, num2:number=10){
    if(num2){
      return num1 + num2;
    }
    return num1;  
}

console.log('add  numbers = '+ addnumberswithdefaultvalue(100,189));
console.log('add  numbers = '+ addnumberswithdefaultvalue(10));