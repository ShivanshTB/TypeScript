var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
var show = new Employee(20, "Sunny");
console.log(show.empCode);
console.log(show.empName);
console.log(show.getSalary);
//inheritance
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var emplo = /** @class */ (function (_super) {
    __extends(emplo, _super);
    function emplo(empcode, name) {
        var _this = _super.call(this, name) || this;
        _this.empCode = empcode;
        return _this;
    }
    emplo.prototype.displayName = function () {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    };
    return emplo;
}(Person));
var emp = new emplo(100, "Sunny");
emp.displayName();
