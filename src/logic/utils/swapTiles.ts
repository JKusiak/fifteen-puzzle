
export function swapTiles(board: number[][], xPos: number, yPos: number) {
	const height = board.length;
	const width = board[0].length;
	let tileAbove, tileBelow, tileLeft, tileRight = {xPos: 0, yPos: 0, val: 1};

	if (xPos - 1 >= 0) {
		tileLeft = {xPos: xPos - 1, yPos: yPos, val: board[xPos - 1][yPos]};
	}

	if (xPos + 1 < width) {
		tileRight = {xPos: xPos + 1, yPos: yPos, val: board[xPos + 1][yPos]};
	}

	if (yPos - 1 >= 0) {
		tileAbove = {xPos: xPos, yPos: yPos - 1, val: board[xPos][yPos - 1]};
	}

	if (yPos + 1 < height) {
		tileBelow = {xPos: xPos, yPos: yPos + 1, val: board[xPos][yPos + 1]};
	}

	const tiles = [tileAbove, tileBelow, tileLeft, tileRight];

	const movable = tiles.find(tile => tile?.val === 0);

	if (movable) {
		board[movable.xPos][movable.yPos] = board[xPos][yPos];
		board[xPos][yPos] = 0;
	}

	return board;
}