const Ship = require("../src/gameObjects");

const testShip = new Ship(3, false, false);

/*test("Create a ship", () => {
    expect(new Ship(3, false, false)).toStrictEqual(
        {length: 3, isHit: false, isSunk: false}
    )
})*/

test("Get a ship's health", () => {
    expect(testShip.health).toStrictEqual(
        [{position: 1, isHit: false},{position: 2, isHit: false},{position: 3, isHit: false}]
    )
})

/*test("Hit a ship's position", () => {
    expect(testShip.hit(2)).toStrictEqual(
        [{position: 1, isHit: false},{position: 2, isHit: true},{position: 3, isHit: false}]
    )
})*/