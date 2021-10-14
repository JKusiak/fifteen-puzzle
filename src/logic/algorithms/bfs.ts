import { isFinished } from "../utils/checkFinished";
import { swapTiles } from "../utils/swapTiles";
import { getEmptyTile } from "./getEmptyTile";
import { getNeighbours } from "./getNeighbours";

export function* breadthFirstSearch(board: number[][]) {
	let searchNum = 0;
	const visited = new Set(JSON.stringify(board));
	const toVisit = [board];
	const directions =[]

	while (toVisit.length > 0) {
		const currentBoard = toVisit.shift() as number[][];
		yield currentBoard;
		searchNum++;

		if (isFinished(currentBoard)) {
			console.log(`Solved, final state: ${currentBoard} \n Steps to solve: ${directions}`);
			return currentBoard;
		}
		console.log(JSON.stringify(currentBoard));

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
	}
}