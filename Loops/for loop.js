// for loop
for (var i = 0; i < 3; i++) {
    console.log("Number: " + i);
}
// for of loop
// for...of loop to iterate and access elements of an array, list, or tuple collection.
var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val);
}
//for in loop
// The for...in loop iterates through a list or collection and returns an index on each iteration.
var num = [10, 20, 30, 40];
for (var index in num) {
    console.log("Index: " + index);
    console.log("Value: " + num[index]);
}
