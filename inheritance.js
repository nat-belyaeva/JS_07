//parent (super class)
class Automobile{
    constructor(number) {
        this.number = number

    }
    useAeroDynamic() {
        console.log("Automobile --- aerodynamic" + this.number)
    }


}
class Vehicle extends Automobile{
    constructor(make, model, year){
        super(1000)
        this.make = make
        this.model = model
        this.year = year
        }

       getInfo() {
        return `${this.make}, ${this.model}, ${this.year}`
       }

       startEngine() {
           console.log("Starting engine..." + this.make)
       }

    stopEngine() {
        console.log("Ending engine...")
    }
}

//child(Sub class)

class Car extends Vehicle {
    constructor(make, model, year, fuelTYpe) {
        super(make, model, year) //the parent class constructor
        this.fuelType = fuelTYpe
    }

    driverCar(){
        console.log('driving the car' + this.model +' ' + this.fuelType)
    }
}

//child(Sub class)

class Truck extends Vehicle {
    constructor(make, model, year, loadingCapacity) {
        super(make, model, year) //the parent class constructor
        this.loadingCapacity = loadingCapacity
    }

    driverTruck(){
        console.log('driving the truck' + this.model + " capacity " + this.loadingCapacity)
    }
}

//creating the objects (instances): new keyword:
const car = new Car("Honda", "Civic", 2024, "petrol")
const truck = new Truck("truck1", "model1", 2023, 500)

car.startEngine()
console.log(car.getInfo())

truck.startEngine()
console.log(truck.getInfo())
truck.driverTruck()
car.useAeroDynamic()