import Graph from "./graph.mjs";

const chessboard = new Graph();

console.log(chessboard);

for(let x = 0; x < 8; x++) {
    for(let y = 0; y < 8; y++) {
        chessboard.addNode(x, y);
    }
}

console.log(chessboard);