// 'use strict';
// const Person = function(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function(){
//     console.log(2023 - this.birthYear);
// }

// // CONSRTUCTOR FUNCTION

// const Student = function(firstName, birthYear, course){
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// }

// Student.prototype = Object.create(Person.prototype) // LINKING STUDENT TO PERSON (INHERITANCE)

// Student.prototype.introduce = function(){
//     console.log(`My name is ${this.firstName}, i was born in ${this.birthYear}, i am studying ${this.course}`);
// }

// Student.prototype.constructor = Student; // SETTING THE CONSTRUSTOR TYPE TO STUDENT
// const aji = new Student('Aji', 1994, 'Computer Science')

// const diana = new Student('Diana', 1997, 'English and Poetry')
// diana.introduce()
// aji.introduce()
// diana.calcAge()




// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
//   };
  
//   Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   };
  
//   Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   };
  
//   const bmw = new Car('BMW', 120);
//   const mercedes = new Car('Mercedes', 95);
  
//   bmw.accelerate();
//   bmw.accelerate();
//   bmw.brake();
//   bmw.accelerate();
  

//   const EV = function(make,speed,charge){
//     Car.call(this, make,speed)
//     this.charge = charge;
//   }
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo){
//   this.charge = chargeTo;
// }
// EV.prototype.accelerate = function(){
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`)
// }

// const accord = new EV('Tesla', 100, 10);
// accord.chargeBattery(50);
// accord.accelerate();
// accord.accelerate();
// accord.brake()
// accord.chargeBattery(100);
// accord.accelerate();
// accord.brake()
// accord.accelerate()
// accord.accelerate();
// accord.brake()
// accord.brake()
// accord.brake()
// accord.brake()
// accord.brake()

//   class CarCl {
//     constructor(make, speed) {
//       this.make = make;
//       this.speed = speed;
//     }
  
//     accelerate() {
//       this.speed += 10;
//       console.log(`${this.make} is going at ${this.speed} km/h`);
//     }
  
//     brake() {
//       this.speed -= 5;
//       console.log(`${this.make} is going at ${this.speed} km/h`);
//     }
  
//     get speedUS() {
//       return this.speed / 1.6;
//     }
  
//     set speedUS(speed) {
//       this.speed = speed * 1.6;
//     }
//   }
  
//   const ford = new CarCl('Ford', 120);
//   console.log(ford.speedUS);
//   ford.accelerate();
//   ford.accelerate();
//   ford.brake();
//   ford.speedUS = 50;
//   console.log(ford);


// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
  
    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
      console.log(2037 - this.birthYear);
    }
  
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
  
    get age() {
      return 2037 - this.birthYear;
    }
  
    // Set a property that already exists
    set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name!`);
    }
  
    get fullName() {
      return this._fullName;
    }
  
    // Static method
    static hey() {
      console.log('Hey there 👋');
      console.log(this);
    }
  }
  //INHERITANCE IN ES6 CLASSES
  
  class StudentCl extends PersonCl {
    constructor (fullName, birthYear,course){
      super(fullName, birthYear);
      this.course = course;
    }
  
    
    introduce (){
      console.log(`My name is ${this.fullName}, i was born in ${this.birthYear}, i am studying ${this.course}`);
  }
  
  calcAge(){
    console.log(`i am ${2023 - this.birthYear} years old but i feel ${2023 - this.birthYear + 10}years`);
  }
  }  
  
  const martha = new StudentCl('Martha Jones', 2003, "Theatre Arts" )
  martha.introduce();
  martha.calcAge();
  
  
  const PersonProto = {
    calcAge(){
      console.log(2023 - this.birthYear)
    },
    init(firstName, birthYear){
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  }
  
  const steven = Object.create(PersonProto);