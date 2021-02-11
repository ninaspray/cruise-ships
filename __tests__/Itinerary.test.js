const Itinerary = require("../src/Itinerary");
//const Port = require("../src/Port");
 

describe("Itinerary", () => {
    it("Can be insantiated", () => {
        expect(Itinerary).toBeInstanceOf(Object);
    });
    it("can have ports", () => {
        const hull = jest.fn();
        const dover = jest.fn();
        const itinerary = new Itinerary ([dover, hull]);

        expect(itinerary.ports).toEqual([dover,hull]);
    });
});