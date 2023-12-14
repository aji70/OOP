'use strict';
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
    console.log(2023 - this.birthYear);
}

// CONSRTUCTOR FUNCTION

const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype) // LINKING STUDENT TO PERSON (INHERITANCE)

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName}, i was born in ${this.birthYear}, i am studying ${this.course}`);
}

const aji = new Student('Aji', 1994, 'Computer Science')

const diana = new Student('Diana', 1997, 'English and Poetry')
diana.introduce()
aji.introduce()
diana.calcAge()