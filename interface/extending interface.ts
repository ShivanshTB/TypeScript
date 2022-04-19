interface person {
  name: string;
  gender: string;
}

interface emp extends person {
  Code: number;
}

let cd: emp = {
  Code: 1,
  name: "Sunny",
  gender: "Male",
};

console.log(cd.Code);
console.log(cd.name);
console.log(cd.gender);
