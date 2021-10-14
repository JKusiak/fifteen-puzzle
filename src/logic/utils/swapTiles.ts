import { ITile } from "../../types";

export function swapTiles(board: number[][], clickedTile: ITile, movableTile: ITile) {
	const newBoard = [...board];

	newBoard[movableTile.yPos][movableTile.xPos] = newBoard[clickedTile.yPos][clickedTile.xPos];
	newBoard[clickedTile.yPos][clickedTile.xPos] = 0;

	return newBoard;
}