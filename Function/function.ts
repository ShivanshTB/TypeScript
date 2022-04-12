function displayMessage(){
    console.log("Hello Typescript")
}

displayMessage();

function sumNum(num1: number, num2: number) {
    let result = num1 + num2;
    console.log(result)
    // return result;
}
sumNum(2,4);

let msg = function(){
    console.log("Hello function");
}
msg();

let mul = function(x: number, y:number){
    let result = x*y;
    console.log(result);
}

mul(2,4);

let  greeting = function(great: string , name: string): string{
return great+" "+name;
}
console.log(greeting("Hi","Shiavnsh"));


// let meet = function(msg: string, name?: string){
//     let result = meet+" "+name;
//     console.log(result);
// }
// meet("Hlo");
// meet("Hlo","Sunny");

function Greet(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}

console.log(Greet('Steve'));
console.log(Greet('Steve', 'Hi')); 
console.log(Greet('Bill')); 