import { Tile } from "../../types";

export function getNeighbours(board: number[][], tile: Tile) {
	const height = board.length;
	const width = board[0].length;
	const {xPos, yPos} = tile;
	const neighbours = [];

	// the icon shows direction opposite to the placement of the tile because
	// it indicates the movement of the tile to change with empty space
	if (xPos - 1 >= 0) {
		const tileLeft: Tile = {xPos: xPos - 1, yPos: yPos, value: board[yPos][xPos - 1]};
		neighbours.push({direction: "➡️", tile: tileLeft});
	}

	if (xPos + 1 < width) {
		const tileRight: Tile = {xPos: xPos + 1, yPos: yPos, value: board[yPos][xPos + 1]};
		neighbours.push({direction: "⬅️", tile: tileRight});
	}

	if (yPos - 1 >= 0) {
		const tileAbove: Tile = {xPos: xPos, yPos: yPos - 1, value: board[yPos - 1][xPos]};
		neighbours.push({direction: "⬇️", tile: tileAbove});
	}

	if (yPos + 1 < height) {
		const tileBelow: Tile = {xPos: xPos, yPos: yPos + 1, value: board[yPos + 1][xPos]};
		neighbours.push({direction: "⬆️", tile: tileBelow});
	}
	
	return neighbours;
}