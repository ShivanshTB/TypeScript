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