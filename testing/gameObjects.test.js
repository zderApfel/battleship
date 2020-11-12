const Ship = require("../src/gameObjects").Ship;
const Gameboard = require("../src/gameObjects").Gameboard;

const testShip = new Ship("Submarine", 3);
const testShip2 = new Ship("Battleship", 4);
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
    testShip.place(32, "x+", testBoard);
    expect(testShip.coordinates).toStrictEqual([32,33,34]);
})

test("Place a ship on a gameboard", () => { //Test if coordinates are properly being occupied by the ship when one is places
    expect(testBoard.cells[32].isOccupied).toStrictEqual(true);
})

test("Place a second ship on the board, but cannot because one of the spaces is already occupied", () => {
    testShip2.place(34, "x-", testBoard);
    expect(testShip2.coordinates).toStrictEqual(["INVALID"])
})
