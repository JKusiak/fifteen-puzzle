import { Algorithm } from "../../types";
import { aStar } from "./as";
import { bestFirstSearch } from "./befs";
import { breadthFirstSearch } from "./brfs";
import { depthFirstSearch } from "./dfs";
import { iterativeDeepeningDFS } from "./idfs";
import { simplifiedMemoryBoundedAStar } from "./smas";

export function chooseAlgorithm(board: number[][], algorithm: Algorithm) {
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
			const befsSolved = bestFirstSearch(board);
			return befsSolved;
		case Algorithm.AS:
			const asSolved = aStar(board);
			return asSolved;
		case Algorithm.SMAS:
			const smasSolved = simplifiedMemoryBoundedAStar(board);
			return smasSolved;
	}
}