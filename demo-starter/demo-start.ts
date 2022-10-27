//type-safe

console.log("Typescript dosyasından merhaba");

function sayHello(name:string){
    console.log(`Hello ${name}`)
    //return "" string döndürür
}

//sayHello(1); // name:string dediğin zaman çalışmaz
sayHello("ekin");

let sumFunction = (a1:number,a2:number): number => {
    return a1 + a2;
};
let sumOfNumbers : number = sumFunction(5,6);
console.log(sumOfNumbers);

class Greeter{
    private name: string;
    constructor(name:string){
        this.name = name;
    }
    sayHi(){
        console.log(`Hello ${this.name}`);
        this.sayWhatsUp();
    }
    private sayWhatsUp(){ //sadece class içinde kullanılır.
        console.log("Whats up?")
    }
}
let greeter = new Greeter("eko");
greeter.sayHi();

//built-in

class User{
    name:string;
    surname:string;
    age:number;
    constructor(name:string,surname:string, age:number){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

class userService{
    private users:User[]=[];
    add(user:User){
        this.users.push(user)
    }
    getUserNames(): User[]{
        return this.users;
    }
    
}


// class userService{
//     private users:string[]=[];
//     add(name:string){
//         this.users.push(name)
//     }
//     getUserNames(): string[]{
//         return this.users;
//     }
    
// }
// let gg = new userService();
// gg.add("ekin");
// gg.add("ecesu");
// gg.add("furkan");
// console.log(gg.getUserNames());