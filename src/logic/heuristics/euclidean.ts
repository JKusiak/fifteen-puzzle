import { generateFinishedBoard } from "../utils/generateFinished";
import { getTile } from "../utils/getTile";

export function calculateEuclidean(board: number[][]) {
	let totalDist = 0;
	const height = board.length;
	const width = board[0].length;
	const finishedBoard = generateFinishedBoard(height, width);

    for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			const goalTile = getTile(finishedBoard, board[i][j]);
			const goalXPos = goalTile.xPos;
			const goalYPos = goalTile.yPos;
			/*add the square root of the sum of second powers of differences, 
			based on quadratic equation*/
			totalDist += Math.sqrt(Math.pow((goalXPos - j), 2) + Math.pow((goalYPos - i), 2))
		}
	}

    return totalDist;
}