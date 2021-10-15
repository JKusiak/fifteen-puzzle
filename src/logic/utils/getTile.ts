import { Tile } from "../../types";

export function getTile(board: number[][], value: number) {
	const height = board.length;
	const width = board[0].length;
	const searchedTile: Tile = {xPos: 0, yPos: 0, value: value};

	for (let i = 0; i < height; i++) {
		for (let j = 0; j <= width; j++) {
			if (board[i][j] === value) {
				searchedTile.yPos = i;
				searchedTile.xPos = j;
			}
		}
	}

	return searchedTile;
}