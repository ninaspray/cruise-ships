/* globals describe it expect */
const Ship = require("../src/Ship")
const Port = require("../src/Port")
const Itinerary = require('../src/Itinerary')

let ship, port, itinerary, hull, dover;

beforeEach(() => {
    dover = new Port ("dover");
    hull = new Port("hull");
    port = new Port("dover");
    itinerary = new Itinerary([port, dover, hull]);
    ship = new Ship(itinerary);
})


describe("Ship", () => {

    it("Can be instantiated", () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        expect(ship.currentPort).toBe(port);
      });

    it("can set sail", () => {
    ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port);
        expect(dover.ships).not.toContain(ship);
    });

    it("can dock at a different port", () => {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(dover);
        expect(dover.ships).toContain(ship)
        ship.setSail();
    });

    it("can't set sail further than it's itinerary", () => {
        ship.setSail();
        ship.dock();
        ship.setSail();
        ship.dock();
        expect(()=> ship.setSail()).toThrowError("Your cruise has now ended :(");
    });

});