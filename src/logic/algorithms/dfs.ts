import { isFinished } from "../utils/checkFinished";
import { getTile } from "../utils/getTile";
import { getNeighbours } from "../utils/getNeighbours";
import { swapTiles } from "../utils/swapTiles";
import { ArrayNode, QueueNode } from "../../types";


export function* depthFirstSearch(board: number[][]) {
	let searchNum = 0;
	const toVisit: [ArrayNode] = [{
		value: board,
		direction: 'initial',
	}];
	const visited = new Set(JSON.stringify(board));
	const directions = [];

	while (toVisit.length > 0) {
		const currentBoardNode = toVisit.pop() as ArrayNode;
        const currentBoard = currentBoardNode.value;
		directions.push(currentBoardNode.direction);
		yield currentBoard;
		
		if (isFinished(currentBoard)) {
			console.log(`Solved, final state: ${currentBoard} \n Moves: ${searchNum} \n Steps to solve: ${directions}`);
			return true;
		}

		searchNum++;

		const emptyTile = getTile(currentBoard, 0);
		const neighbours = getNeighbours(currentBoard, emptyTile);
		
		for (let neighbour of neighbours) {
			// JSON methods for deep copying two dimensional arrays and searching for it in set
			// TODO: remove them to increase speed
			let newBoard = {
				value: JSON.parse(JSON.stringify(currentBoard)),
				direction: neighbour.direction,
			};
			newBoard.value = swapTiles(newBoard.value, neighbour.tile, emptyTile);
			
			if (!visited.has(JSON.stringify(newBoard.value))) {
				visited.add(JSON.stringify(newBoard.value));
				toVisit.push(newBoard);
			}
		}
	}

	console.log(`Could not solve, NxM board not solvable \n Moves: ${searchNum}`);
	return false;
}