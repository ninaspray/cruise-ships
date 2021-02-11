/* globals describe it expect */
const Ship = require("../src/Ship")
//const Port = require("../src/Port")
//const Itinerary = require("../src/Itinerary")

let ship, port, itinerary, hull, dover;

beforeEach(() => {
    dover = { name: "Dover", ships: [], addShip: jest.fn(), removeShip: jest.fn() };
    hull = { name: "Hull", ships: [], addShip: jest.fn(), removeShip: jest.fn() };
    itinerary = { ports: [dover, hull] };
    ship = new Ship(itinerary);
})


describe("Ship", () => {

    it("Can be instantiated", () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        expect(ship.currentPort).toBe(dover);
      });

    it("can set sail", () => {
    ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(dover);
        expect(dover.ships).not.toContain(ship);
    });

    it("can dock at a different port", () => {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(hull);
        expect(hull.addShip).toHaveBeenCalledWith(ship)
    });

    it("can't set sail further than it's itinerary", () => {
        ship.setSail();
        ship.dock();
        expect(()=> ship.setSail()).toThrowError("Your cruise has now ended :(");
    });

});