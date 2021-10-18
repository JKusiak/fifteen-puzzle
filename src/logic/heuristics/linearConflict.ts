import { generateFinishedBoard } from "../utils/generateFinished";
import { getTile } from "../utils/getTile";
import { calculateManhattan } from "./manhattan";

/*tiles t1 and t2 are in a linear conflict if:
	- t1 and t2 are in the same line
	- they should be in that line
	- t1 is to the right of t2
	- correct position of t1 is to the left of the correct position of t2
*/
export function calculateLinearConflict(board: number[][]) {
	const height = board.length;
	const width = board[0].length;
	const finishedBoard = generateFinishedBoard(height, width);
	let totalConflicts = 0;

    for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			const currentTileVal = board[i][j];
			const goalCoords = getTile(finishedBoard, currentTileVal);
			const goalXPos = goalCoords.xPos;
			const goalYPos = goalCoords.yPos;

			// if is empty, skip
			if (currentTileVal === 0) {
				continue;
			}

			if (i === goalYPos) {
				// if the tile is in correct row, search conflicts
				// get next tiles in a row
				for (let k = j + 1; k < width; k++) {
					const nextTile = board[i][k];

					// find goal position of the next tile
					if (nextTile === 0) continue;
					const goalNextCoords = getTile(finishedBoard, nextTile);
					const goalNXPos = goalNextCoords.xPos;
					const goalNYPos = goalNextCoords.yPos;
					
					// if the next and checked tile's correct position is in the same row
					// and the next tile's correct position in the row is before the checked tile
					// add to linear conflict
					if (goalNYPos === goalYPos && goalNXPos <= goalXPos) totalConflicts += 1;
				}
			}
			
			if (j === goalXPos) {
				// if the tile is in correct column, search conflicts
				// get next tiles in a column
				for (let k = i + 1; k < height; k++) {
					const nextTile = board[k][j];

					// find goal position of the next tile
					if (nextTile === 0) continue;
					const goalNextCoords = getTile(finishedBoard, nextTile);
					const goalNXPos = goalNextCoords.xPos;
					const goalNYPos = goalNextCoords.yPos;
					
					// if the next and checked tile's correct position is in the same column
					// and the next tile's correct position in the column is before the checked tile
					// add to linear conflict
					if (goalNXPos === goalXPos && goalNYPos <= goalYPos) totalConflicts += 1;
				}
			}
		}
	}

	return calculateManhattan(board) + totalConflicts;
}