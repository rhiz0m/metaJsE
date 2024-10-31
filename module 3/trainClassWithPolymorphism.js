// Classes

class Train {
  constructor(color, lightsOn) {
    this.color = color
    this.lightsOn = lightsOn
  }
  toggleLights() {
    return (this.lightsOn = !this.lightsOn)
  }
  lightsStatus() {
    console.log(`Lights on?`, this.lightsOn)
  }
  getSelf() {
    console.log(this)
  }
  getPrototype() {
    var protoType = Object.getPrototypeOf(this)
    return protoType
  }
}

class HighSpeedTrain extends Train {
    constructor(color, lightsOn, highSpeedOn, passengers) {
        super(color, lightsOn) // super specify the properties that gets inherited from the super class
        this.highSpeedOn = highSpeedOn
        this.passengers = passengers
    }
    toggleHighSpeed() {
        this.highSpeedOn =! this.highSpeedOn
        console.log("High speed status?", this.highSpeedOn)
    }
    toggleLights() {
        super.lightsStatus()
        super.toggleLights()
        console.log(`Lights are 100% operational`)
    }
}

const firstTrain = new Train("blue", true)

const highSpeedTrain = new HighSpeedTrain("purple", false, true, 5)
console.log(highSpeedTrain)
//highSpeedTrain.toggleHighSpeed() // false
//highSpeedTrain.toggleHighSpeed() // true
highSpeedTrain.toggleLights()

console.log(highSpeedTrain)

highSpeedTrain.toggleLights()
console.log(highSpeedTrain)