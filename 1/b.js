const fs = require('fs');
const path = require('path');

const inputPath = __dirname + '/input.txt';
const input = fs.readFileSync(inputPath, { encoding: 'utf-8' });

let caloriesPerInventory = input
    .split('\n\n')
    .map((inventory) => {
        return inventory.split('\n');
    })
    .map((inventory) => {
        return inventory.reduce((total, item) => {
            return total + Number.parseInt(item);
        }, 0);
    })
    .sort(function (a, b) { return b - a })

console.log(caloriesPerInventory);
console.log(caloriesPerInventory[0] + caloriesPerInventory[1] + caloriesPerInventory[2]);