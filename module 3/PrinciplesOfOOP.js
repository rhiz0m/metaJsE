/***
  The Principles of OOP
    The four fundamental OOP principles are     
    inheritance, encapsulation, abstraction and polymorphism.
 * 
 */

class Animal {
  constructor(type, speices, color, eatsMeat) {
    this.type = type
    this.speices = speices
    this.color = color
    this.eatsMeat = eatsMeat
  }
  eats() {
    if (this.eatsMeat) {
      return "is a meat eating animal!"
    } else {
      return "is a veggie eating animal!"
    }
  }
}

const croc = new Animal("Crocodile", "reptile", "green", true)
const capy = new Animal("Capybara", "rodent", "brown", false)

console.log(`This animal is a ${croc.type} and ${croc.eats()}`)
console.log(`This animal is a ${capy.type} and ${capy.eats()}`)

//***** */ OOP Principles: Inheritance ****

// class Animal { /* ...class code here... */ }
// class Bird extends Animal { /* ...class code here... */ }
// class Eagle extends Bird { /* ...class code here... */ }

//-----------------------------

//***** Principles: Encapsulation *****
//In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users,
//in the sense that they don't have to know how my code works in order to
//"consume" the code.

"abc".toUpperCase()

// I don't really need to worry or even waste time thinking about
//how the toUpperCase() method works. All I want is to use it,
//since I know it's available to me.

//------------------------------

//***** Abstraction *****

// Abstraction is all about writing code in a way that will make it
//more generalized.
// The concepts of encapsulation and abstraction are often
//misunderstood because their differences can feel blurry.

// It helps to think of it in the following terms:

//** An abstraction is about extracting the concept of
//what you're trying to do, rather than dealing with a
//specific manifestation of that concept.

//** Encapsulation is about you not having access to,
//or not being concerned with, how some implementation works internally.

// While both the encapsulation and abstraction are important
//concepts in OOP, it requires more experience with programming
//in general to really delve into this topic.

//--------------------------------

//***** OOP Principles: Polymorphism
// Polymorphism is a word derived from the Greek language meaning
// "multiple forms". An alternative translation might be:
// "something that can take on many shapes".
// So, to understand what polymorphism is about,
// let's consider some real-life objects.

// A door has a bell. It could be said that the bell is a property
// of the door object. This bell can be rung.
// When would someone ring a bell on the door? Obviously,
// to get someone to show up at the door.

// Now consider a bell on a bicycle. A bicycle has a bell.
// It could be said that the bell is a property of the bicycle object.
// This bell could also be rung. However, the reason, the intention,
// and the result of somebody ringing the bell on a bicycle
// is not the same as ringing the bell on a door.

const bicycle = {
  bell: function () {
    return "Ring, ring! Watch out, please!"
  },
}
const door = {
  bell: function () {
    return "Ring, ring! Come here, please!"
  },
}

function ringTheBell(thing) {
  console.log(thing.bell())
}
ringTheBell(bicycle) // Ring, ring! Watch out, please!
ringTheBell(door) // "Ring, ring! Come here, please!"

// Example: "Polymorphism"

class Bird {
  useWings() {
    console.log("Flying!")
  }
}
class Eagle extends Bird {
  useWings() {
    super.useWings()
    console.log("Barely flapping!")
  }
}
class Penguin extends Bird {
  useWings() {
    console.log("Diving!")
  }
}
var baldEagle = new Eagle()
var kingPenguin = new Penguin()
baldEagle.useWings() // "Flying! Barely flapping!"
kingPenguin.useWings() // "Diving!"
