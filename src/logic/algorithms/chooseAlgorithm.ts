import { Algorithm, Heuristic } from "../../types";
import { chooseHeuristic } from "../heuristics/chooseHeuristic";
import { aStar } from "./as";
import { bestFirstSearch } from "./befs";
import { breadthFirstSearch } from "./brfs";
import { depthFirstSearch } from "./dfs";
import { iterativeDeepeningDFS } from "./idfs";

export function chooseAlgorithm(board: number[][], algorithm: Algorithm, heuristic: Heuristic) {
	const chosenHeuristic = chooseHeuristic(heuristic);

	switch (algorithm) {
		case Algorithm.NONE:
			return board as number[][];
		case Algorithm.BrFS:
			const brfsSolved = breadthFirstSearch(board);
			return brfsSolved;
		case Algorithm.DFS:
			const dfsSolved = depthFirstSearch(board);
			return dfsSolved;
		case Algorithm.IDDFS:
			const iddfsSolved = iterativeDeepeningDFS(board);
			return iddfsSolved;
		case Algorithm.BeFS:
			const befsSolved = bestFirstSearch(board, chosenHeuristic);
			return befsSolved;
		case Algorithm.AS:
			const asSolved = aStar(board, chosenHeuristic);
			return asSolved;
	}
}