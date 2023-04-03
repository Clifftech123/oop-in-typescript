// The concept of abstraction is to hide the implementation details and only show the functionality to the user.

// Abstract class

// abstract class Person 


// Example 1 

class PersonOne {
    private name: string;
    private age: number;
    private id: number;


    // constrictor appending  the properties to the class
    constructor(name: string, age: number, id: number) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

    // method accessing the private properties

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getId(): number {
        return this.id;
    }


}

// creating an instance of the class

const personOne = new PersonOne('John', 15, 1);
console.log(personOne.getName()); // John
console.log(personOne.getAge()); // 15
console.log(personOne.getId()); // 1


abstract class Person {
  public name: string;
  public age: number;
  public id: number;


  // constrictor appending  the properties to the class
    constructor(name: string, age: number, id: number) {
        this.name = name;
        this.age = age;
        this.id = id;
    }


    // abstract method
    public talk(): void {
        
    }
}
 

// class Student extends Person

class Student extends Person {
    public grade: number;

    constructor(name: string, age: number, id: number, grade: number) {
        super(name, age, id);
        this.grade = grade;
    }

    public talk(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old and I am in grade ${this.grade}.`);
    }
}


// Creating an instance of the class
const student = new Student('John', 15, 1, 10);
student.talk(); // Hello, my name is John and I am 15 years old and I am in grade 10.


// class Teacher extends Person
class Teacher extends Person {
    public subject: string;

    constructor(name: string, age: number, id: number, subject: string) {
        super(name, age, id);
        this.subject = subject;
    }

    public talk(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old and I teach ${this.subject}.`);
    }
}


//  Creating an instance of the class

const teacher = new Teacher('Jane', 35, 2, 'Math');
teacher.talk(); // Hello, my name is Jane and I am 35 years old and I teach Math.