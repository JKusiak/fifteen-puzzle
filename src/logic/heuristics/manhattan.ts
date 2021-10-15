import { generateFinishedBoard } from "../utils/generateFinished";
import { getTile } from "../utils/getTile";

export function calculateManhattan(board: number[][]) {
    let totalDist = 0;
	const height = board.length;
	const width = board[0].length;
	const finishedBoard = generateFinishedBoard(height, width);

    for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			const goalTile = getTile(finishedBoard, board[i][j]);
			const goalXPos = goalTile.xPos;
			const goalYPos = goalTile.yPos;
			totalDist += Math.abs(goalXPos - j) + Math.abs(goalYPos - i);
		}
	}
        
    return totalDist;
}