class Pet {
    constructor(name, eaten) {
      this._name = name;
      this._eaten = eaten;
    }
    hungry() {
      if (!this._eaten) {
        console.log(`${this._name} is hungry`);
      } else {
        console.log(`${this._name} has eaten!`);
      }
    }
    eating() {
      console.log(`${this._name} is eating!`);
      this._eaten = true;
    }
  
    speak() {
      console.log(`${this._name} says hello`);
    }
  }

  let dog = new Pet("Bob", true);
  dog.hungry();

  