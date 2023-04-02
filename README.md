# Object oriented Programming in TypeScript


 This repo cover a range of topics  of object oriented programming in TypeScript. 

## Topics
The topics the 4 pillars of object oriented programming are covered in this repo. They are:

- Encapsulation
- Inheritance
- Polymorphism
- Abstraction


## Encapsulation: 

encapsulation is the process of binding data and methods together in a single unit. It is also known as data hiding. It is used to hide the implementation details from the user. It is used to achieve security and data integrity.

 here is an example of encapsulation in TypeScript:

```typescript

class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}

const person = new Person('John', 20);

console.log(person.getName()); // John
console.log(person.getAge()); // 20

```

in the above example, the name and age properties are private. This means that they can only be accessed within the class. The getName() and getAge() methods are public. This means that they can be accessed from outside the class. The getName() and getAge() methods are used to access the private properties.


## Inheritance:

 Inheritance is the process of deriving a new class from an existing class. The new class is called the derived class and the existing class is called the base class. The derived class inherits the properties and methods of the base class. The derived class can also add its own properties and methods.

 here is an example of inheritance in TypeScript:

```typescript

class Person {

    // base class properties
    private name: string;
    private age: number;

// constructor of the base class
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

// methods to access the private properties
    getName(): string {
        return this.name;
    }

// methods to access the private properties
    getAge(): number {
        return this.age;
    }
}

// derived class Student from base class Person
class Student extends Person {
    private studentId: number;

    constructor(name: string, age: number, studentId: number) {
        super(name, age);
        this.studentId = studentId;
    }

// methods to access the private properties
    getStudentId(): number {
        return this.studentId;
    }
}

const student = new Student('John', 20, 12345);

console.log(student.getName()); // John

console.log(student.getAge()); // 20

console.log(student.getStudentId()); // 12345

```

in the above example, the Student class is derived from the Person class. The Student class inherits the properties and methods of the Person class. The Student class also has its own properties and methods.


## Polymorphism:

 Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object.

 here is an example of polymorphism in TypeScript:

```typescript

class Person {

    // base class properties
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

// methods to access the private properties
    getName(): string {
        return this.name;
    }


// methods to access the private properties
    getAge(): number {
        return this.age;
    }
}


// derived class Student from base class Person
class Student extends Person {
    private studentId: number;

    constructor(name: string, age: number, studentId: number) {
        super(name, age);
        this.studentId = studentId;
    }

// methods to access the private properties
    getStudentId(): number {
        return this.studentId;
    }
}

// person and student are of type Person
const person = new Person('John', 20);

const student = new Student('John', 20, 12345);

// person and student are of type Person
function printPerson(person: Person) {
    console.log(person.getName());
    console.log(person.getAge());
}


// person and student are of type Person
printPerson(person); // John 20

printPerson(student); // John 20

```


## Abstraction:

 Abstraction is the process of hiding the implementation details from the user. It is used to achieve security and data integrity. It is achieved by using access modifiers. There are three access modifiers in TypeScript: public, private and protected.

 here is an example of abstraction in TypeScript:

```typescript


class Person {

    // base class properties
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

// methods to access the private properties

    getName(): string {
        return this.name;
    }

// methods to access the private properties

    getAge(): number {
        return this.age;
    }
}

const person = new Person('John', 20);

console.log(person.getName()); // John

console.log(person.getAge()); // 20

```

in the above example, the name and age properties are private. This means that they can only be accessed within the class. The getName() and getAge() methods are public. This means that they can be accessed from outside the class. The getName() and getAge() methods are used to access the private properties.

## Conclusion

In this repo, we have covered the 4 pillars of object oriented programming in TypeScript. They are:

- Encapsulation
- Inheritance
- Polymorphism
- Abstraction

## Author

- [Twitter](https://twitter.com/Clifftech_Dev)
- [Github](hhhttps://github.com/Clifftech123)
- [LinkedIn](https://www.linkedin.com/in/isaiah-clifford-opoku-a506a51b2/)
