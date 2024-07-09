class Animal{
    constructor(name,legCount,voice){
        this.name = name;
        this.legCount = legCount;
        this.voice = voice;
    }
    describe(){
        console.log(`${this.name} has ${this.legCount} legs and make noice ${this.voice}`)
    }
    speak(){
        console.log("hi there "+this.voice)
    }
    static iamStatic(){
        console.log("hello i am static method")
    }
    static sum(a,b){
        return a+b
    }
}

let dog1 = new Animal("shero",4,"bhow bhow");
let cat = new Animal("billoo",4,"meow meow");
cat.speak();

Animal.iamStatic();
console.log(Animal.sum(2,3));