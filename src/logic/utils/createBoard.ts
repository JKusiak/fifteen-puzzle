import { isSolvable } from "./checkSolvability";
import { shuffle } from "./shuffle";

export function createBoard(rows: number, columns: number): number[][] {
	const cells = Array.from(Array(rows * columns).keys());
	const shuffledCells = shuffle(cells);
	let board: number[][] = new Array(rows);
	let count = 0;

	for (let i = 0; i < rows; i++) {
		board[i] = new Array(columns);

		for (let j = 0; j < columns; j++) {
			board[i][j] = shuffledCells[count];
			count++;
		}
	}
	
	if (isSolvable(shuffledCells, board, rows)) {
		return board;
	} else {
		return createBoard(rows, columns);
	}
}