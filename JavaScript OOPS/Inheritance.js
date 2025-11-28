// Inheritance
// Using extends keyword to create child classes from parent classes
class Animal {
  speak() {
    console.log("This animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof! Woof!");
  }
}

const pet = new Dog();
pet.speak();  // Woof! Woof!
