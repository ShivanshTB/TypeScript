//optional property ?
interface emp {
  empCode: number;
  empName: string;
  empDept?: string;
}

let ar: emp = {
  empCode: 1,
  empName: "Steve",
};

let Obj2: emp = {
  empCode: 1,
  empName: "Bill",
  empDept: "IT",
};

console.log(ar.empName);
console.log(ar.empCode);
console.log(ar.empDept);

console.log(Obj2.empName);
console.log(Obj2.empCode);
console.log(Obj2.empDept);

//read only property (readonly)

interface Citizen {
  name: string;
  readonly SSN: number;
}

let personObj: Citizen = { SSN: 110555444, name: "James Bond" };

personObj.name = "Steve Smith";
console.log(personObj.name);
console.log(personObj.SSN);
// personObj.SSN = "333666888";
