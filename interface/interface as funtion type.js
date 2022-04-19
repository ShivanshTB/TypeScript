function addKeyValue(key, value) {
    console.log("addKeyValue: key = " + key + ", value = " + value);
}
function updateKeyValue(key, value) {
    console.log("updateKeyValue: key = " + key + ", value = " + value);
}
var kvp = addKeyValue;
kvp(1, "Shivansh");
kvp = updateKeyValue;
kvp(2, "Sunny");
