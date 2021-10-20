import { isFinished } from "../utils/checkFinished";
import { getTile } from "../utils/getTile";
import { getNeighbours } from "../utils/getNeighbours";
import { swapTiles } from "../utils/swapTiles";
import { priorityQueue } from "../data_structures/priorityQueue";


export function* bestFirstSearch(board: number[][], heuristic: any) {
	let searchNum = 0;
	let lastBoard;
	const toVisit = priorityQueue<number[][]>();
    const visited = new Set(JSON.stringify(board));
	const directions = [];
    
	// last value is always zero as in greedy version the 
	// distance from starting node is not taken into account
    toVisit.insert(board, heuristic(board), 0, 'initial');

    while (!toVisit.isEmpty()) {
        const currentBoardNode = toVisit.pop();
		const currentBoard = currentBoardNode.value;
		lastBoard = currentBoard;
		directions.push(currentBoardNode.direction);
		yield currentBoard;

		if (isFinished(currentBoard)) {
			console.log(`Solved, final state: ${currentBoard} \n Moves: ${searchNum} \n Steps to solve: ${directions}`);
			return currentBoard;
		}

		searchNum++;

        const emptyTile = getTile(currentBoard, 0);
		const neighbours = getNeighbours(currentBoard, emptyTile);
		
		for (let neighbour of neighbours) {
			// JSON methods for deep copying two dimensional arrays and searching for it in set
			// TODO: remove them to increase speed
			let newBoard = JSON.parse(JSON.stringify(currentBoard));
			newBoard = swapTiles(newBoard, neighbour.tile, emptyTile);
			if (!visited.has(JSON.stringify(newBoard))) {
				
				visited.add(JSON.stringify(newBoard));
				toVisit.insert(newBoard, heuristic(newBoard), 0, neighbour.direction);
			}
		}
    }

	console.log(`Could not solve, NxM board not solvable \n Moves: ${searchNum}`);
	return lastBoard;
}