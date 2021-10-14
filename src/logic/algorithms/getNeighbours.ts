import { ITile } from "../../types";

export function getNeighbours(board: number[][], tile: ITile) {
	const height = board.length;
	const width = board[0].length;
	const {xPos, yPos} = tile;
	const neighbours = [];

	if (xPos - 1 >= 0) {
		const tileLeft: ITile = {xPos: xPos - 1, yPos: yPos, value: board[yPos][xPos - 1]};
		neighbours.push(tileLeft);
	}

	if (xPos + 1 < width) {
		const tileRight: ITile = {xPos: xPos + 1, yPos: yPos, value: board[yPos][xPos + 1]};
		neighbours.push(tileRight);
	}

	if (yPos - 1 >= 0) {
		const tileAbove: ITile = {xPos: xPos, yPos: yPos - 1, value: board[yPos - 1][xPos]};
		neighbours.push(tileAbove);
	}

	if (yPos + 1 < height) {
		const tileBelow: ITile = {xPos: xPos, yPos: yPos + 1, value: board[yPos + 1][xPos]};
		neighbours.push(tileBelow);
	}
	
	return neighbours;
}