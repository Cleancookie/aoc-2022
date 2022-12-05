const fs = require('fs');
let [stacks, moves] = fs.readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' }).split("\n\n")

stacks = stacks
    .split("\n") // we now have an array of rows
    .slice(0, -1) // remove row that labels the stacks
    .reverse()
    .reduce((stacks, row) => {
        const crates = row
            .match(/.{1,4}/g)
            .map(crateWithPadding => crateWithPadding.substring(1, 2))
            .forEach((crate, stackNumber) => {
                if (![...stacks.keys()].includes(stackNumber)) {
                    stacks[stackNumber] = [];
                }
                if (crate != ' ') {
                    stacks[stackNumber].push(crate);
                }
            })

            return stacks;
    }, [])
;

moves = moves
    .split('\n')
    .map((move) => {
        let [, quantity, , from, , to] = move.split(" ");
        return {
            quantity: Number.parseInt(quantity),
            from: from - 1,
            to: to - 1,
        }
    })

moves.forEach((move) => {
    let movables = stacks[move.from].splice(stacks[move.from].length - move.quantity, move.quantity);
    stacks[move.to] = stacks[move.to].concat(movables.reverse());
})

console.log(stacks.map(stack => stack.pop()).join(''))
