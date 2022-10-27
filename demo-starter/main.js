//type-safe
console.log("Typescript dosyasından merhaba");
function sayHello(name) {
    console.log("Hello ".concat(name));
    //return "" string döndürür
}
//sayHello(1); // name:string dediğin zaman çalışmaz
sayHello("ekin");
var sumFunction = function (a1, a2) {
    return a1 + a2;
};
var sumOfNumbers = sumFunction(5, 6);
console.log(sumOfNumbers);
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.sayHi = function () {
        console.log("Hello ".concat(this.name));
        this.sayWhatsUp();
    };
    Greeter.prototype.sayWhatsUp = function () {
        console.log("Whats up?");
    };
    return Greeter;
}());
var greeter = new Greeter("eko");
greeter.sayHi();
var userService = /** @class */ (function () {
    function userService() {
        this.users = [];
    }
    userService.prototype.add = function (name) {
        this.users.push(name);
    };
    userService.prototype.getUserNames = function () {
        return this.users;
    };
    return userService;
}());
var gg = new userService();
gg.add("eko");
console.log(gg.getUserNames());
