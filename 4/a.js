const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
    .split("\n")
    .map(pair => pair.split(','))
    .map((pair) => {
        return pair.map(pair => {
            const fromTo = pair.split('-');
            return {
                from: Number.parseInt(fromTo[0]),
                to: Number.parseInt(fromTo[1]),
            }
        });
    })

let overlaps = input.reduce((count, pair) => {
    if (pair[0].from >= pair[1].from && pair[0].to <= pair[1].to || pair[0].from <= pair[1].from && pair[0].to >= pair[1].to) {
        return count + 1;
    }

    return count;
}, 0);

console.log(overlaps);
