class Employee {
  empCode: number;
  empName: string;

  constructor(code: number, name: string) {
    this.empName = name;
    this.empCode = code;
  }

  getSalary(): number {
    return 10000;
  }
}
let show = new Employee(20, "Sunny");
console.log(show.empCode);
console.log(show.empName);
console.log(show.getSalary);

//inheritance

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class emplo extends Person {
  empCode: number;
  constructor(empcode: number, name: string) {
    super(name);
    this.empCode = empcode;
  }
  displayName(): void {
    console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
  }
}
let emp = new emplo(100, "Sunny");
emp.displayName();
