var fruits = ['Apple', 'Orange', 'Banana'];
console.log(fruits);
var ids;
ids = [23, 43, 100, 134, 44];
console.log(ids);
var mix = ['Apple', 23, 'Orange', 365, 'Kiwi', 440];
console.log(mix);
var wow = ['Apple', 'Orange', 'Banana'];
console.log(wow[0]);
console.log(wow[1]);
console.log(wow[2]);
console.log(wow[3]);
for (var index in fruits) {
    console.log(fruits[index]);
}
for (var i = 0; i < ids.length; i++) {
    console.log(ids[i]);
}
