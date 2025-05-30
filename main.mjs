import {rows, columns, Graph } from "./graph.mjs";

const chessboard = new Graph();

for(let y = 0; y < columns; y++) {
    for(let x = 0; x < rows; x++) {
        chessboard.addNode(x, y);
    }
}

for(let y = 0; y < columns; y++) {
    for(let x = 0; x < rows; x++) {
        chessboard.addEdge([x, y],[x + 1, y + 2]);
        chessboard.addEdge([x, y],[x + 2, y + 1]);
        chessboard.addEdge([x, y],[x - 1, y + 2]);
        chessboard.addEdge([x, y],[x - 2, y + 1]);
    }
}

console.log(chessboard);
console.log(chessboard.nodes[28].edges);