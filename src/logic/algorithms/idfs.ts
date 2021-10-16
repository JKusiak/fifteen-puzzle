import { isFinished } from "../utils/checkFinished";
import { getTile } from "../utils/getTile";
import { getNeighbours } from "../utils/getNeighbours";
import { swapTiles } from "../utils/swapTiles";
import { QueueNode } from "../../types";

//TODO
export function* iterativeDeepeningDFS(board: number[][]) {
	let totalDepth = 1;
	let searchNum = 0;

	while (true) {
		const toVisit: [QueueNode] = [{
			key: 0,
			value: board,
			depth: 1
		}];
		const visited = new Set(JSON.stringify(board));
		const directions = [];

		while (toVisit.length > 0) {
			const currentBoardNode = toVisit.pop() as QueueNode;
        	const currentBoard = currentBoardNode.value;
			console.log(currentBoardNode.depth, currentBoard);
			yield currentBoard;
			const iterationDepth = currentBoardNode.depth;

			if (isFinished(currentBoard)) {
				console.log(`Solved, final state: ${currentBoard} \n Moves: ${searchNum} \n Found at depth: ${totalDepth} \n Steps to solve: ${directions} `);
				return currentBoard;
			}

			searchNum++;

			if (iterationDepth < totalDepth) {
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
						toVisit.push({key: 0, value: newBoard, depth: currentBoardNode.depth + 1});
					}
				}
			}
		}

		totalDepth++;
		console.log(`Moving to next depth: ${totalDepth}`);
	}
}