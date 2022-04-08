var code;
code = 365;
// code = "Sunny";
// code = true;
console.log(code);
function display(code) {
    if (typeof (code) === "number")
        console.log("It's number");
    else if (typeof (code) === "string")
        console.log("It's string");
}
