class Port {
    constructor (name, itinerary ) {
        this.name = name;
        this.ships = [];
        //itinerary = {ports:["dover", "hull"]};
    }
    addShip(ship) {
        this.ships.push(ship);
    }
    removeShip(ship) {
        const shipIndex = this.ships.indexOf(ship); 
        this.ships.splice(shipIndex, 1);
    }
}

module.exports = Port;