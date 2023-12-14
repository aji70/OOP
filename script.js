'use strict';
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
    console.log(2023 - this.birthYear);
}

aji('Aji', 1994) = new Person;
console.log(aji)