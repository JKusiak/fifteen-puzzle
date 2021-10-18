import { isFinished } from "../utils/checkFinished";
import { getTile } from "../utils/getTile";
import { getNeighbours } from "../utils/getNeighbours";
import { swapTiles } from "../utils/swapTiles";
import { priorityQueue } from "../data_structures/priorityQueue";


export function* aStar(board: number[][], heuristic: any) {
    let searchNum = 0;
	const toVisit = priorityQueue<number[][]>();
    const visited = new Set(JSON.stringify(board));
	const directions = [];

    toVisit.insert(board, heuristic(board), 0, 'initial');

    while (!toVisit.isEmpty()) {
        const currentBoardNode = toVisit.pop();
        const currentBoard = currentBoardNode.value;
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
                // discrepancy from greedy befs, the key of the queue instance consists 
                // of the sum of heuristic value and the distance from original state
				toVisit.insert(newBoard, heuristic(board), currentBoardNode.depth + 1, neighbour.direction);
			}
		}
    }

	console.log(`Could not solve, NxM board not solvable \n Moves: ${searchNum}`);
}