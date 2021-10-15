export function generateFinishedBoard(rows: number, columns: number) {
	const finishedBoard: number[][] = new Array(rows);
	let nextTile = 1;

	for (let i = 0; i < rows ; i++) {
		finishedBoard[i] = new Array(columns);

		for (let j = 0; j < columns ; j++) {
			finishedBoard[i][j] = nextTile;

			if ((i === rows - 1) && (j === columns - 1)) {
				finishedBoard[i][j] = 0;
			}

			nextTile++;
		}
	}

	return finishedBoard;
}