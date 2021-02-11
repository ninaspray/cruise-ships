const Port = require("../src/Port")
 

let port, name;

beforeEach(() => {
    port = new Port(name);
    port.name = "dover";
    ship = {};
    titanic = {};
    santaMaria = {}; 
});

describe("Port", () => {
    it("Can be insantiated", () => {
        expect(new Port(name)).toBeInstanceOf(Object);
    });
    it("The port has a name", () => {
        expect(port.name).toBe("dover");
    });
    it("Can add a ship", () => {
        port.addShip(ship);
        expect(port.ships).toContain(ship);
    });
    it("Can remove a ship", () => {
        port.addShip(titanic);
        port.addShip(santaMaria);
        port.removeShip(ship);
        expect(port.ships).toEqual([titanic]);
    });
});