export {}
let message= 'Welcome to Typescript';
console.log(message);

let x =30;
const y =45;
console.log(x +'  '+y);
//let x = 33;//Cannot redeclare block-scoped variable 'x'.
//const y=77;// Cannot redeclare block-scoped variable 'y'.
//const str //'str' is declared but its value is never read.
         //  'const' declarations must be initialized.

         // Variable Type
         let isStart:boolean =true;
         let num: number =100;
         let name: string ='stharuma';
         let note: string =`I am ${name} 
         and developing web app`;
         console.log(note);
         //null and undefined
         let n:null =null;
         let u:undefined=undefined;
         //array declaration
         let list1:number[]=[1,2,3,4,5];
         let list2:Array<number>=[1,2,3,4,5];

         let person1:[string,number]=['Max', 34];

         //enum color {Red, Green, Pink}
         enum color {Red=4, Green, Pink}
         let c:color =color.Pink;
         console.log('enum '+c);

         let randomvalue :any =19;
         randomvalue =true;
         randomvalue ='stharuma';
         //any variable type work with following print messages
         console.log(randomvalue.name);
         //console.log(randomvalue());
         console.log(randomvalue.toUppercase());
         // unknown type
         //let myVariable:unknown = 46;
         let myVariable:any = 46;
         console.log((myVariable as string).toUpperCase()));

function hasName(obj:any): obj is {name}{
   return !!obj && typeof obj === 'object' && name in obj;
}
if(hasName(myVariable)){
    console.log(myVariable.name);
}

let result;
result =10;
result = 'stharuma';
result = false;
 let answer ='no';
// answer =19;//Type '19' is not assignable to type 'string'.
 answer ='yes';

// union type
let multyType: number|boolean;
multyType =10;
multyType = true;// inteligence support
//multyType='sss';//Type '"sss"' is not assignable to type 'number | boolean'.

let anyType :any;
anyType =19;
anyType =true;
anyType ='sssss'; // no inteligence support
