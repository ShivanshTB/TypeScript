let code:(string | number);
code = 365;
// code = "Sunny";
// code = true;

console.log(code);

function display(code: (string | number)){
    if(typeof(code) === "number")
    console.log("It's number")
    else if(typeof(code) === "string")
    console.log("It's string")
}
