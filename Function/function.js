function displayMessage() {
    console.log("Hello Typescript");
}
displayMessage();
function sumNum(num1, num2) {
    var result = num1 + num2;
    console.log(result);
    // return result;
}
sumNum(2, 4);
var msg = function () {
    console.log("Hello function");
};
msg();
var mul = function (x, y) {
    var result = x * y;
    console.log(result);
};
mul(2, 4);
var greeting = function (great, name) {
    return great + " " + name;
};
console.log(greeting("Hi", "Shiavnsh"));
// let meet = function(msg: string, name?: string){
//     let result = meet+" "+name;
//     console.log(result);
// }
// meet("Hlo");
// meet("Hlo","Sunny");
function Greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}
console.log(Greet('Steve'));
console.log(Greet('Steve', 'Hi'));
console.log(Greet('Bill'));
