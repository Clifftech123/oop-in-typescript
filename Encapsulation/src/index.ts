

// example one 

// Ths is  the main  class
class Person {
    private name: string;
    protected age: number;
  

    // constrictor appending  the properties to the class
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // method accessing the private properties name 
    public getName(): string {
      return this.name;
    }
  

     // method accessing the private properties age

     public getAge(): number {
      return this.age;
     }
  
  }


// creating an instance of the class
const person = new Person('Clifford', 20);
console.log(person.getName()); // Output: "Clifford"
console.log(person.getAge()); // Output: 20


  // creating an instance of the class Person extending the class Person
  
  class Student extends Person {
    private studentId: number;
  
    // constrictor appending  the properties to the class
    constructor(name: string, age: number, studentId: number) {
      super(name, age);
      this.studentId = studentId;
    }
  
    // method accessing the private properties studentId
    public getStudentId(): number {
      return this.studentId;
    }
  
    // method accessing the private properties studentId
    public setStudentId(studentId: number): void {
      this.studentId = studentId;
    }
  }
  

  // creating an instance of the class Student extending the class Person
  const student = new Student("John", 20, 1234);
  console.log(student.getName()); // Output: "John"
  console.log(student.getName()); // Output: "Jane"
  console.log(student.getStudentId()); // Output: 1234
  


  // Example 2 

    // Ths is  the main  class
class PersonTwo {
    private name: string;
    protected age: number;
    private id: number;
    protected address: string;
  

    // constrictor appending  the properties to the class
    constructor(name: string, age: number , id: number, address: string) {
      this.name = name;
      this.age = age;

        this.id = id;
        this.address = address;
    }
  
    // method accessing the private properties name 
    public getName(): string {
      return this.name;
    }
  

     // method accessing the private properties age

     public getAge(): number {
      return this.age;
     }
  

        // method accessing the private properties id

        public getId(): number {
            return this.id;
             
        }
  
   // method accessing the private properties address

    public getAddress(): string {
        return this.address;
    }

}

// creating an instance of the class

const personTwo = new PersonTwo('Clifford', 20, 20, '20' );
console.log(personTwo.getName()); // Output: "Clifford"
console.log(personTwo.getAge()); // Output: 20
console.log(personTwo.getId()); // Output: 20
console.log(personTwo.getAddress()); // Output: 20