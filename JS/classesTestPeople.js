// classes test 
class People {
    constructor(name, age, gender, greeting) {
      this._name = name;
      this._age = age;
      this._gender = gender;
      this._greeting = greeting;
    }
    speak() {
      console.log(`${this._name} says good morning!`);
    }
  }

  

  class Teacher extends People{
      constructor(name, age, gender, greeting, mark){
          super(name, age, gender, greeting);
          this._mark = mark;
      }
    speak(){
        super.speak();
        console.log(`${this._name} says good morning class!`);
    }

    markWork(){
        console.log(`Your score is ${this._mark}`);
    }

  }

  class Student extends People{
    constructor(name, age, gender, greeting, breaktime){
        super(name, age, gender, greeting);
        this._breaktime = breaktime;
    }
  
    speak(){
        super.speak();
        console.log(`${this._name} says hiya!`);
    }

    isItBreak(){
        if (this._breaktime){
        console.log(`I'm off to break`);

        }else{
        console.lof(`When is breaktime?`);
        }
    }
}

let person = new People("Bob", 23, "female", "Hiya");
person.speak();

let teacher = new Teacher("Gary", 45, "male", "What ho!", 78);
teacher.speak();
teacher.markWork();

let student = new Student("Percival", 21, "male", "Oi oi!", true);
student.speak();
student.isItBreak();