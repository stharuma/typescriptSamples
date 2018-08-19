export {}
class Employee{
    employeeName:string;
    constructor(name: string){
      this.employeeName = name;
    }

    greet(){
        console.log(`Good morning ${this.employeeName}`);
    }

}

let emp1 = new Employee('stharuma');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName:string){
        super(managerName);
    }
    delegateWork(){
      console.log(`Manager ${this.employeeName} can delegate task`)
    }


}

let m1=new Manager('Jalan');
m1.greet();
m1.delegateWork();