function Ship(name, length, isHit, isSunk){
    this.name = name;
    this.length = length;
    this.isHit = isHit;
    this.isSunk = isSunk;
    this.health = makeHealth(length)

    function makeHealth(int){
        let healthArr = [];
        for(let x = 0; x < int; x++){
          healthArr.push(false);
        }
        return healthArr;
    }
}

Ship.prototype.hit = function(int){
    this.health[int] = true;
    if(this.health.includes(false)){
        this.isHit = true
    }
    else{
        this.isSunk = true
    }
}

function Gameboard(){
    function Cell(id, row, column, isOccupied, isHit){
        this.id = id
        this.coordinate = row + column;
        this.isOccupied = isOccupied;
        this.isHit = isHit;
    }
    Cell.prototype.occupy = function(){
        this.isOccupied = true;
    }
    this.cells = makeCells();
    function makeCells(){
        let cellArr = [];
        let alphaArray = ['a','b','c','d','e','f','g','h','i','j'];
        let makeCells = (row) => {
            for(let x = 1; x <= 10; x++){
                cellArr.push(new Cell(0, row, x, false, false));
            }
        };
        alphaArray.some(makeCells);
        for (let x = 0; x < 100; x++){
            cellArr[x].id = x;
        }
        return cellArr;
    }
}

module.exports = Ship, Gameboard;
