export function isFinished(board: number[][]) {
	let tileNumber = 1;
	const height = board.length;
	const width = board[0].length;

	for (let i = 0; i < width; i++) {
		for (let j = 0; j < height; j++) {
			if(board[i][j] !== tileNumber && tileNumber !== width * height && board[i][j] !== 0) {
				return false;
			} 

			tileNumber ++;
		}
	}

	return true;
}
