var x = 60, y = 40;
if (x > y) {
    console.log("".concat(x, " is greater than ").concat(y, "."));
}
else if (x < y) {
    console.log("".concat(x, " is less than ").concat(y, ".")); //This will be executed
}
else if (x == y) {
    console.log("".concat(x, " is equal to ").concat(y, "."));
}
else {
    console.log("Wrong input");
}
