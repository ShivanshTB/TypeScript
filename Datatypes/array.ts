let fruits: string[] = ['Apple','Orange','Banana'];
console.log(fruits);

let ids: Array<number>;
ids = [23, 43, 100, 134, 44];
console.log(ids);

let mix: Array<string | number> = ['Apple',23,'Orange',365,'Kiwi',440];
console.log(mix);

let wow: string[] = ['Apple','Orange','Banana'];
console.log(wow[0]);
console.log(wow[1]);
console.log(wow[2]);
console.log(wow[3]);

for(var index in fruits){
    console.log(fruits[index]);
}
for(let i = 0;i<ids.length;i++){
    console.log(ids[i]);
}