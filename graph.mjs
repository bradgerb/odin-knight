const rows = 8;
const columns = 8;

class Node {
    constructor(x, y) {
        this.xCoordinate = x;
        this.yCoordinate = y;
        this.edges = [];
    }
}

class Graph {
    constructor() {
        this.nodes = [];
    }

    addNode(x, y) {
        const newNode = new Node(x, y);
        this.nodes.push(newNode);
    }

    addEdge([sourceX, sourceY], [destinationX, destinationY]) {
        let sourceNode = coordinatesToNode([sourceX, sourceY]);
        let destinationNode = coordinatesToNode([destinationX, destinationY]);

        if (sourceX >= 0 && sourceX <= rows - 1 &&
            sourceY >= 0 && sourceY <= columns - 1 &&
            destinationX >= 0 && destinationX <= rows - 1 &&
            destinationY >= 0 && destinationY <= columns - 1) {
                this.nodes[sourceNode].edges.push(destinationNode);
                this.nodes[destinationNode].edges.push(sourceNode);
            }
    }
}

const coordinatesToNode = (array)=> {
    let x = array[0];
    let y = array[1];
    let node = x + (rows * y);

    return node
}

const nodeToCoordinates = (node)=> {
    let x = node % rows;
    let y = Math.floor(node / rows);
    let array = [x, y];

    return array
}

export { rows, columns, Graph }