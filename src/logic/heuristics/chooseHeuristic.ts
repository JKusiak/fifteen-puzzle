import { Algorithm, Heuristic } from "../../types";
import { calculateHamming } from "./hamming";
import { calculateManhattan } from "./manhattan";


export function chooseHeuristic(heuristic: Heuristic) {
	switch (heuristic) {
		case Heuristic.NONE:
			return null;
		case Heuristic.ED:
			return null;
		case Heuristic.HD:
			return calculateHamming;
		case Heuristic.MD:
			return calculateManhattan;
	}
}