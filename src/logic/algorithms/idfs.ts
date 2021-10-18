import { isFinished } from "../utils/checkFinished";
import { getTile } from "../utils/getTile";
import { getNeighbours } from "../utils/getNeighbours";
import { swapTiles } from "../utils/swapTiles";
import { QueueNode } from "../../types";


export function* iterativeDeepeningDFS(board: number[][]) {
	let prevVisited =  new Set();
	let currentDepth = 1;
	let searchNum = 0;

	while (true) {
		console.log(`Moving to next depth: ${currentDepth}`);

		const toVisit: [QueueNode] = [{
			key: 0,
			value: board,
			depth: 1,
			direction: 'initial',
		}];
		const visited = new Set(JSON.stringify(board));
		const directions = [];

		while (toVisit.length > 0) {
			const currentBoardNode = toVisit.pop() as QueueNode;
        	const currentBoard = currentBoardNode.value;
			directions.push(currentBoardNode.direction);
			yield currentBoard;
			const nodeDepth = currentBoardNode.depth;

			if (isFinished(currentBoard)) {
				console.log(`Solved, final state: ${currentBoard} \n Moves: ${searchNum} \n Found at depth: ${currentDepth} \n Steps to solve: ${directions} `);
				return currentBoard;
			}

			searchNum++;

			if (nodeDepth < currentDepth) {
				const emptyTile = getTile(currentBoard, 0);
				const neighbours = getNeighbours(currentBoard, emptyTile);

				for (let neighbour of neighbours) {
					// JSON methods for deep copying two dimensional arrays and searching for it in set
					// TODO: remove them to increase speed
					let newBoard = JSON.parse(JSON.stringify(currentBoard));
					newBoard = swapTiles(newBoard, neighbour.tile, emptyTile);

					if (!visited.has(JSON.stringify(newBoard))) {
						visited.add(JSON.stringify(newBoard));
						toVisit.push({key: 0, value: newBoard, depth: currentBoardNode.depth + 1, direction: neighbour.direction});
					}
				}
			}
		}

		if (equalSets(prevVisited, visited)) {
			console.log(`Board not solvable \n Moves: ${searchNum}`);
			return;
		}

		prevVisited = new Set(visited);
		currentDepth++;
	}
}


function equalSets(firstSet: Set<any>, secondSet: Set<any>) {
    if (firstSet.size !== secondSet.size) return false;
    for (let element of firstSet) {
		if (!secondSet.has(element)) return false;
	}
    return true;
}