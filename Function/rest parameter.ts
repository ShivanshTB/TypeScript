function Greet(greeting: string, ...names: string[]) {
    let result =  greeting + " " + names;
    return result;   
}

console.log(Greet("Hello", "Shivansh", "Sharma")); 
console.log(Greet("Hello"));