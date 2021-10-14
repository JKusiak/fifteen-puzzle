import { Algorithm } from "../../types";
import { breadthFirstSearch } from "./bfs";

export function chooseAlgorithm(board: number[][], algorithm: Algorithm) {
	switch (algorithm) {
		case Algorithm.NONE:
			return board as number[][];
		case Algorithm.BrFS:
			const solvedBoard = breadthFirstSearch(board);
			return solvedBoard;
		case Algorithm.DFS:
			return board;
		case Algorithm.IDFS:
			return board;
		case Algorithm.BeFS:
			return board;
		case Algorithm.AS:
			return board;
		case Algorithm.SMAS:
			return board;
	}
}