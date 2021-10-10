
export function swapTiles(board: number[][], xPos: number, yPos: number, xMovPos: number, yMovPos: number) {
	board[xMovPos][yMovPos] = board[xPos][yPos];
	board[xPos][yPos] = 0;

	return board;
}