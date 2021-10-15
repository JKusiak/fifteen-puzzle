import { isFinished } from "../utils/checkFinished";
import { getEmptyTile } from "../utils/getEmptyTile";
import { getNeighbours } from "../utils/getNeighbours";
import { swapTiles } from "../utils/swapTiles";

//TODO
export function* iterativeDeepeningDFS(board: number[][]) {
	let totalDepth = 1;
	let searchNum = 0;

	while (true) {
		const toVisit = [board];
		const visited = new Set(JSON.stringify(board));
		const directions = [];

		while (toVisit.length > 0) {
			let iterationDepth = 1;
			const currentBoard = toVisit.pop() as number[][];
			yield currentBoard;

			if (isFinished(currentBoard)) {
				console.log(`Solved, final state: ${currentBoard} \n Steps to solve: ${directions} \n Moves: ${searchNum} \n Found at depth: ${totalDepth}`);
				return currentBoard;
			}

			searchNum++;

			if (iterationDepth < totalDepth) {
				const emptyTile = getEmptyTile(currentBoard);
				const neighbours = getNeighbours(currentBoard, emptyTile);
				
				for (let neighbour of neighbours) {
					// JSON methods for deep copying two dimensional arrays and searching for it in set
					// TODO: remove them to increase speed
					let newBoard = JSON.parse(JSON.stringify(currentBoard));
					newBoard = swapTiles(newBoard, neighbour.tile, emptyTile);
					directions.push(neighbour.direction);
					
					if (!visited.has(JSON.stringify(newBoard))) {
						visited.add(JSON.stringify(newBoard));
						toVisit.push(newBoard);
					}
				}

				iterationDepth++;
			}
		}
		
		totalDepth++;
		console.log(`Moving to next depth: ${totalDepth}`);
	}
}
