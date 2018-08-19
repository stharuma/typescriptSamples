"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName);
    };
    Employee.prototype.getEmployeeName = function () {
        return this.employeeName;
    };
    return Employee;
}());
var emp1 = new Employee('stharuma');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager " + this.employeeName + " can delegate task");
    };
    Manager.prototype.getManagerName = function () {
        return this.getEmployeeName();
    };
    return Manager;
}(Employee));
var m1 = new Manager('Jalan');
m1.greet();
m1.delegateWork();
console.log(m1.getManagerName());
// default public 
// default method as public method
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.studentName = name;
        this.age = age;
    }
    Student.prototype.studentInfo = function () {
        return "Student nane is " + this.studentName + " and his/her age is " + this.age;
    };
    Student.prototype.getStudentName = function () {
        return this.studentName;
    };
    return Student;
}());
var s = new Student('stharuma', 23);
console.log(s.studentInfo());
//console.log(s.getStudentName());// private nethode not access outside world
