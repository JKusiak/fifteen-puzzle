import { Heuristic } from "../../types";
import { calculateEuclidean } from "./euclidean";
import { calculateHamming } from "./hamming";
import { calculateLinearConflict } from "./linearConflict";
import { calculateManhattan } from "./manhattan";


export function chooseHeuristic(heuristic: Heuristic) {
	switch (heuristic) {
		case Heuristic.NONE:
			return () => 0;
		case Heuristic.HD:
			return calculateHamming;
		case Heuristic.MD:
			return calculateManhattan;
		case Heuristic.LC:
			return calculateLinearConflict;
		case Heuristic.ED:
			return calculateEuclidean;
	}
}