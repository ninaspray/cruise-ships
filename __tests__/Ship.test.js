/* globals describe it expect */
const { Ship } = require('../src/Ship');

describe('Ship', () => {
    it('Can be insantiated', () => {
        const ship = new Ship()

        expect(ship).toBeInstanceOf(Object);
    });
    it('Has a starting port', () => {
        const ship = new Ship('Dover')

        expect(ship.startingPort).toBe('Dover');
    });

});