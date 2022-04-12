var sum = function (x, y) {
    return x + y;
};
console.log(sum(10, 20));
var printMsg = function () { return console.log("Hello, Arrow function"); };
printMsg();
var list = /** @class */ (function () {
    function list(name, num) {
        var _this = this;
        this.display = function () { return console.log(_this.name + " " + _this.mobileNumber); };
        this.name = name;
        this.mobileNumber = num;
    }
    return list;
}());
var emp = new list("Shivansh", 7710352296);
emp.display();
var group = /** @class */ (function () {
    function group(title, studentName) {
        var _this = this;
        this.displayName = function () { return console.log(_this.title + " " + _this.student); };
        this.title = title;
        this.student = studentName;
    }
    return group;
}());
var show = new group("Our group", "Shivansh");
show.displayName();
new group("Our group", "Sunny");
show.displayName();
