class Clifford{
    public name: string;
    public age: number;
    public color: string;
    constructor(name: string, age: number, color: string){
        this.name = name;
        this.age = age;
        this.color = color;
    }

    // talk method
    public talk(): void{
       console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
    }

// SaySomething method
    public SaySomething(){
        console.log('Hi' + this.name);
    }
}


// crating  a  a new instance of Clifford
class Clifford2 extends Clifford{
    private weight: number;
    constructor(name: string, age: number, color: string, weight: number){
        super(name, age, color);
        this.weight = weight;
    }


    // overriding the talk method
    public talk(): void{
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old and I weigh ${this.weight}`);
    }


    // overriding the SaySomething method
    public SaySomething(){
        console.log('Hi' + this.name);
    }
}


//creating a new instance of Clifford
const CliffordInstance = new Clifford('Clifford', 5, 'Red');
CliffordInstance.talk();
CliffordInstance.SaySomething();


// creating a new instance of Clifford2
const Clifford2Instance = new Clifford2('Clifford', 5, 'Red', 100);
Clifford2Instance.talk();
Clifford2Instance.SaySomething();
