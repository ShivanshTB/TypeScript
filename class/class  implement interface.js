var Employee = /** @class */ (function () {
    function Employee(empcode, name) {
        this.empCode = empcode;
        this.name = name;
    }
    Employee.prototype.display = function () {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    };
    return Employee;
}());
var per = new Employee(10, "Sunny");
per.display();
// let emp: IEmployee = new Employee(100, "Bill");
// emp.display();
