import { ITile } from "../../types";
import { getNeighbours } from "../algorithms/getNeighbours";

export function isMovable(board: number[][], tile: ITile) {
	const neighbours = getNeighbours(board, tile);

	const movableTile = neighbours.find(neighbour => neighbour.tile.value === 0);

	if (movableTile) {
		return {movable: true, movableTile: movableTile.tile};
	}

	return {movable: false, movableTile: null};;
}