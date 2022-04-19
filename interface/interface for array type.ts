interface numList {
  [index: number]: number;
}

let numArr: numList = [1, 2, 3];
console.log(numArr[0]);
console.log(numArr[1]);

interface StringList {
  [index: string]: string;
}

let strArr: StringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";

console.log(strArr["TS"]);
console.log(strArr["JS"]);
