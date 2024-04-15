class Car{

    constructor(name, price, model, color){
        this.name = name
        this.price = price
        this.model = model
        this.color = color
    }

    refuel() {
        console.log(this.name + ' car is refueled')
    }
}

//new keyword to create the object
const c1 = new Car("BMW", 100, "520", "black")
console.log(c1.name)
console.log(c1.price)
console.log(c1.model)
console.log(c1.color)
c1.refuel()

console.log("------------------")
const c2 = new Car("Honda", 20, "Civic", "white")
console.log(c2.name)
console.log(c2.price)
console.log(c2.model)
console.log(c2.color)
c2.refuel()






class Animal {
    constructor(name, eyes) {
        this.name = name
        this.eyes = eyes
    }

    getName() {
        return (`The animal name is ${this.name}`)
    }
    canEat(){
        console.log(this.name + ' can eat')
    }
    canBreed(){
        console.log(this.name + ' can breed')
    }
    canBreath(){
        console.log(this.name + ' can breath')
    }
}
let animal1 = new Animal("tiger")
let animal2 = new Animal("cat", "yellow")
console.log(animal1.name)
console.log(animal1.getName())
animal1.canBreath()
animal1.canBreed()
animal1.canEat()
console.log('----------------------------------------------------')
console.log(animal2.name)
console.log(animal2.eyes)
console.log(animal2.getName())
animal2.canBreath()
animal2.canBreed()
animal2.canEat()


class Mammals extends Animal {
    constructor(name, eyes, skin, legs, claws) {
        super(name, eyes)
        this.skin = skin
        this.legs = legs
        this.claws = claws
    }

    canEat() {
        console.log(this.name + ' can eat meat')
    }

    hasBodyPart() {
        console.log(`${this.name} has 4 legs and ${this.claws} and ${this.skin}`)
    }
}

console.log('==================================')
let mammal1 = new Mammals('cat', 'green', 'fur', 4, 'sharp')
console.log(mammal1.name.toUpperCase())
console.log(mammal1.getName())
mammal1.canEat()
mammal1.hasBodyPart()

let mammal2 = new Mammals('tiger', 'yellow')
console.log(mammal2.getName())
