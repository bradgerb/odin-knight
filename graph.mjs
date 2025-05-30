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

    addEdge(sourceArray, destinationArray) {
        let sourceNode = coordinatesToNode(sourceArray);
        let destinationNode = coordinatesToNode(destinationArray);

        if (checkValid(sourceArray) && checkValid(destinationArray)) {
            this.nodes[sourceNode].edges.push(destinationNode);
            this.nodes[destinationNode].edges.push(sourceNode);
        }
    }

    breadthFirstSearch(sourceArray, destinationArray) {
        const sourceNode = coordinatesToNode(sourceArray);
        const destinationNode = coordinatesToNode(destinationArray);

        if (checkValid(sourceArray) && checkValid(destinationArray)) {
            const queue = [sourceNode];
            const visited = {};
            //hardcoded for testing
            let path = [sourceNode, destinationNode];

            while (queue.length) {
                let currentNode = queue.shift();
                
                if (!visited[currentNode]) {
                    if (currentNode === destinationNode) {
                        let pathCoordinates = '';
                        for (let i = 0; i < path.length; i++) {
                            pathCoordinates += `[${nodeToCoordinates(path[i])}]`;
                        }

                        console.log(`You made it in ${path.length - 1} steps!`);
                        console.log(`Your path is ${pathCoordinates}`);
                        return true
                    }
                    
                    visited[currentNode] = true;

                    let neighborNodes = this.nodes[currentNode].edges;

                    for (let i = 0; i < neighborNodes.length; i++) {
                            queue.push(neighborNodes[i]);
                    }
                }
            }
            return false
        } else {
            console.log('Invalid input');
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

const checkValid = (array)=> {
    let valid = false;

    if (array[0] >= 0 && array[0] <= rows - 1 &&
        array[1] >= 0 && array[1] <= columns - 1) {
            valid = true
    }
    return valid
}

export { rows, columns, Graph }