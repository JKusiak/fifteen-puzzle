export interface Game {
	rows: number;
	columns: number;
	moves: number;
	board: number[][];
	algorithm: Algorithm;
	heuristic: Heuristic;
	isPlayed: boolean;
	playSpeed: number;
	isFinished: boolean;
}

export interface Tile {
	xPos: number;
	yPos: number;
	value: number;
}

export interface Neighbour {
	direction: string;
	tile: Tile;
}

export interface QueueNode {
	key: number
	value: any,
}

export interface PriorityQueue<T> {
	insert(item: T, priority: number): void;
	peek(): T;
	pop(): T;
	size(): number;
	isEmpty(): boolean;
}

export enum Algorithm {
	NONE = "None",
	BrFS = "Breadth First Search",
	DFS = "Depth First Search",
	IDDFS = "Iterative Deepening Depth First Search",
	BeFS = "Best First Search",
	AS = "A*",
	SMAS = "Simplified Memory Bounded A*",
}

export enum Heuristic {
	NONE = "H(x)=0",
	MD = "Manhattan distance",
	HD = "Hamming distance",
	ED = "Euclidean distance",
}

// overengineered solution to display chosen algorithm and heuristic as its abbreviation
export function getEnumKeyByValue(myEnum: any, enumValue: string) {
    let keys = Object.keys(myEnum).filter(x => myEnum[x] === enumValue);
    return keys.length > 0 ? keys[0] : null;
}