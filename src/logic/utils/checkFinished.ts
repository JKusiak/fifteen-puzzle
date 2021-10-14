export function isFinished(board: number[][]) {
	let tileNumber = 1;
	const height = board.length;
	const width = board[0].length;

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (board[i][j] !== tileNumber) {
				if (tileNumber !== width * height) {
					return false;
				}
			} 

			tileNumber ++;
		}
	}

	return true;
}
