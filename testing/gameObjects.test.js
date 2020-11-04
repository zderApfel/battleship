const Ship = require("../src/gameObjects");

const testShip = new Ship(3, false, false);

test("Get a ship's health", () => {
    expect(testShip.health).toStrictEqual(
        [false,false,false]
    )
})

test("Hit a ship's position", () => {
    expect(testShip.hit(2)).toStrictEqual(
        [false,false,true]
    )
})