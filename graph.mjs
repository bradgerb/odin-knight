class Node {
    constructor(x, y) {
        this.xCoordinate = x;
        this.yCoordinate = y;
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
}

export default Graph