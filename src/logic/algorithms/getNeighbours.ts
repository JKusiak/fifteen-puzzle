import { ITile } from "../../types";

export function getNeighbours(board: number[][], tile: ITile) {
	const height = board.length;
	const width = board[0].length;
	const {xPos, yPos} = tile;
	const neighbours = [];

	if (xPos - 1 >= 0) {
		const tileLeft: ITile = {xPos: xPos - 1, yPos: yPos, value: board[yPos][xPos - 1]};
		neighbours.push({direction: "⬅️", tile: tileLeft});
	}

	if (xPos + 1 < width) {
		const tileRight: ITile = {xPos: xPos + 1, yPos: yPos, value: board[yPos][xPos + 1]};
		neighbours.push({direction: "➡️", tile: tileRight});
	}

	if (yPos - 1 >= 0) {
		const tileAbove: ITile = {xPos: xPos, yPos: yPos - 1, value: board[yPos - 1][xPos]};
		neighbours.push({direction: "⬆️", tile: tileAbove});
	}

	if (yPos + 1 < height) {
		const tileBelow: ITile = {xPos: xPos, yPos: yPos + 1, value: board[yPos + 1][xPos]};
		neighbours.push({direction: "⬇️", tile: tileBelow});
	}
	
	return neighbours;
}