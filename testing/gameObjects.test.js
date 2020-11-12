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

test.skip("Test if a ship not sunk after being hit twice", () => {
    testShip.hit(0);
    testShip.hit(2);
    expect(testShip.isSunk).toStrictEqual(false)
})

test("Place a ship on a gameboard", () => { //Make coordinates for a boat. No consideration for out of bounds yet
    testShip.place(32, "x+");
    expect(testShip.coordinates).toStrictEqual([32,33,34]);
})

