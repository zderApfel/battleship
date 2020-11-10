const Ship = require("../src/gameObjects");
const Gameboard = require("../src/gameObjects");

const testShip = new Ship("Submarine", 3, false, false);
const testBoard = new Gameboard();

test.skip("Get a ship's health", () => {
    expect(testShip.health).toStrictEqual(
        [false,false,false]
    )
})

test.skip("Hit a ship's position", () => {
    testShip.hit(2)
    expect(testShip.health).toStrictEqual(
        [false,false,true]
    )
})

test.skip("Test if a ship is sunk", () => {
    console.log(testShip.health)
    testShip.hit(0);
    console.log(testShip.health)
    testShip.hit(1);
    testShip.hit(2);
    expect(testShip.isSunk).toStrictEqual(true)
})

test("Test if a ship not sunk after being hit twice", () => {
    testShip.hit(0);
    testShip.hit(2);
    expect(testShip.isSunk).toStrictEqual(false)
})

test.skip("Adds a ship to a game board", () => {
    expect(testBoard.placeShip("horizontal", ))
})
