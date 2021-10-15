import { Tile } from "../../types";

export function swapTiles(board: number[][], clickedTile: Tile, movableTile: Tile) {
	board[movableTile.yPos][movableTile.xPos] = board[clickedTile.yPos][clickedTile.xPos];
	board[clickedTile.yPos][clickedTile.xPos] = 0;

	return board;
}