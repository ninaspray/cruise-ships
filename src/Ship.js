class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary,                            
    this.currentPort = itinerary.ports[0],
    this.previousPort = null;

  };
  setSail(){
  const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);
  const lastPortIndex = this.itinerary.ports.length - 1;
  if(currentPortIndex === (this.itinerary.ports.length - 1)) {
    throw new Error("Your cruise has now ended :(")
  };
  this.previousPort = this.currentPort;
  this.currentPort = null;
  };

  dock(){
  const itinerary = this.itinerary;
  const prevPortIndex = itinerary.ports.indexOf(this.previousPort);
  this.currentPort = itinerary.ports[prevPortIndex + 1];
  this.currentPort.addShip(this);
    };
    };

module.exports = Ship;