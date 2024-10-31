// Designing an OO Program

class Animal {
  constructor(color = "white", energy = 100) {
    this.color = color
    this.energy = energy
  }
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20
      console.log(`the energy is currently at: ${this.energy}`)
    } else if (this.energy <= 0) {
      this.sleep()
    }
  }
  sleep() {
    this.energy += 20
    console.log(`Energy is increasing with: ${this.energy}`)
    console.log("zzzzzzzz....")
  }
  getColor() {
    console.log(this.color)
  }
}

class Cat extends Animal {
  constructor(
    sound = "purr, puuuur",
    canJumpHigh = true,
    canClimbTrees = true,
    color,
    energy
  ) {
    super(color, energy)
    this.sound = sound
    this.canJumpHigh = canJumpHigh
    this.canClimbTrees = canClimbTrees
  }
  makeSound() {
    console.log(this.sound)
  }
}

// const testCat = new Cat()
// console.log(testCat)

class Bird extends Animal {
  constructor(sound = "pip, pip", canFly = true, color = "black", energy) {
    super(color, energy)
    this.sound = sound
    this.canFly = canFly
  }
  makeSound() {
    this.sound = "Wooo-hoooooo!!"
    console.log(this.sound)
  }
}

const testBird = new Bird()
//console.log(testBird.makeSound())

class HouseCat extends Cat {
  constructor(
    houseCatSound = "Meeeeooooow!!",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(color, energy, sound, canClimbTrees, canJumpHigh)
    this.houseCatSound = houseCatSound
  }
  makeSound(option) {
    if (option) {
      super.makeSound()
    } else {
      console.log(this.houseCatSound)
    }
  }
}

var houseCat = new HouseCat()
houseCat.makeSound(true)

class Tiger extends Cat {
  constructor(
    tigerSound = "Rrrrrrrrroarr!!",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(color, energy, sound, canClimbTrees, canJumpHigh)
    this.tigerSound = tigerSound
  }
  makeSound(option) {
    if (option) {
      super.makeSound()
    } else {
      console.log(this.tigerSound)
    }
  }
}

var tiger = new Tiger()
tiger.makeSound(false)

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy)
    this.canTalk = canTalk
  }
  makeSound(option) {
    if (option) {
      super.makeSound()
    }
    if (this.canTalk) {
      console.log("I'm a talking parrot!")
    }
  }
}

var polly = new Parrot()
polly.canTalk = true
polly.makeSound(true)
console.log(polly)

var polly = new Parrot(false)
console.log(polly)
