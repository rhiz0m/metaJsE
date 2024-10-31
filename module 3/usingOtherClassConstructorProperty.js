// Using class instance as another class' constructor's property

class StationaryBike {
  constructor(position, gears) {
    this.position = position
    this.gears = gears
  }
}

class Treadmill {
  constructor(position, modes) {
    this.position = position
    this.modes = modes
  }
}

class Gym {
  constructor(openHours, stationaryBikePos, treadmillpos) {
    this.openHours = openHours
    this.stationaryBikePos = new StationaryBike(stationaryBikePos, 8)
    this.treadmillpos = new Treadmill(treadmillpos, 4)
  }
}

var boxingGym = new Gym("08.00-20.00", "right-corner", "left-corner")

console.log(boxingGym) // output
/*
Gym {
  openHours: '08.00-20.00',
  stationaryBikePos: StationaryBike { position: 'right-corner', gears: 8 },
  treadmillpos: Treadmill { position: 'left-corner', modes: 4 }
}
  */
