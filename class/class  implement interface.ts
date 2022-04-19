interface IPerson {
  name: string;
  display(): void;
}
interface IEmployee {
  empCode: number;
}
class Employee implements IPerson, IEmployee {
  empCode: number;
  name: string;
  constructor(empcode: number, name: string) {
    this.empCode = empcode;
    this.name = name;
  }
  display(): void {
    console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
  }
}
let per: IPerson = new Employee(10, "Sunny");
per.display();

// let emp: IEmployee = new Employee(100, "Bill");
// emp.display();
