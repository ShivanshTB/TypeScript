let num : number = 1;
function demo(){
    let num: number = 2;
    if(true){
        let num: number = 3;
        console.log(num)
    }
    console.log(num);
}
console.log(num);
demo();

let first:number = 123;  
let second: number = 0x37CF;  
let third:number=0o377 ;      
let fourth: number = 0b111001  

console.log(first);  
console.log(second); 
console.log(third);  
console.log(fourth);