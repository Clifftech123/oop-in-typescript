// example one 


// The main class 
class Person {
    public name: string;
    public age: number;
  

    // constrictor appending  the properties to the class
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // method accessing the private properties name
    public talk(): void {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // creating an instance of the class
  class Student extends Person {
    public studentId: number;
  

    // constrictor appending   the properties to the student class
    constructor(name: string, age: number, studentId: number) {
      super(name, age);
      this.studentId = studentId;
    }
  
    // method accessing the private properties studentId
    public study(): void {
      console.log(`I am studying with student ID ${this.studentId}.`);
    }
  
    // method accessing the private properties studentId
    public talk(): void {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am also a student with student ID ${this.studentId}.`);
    }
  }
  
// end of the class Student 

// creating an instance of the class Student extending the class Person


class  Teachers  extends Person {
    public teacherId: number;
  

    // constrictor appending   the properties to the student class
    constructor(name: string, age: number, teacherId: number) {
      super(name, age);
      this.teacherId = teacherId;
    }
  
    // method accessing the private properties studentId
    public teach(): void {
      console.log(`I am teaching with teacher ID ${this.teacherId}.`);
    }
  
    // method accessing the private properties studentId
    public talk(): void {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am also a teacher with teacher ID ${this.teacherId}.`);
    }
  }


  const person = new Person("John", 20);
  person.talk(); // Output: "Hello, my name is John and I am 20 years old."
  
  const student = new Student("Jane", 18, 1234);
  student.talk(); // Output: "Hello, my name is Jane and I am 18 years old. I am also a student with student ID 1234."
  student.study(); // Output: "I am studying with student ID 1234."
  
    const teacher = new Teachers("Clifford", 30, 5678);

    teacher.talk(); // Output: "Hello, my name is Clifford and I am 30 years old. I am also a teacher with teacher ID 5678."

    teacher.teach(); // Output: "I am teaching with teacher ID 5678."
    