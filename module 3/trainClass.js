// Classes

class Train {
  constructor(color, lightsOn) {
    this.color = color
    this.lightsOn = lightsOn
  }
  toggleLights() {
    return this.lightsOn =! this.lightsOn
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

var myFirstTrain = new Train("yellow", true)
var mySecondTrain = new Train("blue", false)
// console.log(mySecondTrain.lightsStatus()) 
// mySecondTrain.toggleLights() 
// console.log(mySecondTrain.lightsStatus()) 

myFirstTrain.getSelf()

console.log(Object.getOwnPropertyNames(myFirstTrain.getPrototype()))
// shows an array of the prototypes methods 
