class Car{
    minSpeed = 100
    constructor(make, model) {
        this.make = make
        this.model = model
    }
    startEngine() {
        console.log("Starting engine..for Car")
    }
}

// class Audi extends Car{
//     minSpeed = 200
//     //overriden method
//
// startEngine() {
//     console.log("Starting engine..for Audi")
// }
// autoParking() {
//     console.log('Audi - autoparking')
// }
// }
// const audi = new Audi()
// audi.startEngine()
// audi.autoParking()
// console.log(audi.minSpeed)
//
// // parent can't use method from child class
// const car = new Car()
// car.startEngine()
// //car.autoParking
