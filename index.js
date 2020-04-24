/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
//Person class with name and age attributes
// should have a stomach that is an array
//has ability to eat food .eat(food). The food is pushed into the stomach array. Limit is 10.
//give person abiity to poop which empties stomach array completely .poop()
//make a method to return a sentence .toString `name and age'
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  } //methods go below this
  //give ability to eat with .eat(food)
  eat(food) {
    if (this.stomach.length < 10) {
      this.stomach.push(food);
    }
  } //ends eat method
  //give ability to poop
  poop() {
    this.stomach = [];
  } //end poop method
  //.toString method to say name and age
  toString() {
    return `"My name is ${this.name} and I'm ${this.age}.`;
  }
} //end Person class

//const personOne = new Person("Bobby", 45);

// console.log(personOne);
// console.log(personOne.stomach);
// console.log(personOne.eat("pizza"));
// console.log(personOne.stomach);
// console.log(personOne.poop);
// console.log(personOne.stomach);
// console.log(personOne.toString);

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
//car class with model and milePerGallon attributes
//tank and odometer are at 0
//give ability to fuel with gas .fill(gallons)
//gallons should be added to tank
//give car ability to drive a distance .drive(distance)
//distance should be added to odometer
//distance should deplete the tank
//if tank is out of gas then drive method should return strin I ran out of gas at ODOMETER miles
class Car {
  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.odometer = 0;
    this.tank = 0;
  } // ability to fill tank
  fill(gallons) {
    this.tank += gallons;
  } //ability to drive
  drive(distance) {
    this.odometer = this.odometer + distance; //distance adds to odometer
    //gas tank is tank - (distance/mpg)
    this.tank = this.tank - distance / this.milesPerGallon;
    if (this.tank <= 0) {
      // if tank is empty or beyond empty
      //th odometer = odmeter + (tank * mpg) to get a number above negative
      this.odometer = this.odometer + this.tank * this.milesPerGallon;
      this.tank = 0; //gas tank is empty
      //return the string saying when ran out of gas
      return `"I ran out of gas at ${this.odometer} miles."`;
    }
  }
}

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
// Lambdasian takes on parameter
//attributes should be name, age. location
//needs speak method to say Heloo my name is name and I am from location
class Lambdasian {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  } //ability to speak
  speak() {
    return `"Hello, my name is ${this.name}. I am from ${this.location}.`;
  } //end speak function
}

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
//Instructor is a child of Lamdasian
//has added attributes speciality, favLanguae and catchPhrase
class Instructor extends Lambdasian {
  constructor(instructorAttr) {
    super(instructorAttr); //calls Parent constructor
    this.specialty = instructorAttr.specialty;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
  } //methods go below this
  //method demo that has subject as parameter and returns a string
  demo(subject) {
    return `"Today we are learning about ${subject}."`;
  } //end demo
  // method grade that take student object and subject string
  //returns student name and subject
  grade(student, subject) {
    return `"${student.name} receives a perfect score on ${subject}.`;
  } //end grade method
  //STRETCH - add random grades to student grade
  gradeRandom(student, score) {
    let toss = Math.random() * 2;
    toss = Math.round(toss);
    if (student.grade >= 1 && student.grade <= 100) {
      if (toss === 1) {
        student.grade = student.grade + score; // add the score to student grade
      } else {
        student.grade = student.grade - score;
      } //end else
    } //end if statment
  } //end gradeRandom
} // end Instructor Class

/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student extends Lambdasian {
  constructor(stuAttr) {
    //constructor with student attributes
    super(stuAttr); //calls parent
    this.previousBackground = stuAttr.previousBackground;
    this.className = stuAttr.className;
    this.favSubjects = stuAttr.favSubjects;
    //stretch add property for student grade any number between 1-100
    this.grade = stuAttr.grade;
  } //methods go here
  listSubjects() {
    return `"Loving ${this.favSubjects}!`;
  } //end list subjects method
  //PRAssignment (subject) return student.name has submitted a PR for SUBJECT
  PRAssignment(subject) {
    return `"${this.name} has submitted a PR for ${subject}."`;
  } //end PRAssignment
  //sprint Challenge method but returns
  sprintChallenge(subject) {
    return `"${this.name} has begun sprint challenge ${subject}."`;
  } //end sprintChallenge
  //graduate method for student STRETCH
  graduate() {
    if(this.grade > 100){
      this.grade = this.grade - (this.grade - 100);
      if (this.grade >= 70) {
        return `"${this.name} has the score of ${this.grade}. Let them graduate!"`;
    } //end if statment
  }else if (this.grade < 0){
      this.grade = 1; //reset back to 1
      return `"They need to increase their score."`;
    }// end else if statement 
    } //end graduate method
  } //end  Student class


/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor {
  //constructor has single argument
  constructor(object) {
    super(object); //super snitches to parent
    this.gradClassName = object.gradClassName;
    this.favInstructor = object.favInstructor;
  } //end constructor
  //start methods
  //standUp that takes slack channel and returns name announces to channel
  standUp(channel) {
    return `"${this.name} announces to ${channel}, @${channel} standy times!"`;
  } //end standUp method
  //debugsCode method takes studentObject and subject returns name debugs...
  debugsCode(student, subject) {
    return `"${this.name} debugs ${student.name}'s code on ${subject}."`;
  } //end
}

/*
  STRETCH PROBLEM (no tests!)
    [x]- Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/
//STRETCH test
const instructorOne = new Instructor({
  name: "Will",
  age: 50,
  location: "USA",
  specialty: "Python",
  favLanguage: "JavaScript",
  catchPhrase: "Do it.",
});
const studentOne = new Student({
  name: "Mimi",
  age: 20,
  location: "USA",
  previousBackground: "Kindergarten Teacher",
  className: "CS136",
  favSubjects: "HTML, CSS, Python and JavaScript",
  grade: 50,
}); //end studentOne

console.log(studentOne.speak());
console.log(studentOne.age);
console.log(studentOne.previousBackground);
console.log(studentOne.className);
console.log(studentOne.favSubjects);
console.log(studentOne.grade);
instructorOne.gradeRandom(studentOne, 60);
instructorOne.gradeRandom(studentOne, 20);
instructorOne.gradeRandom(studentOne, 30);
console.log(studentOne.grade);
console.log(studentOne.graduate());
console.log(studentOne.grade);

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Lambdasian) {
    module.exports.Lambdasian = Lambdasian;
  }
  if (Instructor) {
    module.exports.Instructor = Instructor;
  }
  if (Student) {
    module.exports.Student = Student;
  }
  if (ProjectManager) {
    module.exports.ProjectManager = ProjectManager;
  }
}
