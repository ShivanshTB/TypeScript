// for loop

for (let i = 0; i < 3; i++) {
    console.log ("Number: " + i);
}  


// for of loop
// for...of loop to iterate and access elements of an array, list, or tuple collection.

let arr :Array<number>= [10, 20, 30, 40];

for (var val of arr) {
  console.log(val);
}

//for in loop
// The for...in loop iterates through a list or collection and returns an index on each iteration.

let num: Array<number> = [10, 20, 30, 40];

for (var index in num) {
  console.log("Index: "+index);

  console.log("Value: "+num[index]);
}