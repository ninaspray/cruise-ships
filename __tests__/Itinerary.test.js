const Itinerary = require("../src/Itinerary");
const Port = require("../src/Port");
 
//let itinerary, dover, hull;
//beforeEach(() => {
    //const hull = new Port("hull");
    //const dover = new Port("dover");
    //const itinerary = new Itinerary([dover, hull]);
//});

describe("Itinerary", () => {
    it("Can be insantiated", () => {
        expect(Itinerary).toBeInstanceOf(Object);
    });
    it("can have ports", () => {
        const hull = new Port("hull");
        const dover = new Port("dover");

        const itinerary = new Itinerary ([dover, hull]);

        expect(itinerary.ports).toEqual([dover,hull]);
    });
});