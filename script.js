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

// //   class CarCl {
// //     constructor(make, speed) {
// //       this.make = make;
// //       this.speed = speed;
// //     }
  
// //     accelerate() {
// //       this.speed += 10;
// //       console.log(`${this.make} is going at ${this.speed} km/h`);
// //     }
  
// //     brake() {
// //       this.speed -= 5;
// //       console.log(`${this.make} is going at ${this.speed} km/h`);
// //     }
  
// //     get speedUS() {
// //       return this.speed / 1.6;
// //     }
  
// //     set speedUS(speed) {
// //       this.speed = speed * 1.6;
// //     }
// //   }
  
// //   const ford = new CarCl('Ford', 120);
// //   console.log(ford.speedUS);
// //   ford.accelerate();
// //   ford.accelerate();
// //   ford.brake();
// //   ford.speedUS = 50;
// //   console.log(ford);


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


