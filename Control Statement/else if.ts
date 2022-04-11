let x: number = 60, y: number = 40;
if (x > y) 
{
    console.log(`${x} is greater than ${y}.`);
} 
else if (x < y)
{
    console.log(`${x} is less than ${y}.`); //This will be executed
}
else if (x == y) 
{
    console.log(`${x} is equal to ${y}.`);
}else{
    console.log("Wrong input");
}