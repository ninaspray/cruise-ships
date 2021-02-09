class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary,
    this.startingPort = this.startingPort,
    this.currentPort = this.currentPort
  }
  setSail(){
  this.startingPort = 0;
  };
  dock(port){
    this.currentPort = port;
    };
}

module.exports = Ship;