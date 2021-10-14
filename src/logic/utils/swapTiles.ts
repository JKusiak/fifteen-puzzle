import { ITile } from "../../types";

export function swapTiles(board: number[][], clickedTile: ITile, movableTile: ITile) {
	board[movableTile.yPos][movableTile.xPos] = board[clickedTile.yPos][clickedTile.xPos];
	board[clickedTile.yPos][clickedTile.xPos] = 0;

	return board;
}