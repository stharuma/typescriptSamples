export {}
class Employee{
    employeeName:string;
    constructor(name: string){
      this.employeeName = name;
    }

    greet(){
        console.log(`Good morning ${this.employeeName}`);
    }

    protected getEmployeeName():string{
        return this.employeeName;
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

   public getManagerName():string {
       return this.getEmployeeName();
    }
}

let m1=new Manager('Jalan');
m1.greet();
m1.delegateWork();
console.log(m1.getManagerName());

// default public 
// default method as public method
class Student {
    studentName:string;
    age:number;
    constructor(name:string, age:number ){
        this.studentName = name;
        this.age= age;
    }

   public  studentInfo():string{
       return `Student nane is ${this.studentName} and his/her age is ${this.age}`
    }

    private  getStudentName():string{
        return this.studentName;
    }
}

let s= new Student('stharuma', 23);
console.log(s.studentInfo());
//console.log(s.getStudentName());// private nethode not access outside world

