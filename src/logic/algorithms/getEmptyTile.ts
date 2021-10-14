import { ITile } from "../../types";

export function getEmptyTile(board: number[][]) {
	const height = board.length;
	const width = board[0].length;
	const emptyTile: ITile = {xPos: 0, yPos: 0, value: 0};

	for (let i = 0; i < height; i++) {
		for (let j = 0; j <= width; j++) {
			if (board[i][j] === 0) {
				emptyTile.yPos = i;
				emptyTile.xPos = j;
			}
		}
	}

	return emptyTile;
}