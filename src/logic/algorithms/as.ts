import { isFinished } from "../utils/checkFinished";
import { getTile } from "../utils/getTile";
import { getNeighbours } from "../utils/getNeighbours";
import { swapTiles } from "../utils/swapTiles";

//TODO
export function* aStar(board: number[][], heuristic: any) {
	// let searchNum = 0;
	// const toVisit = priorityQueue<numbern[][]>();
    // const visited = new Set(JSON.stringify(board));
	// const directions = [];

    // toVisit.insert(start, start.totalDist(heuristic));
	
    // while (!toVisit.is_empty()) {
    //     const state_e = opened.min();
    //     const state_e_hash = state_e.hash();
    //     const closed_dist = closed.get(state_e_hash);
    //     if (typeof closed_dist !== 'undefined' && state_e.g >= closed_dist) {
    //         continue;
    //     }
    //     if (state_e.get_h(heuristic) === 0) {
    //         return state_e;
    //     }
    //     yield [state_e, 'opened: ' + opened.size() + ' closed: ' + closed.size];
    //     closed.set(state_e_hash, state_e.g);
    //     for (const state of state_e.expand()) {
    //         opened.insert(state, state.totalDist(heuristic));
    //     }
    // }
}