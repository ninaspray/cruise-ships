const Port = require("../src/Port")
 

let port, name;

beforeEach(() => {
    port = new Port(name);
    port.name = "dover"
});

describe("Port", () => {
    it("Can be insantiated", () => {
        expect(new Port(name)).toBeInstanceOf(Object);
    });
    it("The port has a name", () => {
        expect(port.name).toBe("dover");
    });
});