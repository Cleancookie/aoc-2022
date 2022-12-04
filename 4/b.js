const fs = require('fs');
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

// Does js have this function?
const range = (start, end) => {
    return [...Array((end - start) + 1).keys()].map(index => index + start);
}

let overlaps = input.reduce((count, pair) => {
    let a = range(pair[0].from, pair[0].to);
    let b = range(pair[1].from, pair[1].to);
    if (a.includes(pair[1].from) || a.includes(pair[1].to) || b.includes(pair[0].from) || b.includes(pair[0].to)) {
        return count + 1;
    }
    return count;
}, 0);

console.log(overlaps);
