import { ITile } from "../../types";
import { getNeighbours } from "../algorithms/getNeighbours";

export function isMovable(board: number[][], tile: ITile) {
	const tiles = getNeighbours(board, tile);

	const movableTile = tiles.find(tile => tile.value === 0);

	if (movableTile) {
		return {movable: true, movableTile: movableTile};
	}

	return {movable: false, movableTile: null};;
}