import { Algorithm, Heuristic, Game } from "../../types";
import { createBoard } from "./createBoard";

export function initiateGame(rows:number, columns: number) {
	const newBoard = createBoard(rows, columns);

	const game: Game = {
		rows: rows,
		columns: columns,
		moves: 0,
		board: newBoard,
		algorithm: Algorithm.NONE,
		heuristic: Heuristic.NONE,
		isPlayed: false,
		playSpeed: 50,
		isFinished: false,
	}
	
	return game;
}
	