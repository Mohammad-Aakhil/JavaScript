//--CLASSES in JavaScript--//
//A Class in javascript is an program-code template(blueprint) for creating objects
//These objects will have same state(variables) and behaviour(methods) inside it.

class ToyotoCar {
    constructor(){
        console.log("I'm from constructor")
    }
    start() {
        console.log("Car Started...")
    }
    stop() {
        console.log("Car Stopped...")
    }
    setBrand(brand) {
        this.brandName = brand
    }
}

let car1 = new ToyotoCar()
car1.start()
car1.stop()

let car2 = new ToyotoCar()
car2.setBrand('Nexus')











