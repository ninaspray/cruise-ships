/* globals describe it expect */
const Ship = require("../src/Ship")
const Port = require("../src/Port")

let ship, port;

beforeEach(() => {
    ship = new Ship(port);
    port = new Port("dover");
    ship.startingPort = "dover";
})


describe("Ship", () => {
    it("Can be insantiated", () => {
        expect(ship).toBeInstanceOf(Object);
    });
    it("has a starting port", () => {
        expect(ship.startingPort).toBe("dover");
    });
    it("can set sail", () => {
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
});