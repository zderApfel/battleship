const Ship = require("../src/gameObjects");
const Gameboard = require("../src/gameObjects");

const testShip = new Ship(3, false, false);
const testBoard = new Gameboard();

test("Get a ship's health", () => {
    expect(testShip.health).toStrictEqual(
        [false,false,false]
    )
})

test.skip("Hit a ship's position", () => {
    expect(testShip.hit(2)).toStrictEqual(
        [false,false,true]
    )
})

test.skip("Test if a ship is sunk", () => {
    testShip.hit(0);
    testShip.hit(1);
    testShip.hit(2);
    expect(testShip.isSunk).toStrictEqual(true)
})

test.skip("Test if a ship not sunk after being hit twice", () => {
    testShip.hit(0);
    testShip.hit(2);
    expect(testShip.isSunk).toStrictEqual(false)
})

test("Adds a ship to a game board", () => {
    expect(testBoard.placeShip)
})
