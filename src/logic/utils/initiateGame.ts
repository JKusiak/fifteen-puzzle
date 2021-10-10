import { IGame } from "../../types";
import { createBoard } from "./createBoard";

export function initiateGame(rows:number, columns: number) {
	const newBoard = createBoard(rows, columns);

	const game: IGame = {
		rows: rows,
		columns: columns,
		moves: 0,
		board: newBoard,
		isSolved: false,
	}
	
	return game;
}
	