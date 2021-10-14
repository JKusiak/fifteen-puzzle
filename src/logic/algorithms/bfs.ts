import { isFinished } from "../utils/checkFinished";
import { swapTiles } from "../utils/swapTiles";
import { getEmptyTile } from "./getEmptyTile";
import { getNeighbours } from "./getNeighbours";

export function* breadthFirstSearch(board: number[][]) {
	let searchNum = 0;
	const visited = [board];
	const toVisit = [board];

	while (toVisit.length > 0) {
		const currentBoard = toVisit.shift() as number[][];
		yield currentBoard;
		searchNum++;
		console.log(currentBoard);
		

		if (isFinished(currentBoard)) {
			console.log(`Solved, final state: ${currentBoard}`);
			return currentBoard;
		}

		if (searchNum > 15) return currentBoard;

		const emptyTile = getEmptyTile(currentBoard);
		const neighbours = getNeighbours(currentBoard, emptyTile);

		for (let neighbour of neighbours) {
			const newBoard = swapTiles(currentBoard, neighbour, emptyTile);
			if (!visited.includes(newBoard)) {
				toVisit.push(newBoard);
			}
		}
	}
}