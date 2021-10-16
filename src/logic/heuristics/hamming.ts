import { generateFinishedBoard } from "../utils/generateFinished";


export function calculateHamming(board: number[][]) {
    let totalDisplaced = 0;
	const height = board.length;
	const width = board[0].length;
	const finishedBoard = generateFinishedBoard(height, width);

    for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (board[i][j] !== 0 && board[i][j] !== finishedBoard[i][j]) {
				totalDisplaced++;
			}
		}
	}

    return totalDisplaced;
}