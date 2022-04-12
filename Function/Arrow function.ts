let sum = (x: number, y: number): number => {
    return x + y;
}

console.log(sum(10, 20)); 

let printMsg = () : void => console.log("Hello, Arrow function");
printMsg();

class list{
    name: string;
    mobileNumber : number;

    constructor(name: string, num: number){
        this.name = name;
        this.mobileNumber = num;
    }

    display = () => console.log(this.name +" "+ this.mobileNumber);
}
let emp = new list("Shivansh",7710352296);
emp.display();

class group{
    title: string;
    student: string;
    constructor(title: string, studentName: string){
        this.title = title;
        this.student = studentName;
    }
    displayName = () => console.log(this.title +" "+ this.student);
}

let show = new group("Our group","Shivansh");
show.displayName();