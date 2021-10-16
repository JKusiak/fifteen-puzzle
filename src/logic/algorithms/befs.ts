import { isFinished } from "../utils/checkFinished";
import { getTile } from "../utils/getTile";
import { getNeighbours } from "../utils/getNeighbours";
import { swapTiles } from "../utils/swapTiles";
import { priorityQueue } from "../data_structures/priorityQueue";
import { calculateManhattan } from "../heuristics/manhattan";
import { calculateHamming } from "../heuristics/hamming";


export function* bestFirstSearch(board: number[][], heuristic: any) {
	let searchNum = 0;
	const toVisit = priorityQueue<number[][]>();
    const visited = new Set(JSON.stringify(board));
	const directions = [];
    
    toVisit.insert(board, heuristic(board));

    while (!toVisit.isEmpty()) {
        const currentBoard = toVisit.pop();
		yield currentBoard;

		if (isFinished(currentBoard)) {
			console.log(`Solved, final state: ${currentBoard} \n Steps to solve: ${directions} \n Moves: ${searchNum}`);
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
			directions.push(neighbour.direction);
			
			if (!visited.has(JSON.stringify(newBoard))) {
				visited.add(JSON.stringify(newBoard));
				toVisit.insert(newBoard, heuristic(newBoard));
			}
		}
    }

	console.log(`Could not solve, NxM board not solvable \n Moves: ${searchNum}`);
}