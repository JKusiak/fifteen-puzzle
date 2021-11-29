export interface Game {
	rows: number;
	columns: number;
	moves: number;
	board: number[][];
	algorithm: Algorithm;
	heuristic: Heuristic;
	isPlaying: boolean;
	playSpeed: number;
	isFinished: boolean;
	timeouts: any;
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

export interface ArrayNode {
	value: any,
	direction: string,
}

export interface QueueNode {
	key: number
	value: any,
	depth: number,
	direction: string,
}

export interface PriorityQueue<T> {
	insert(item: T, heuristic: number, depth: number, direction: string): void;
	peek(): T;
	pop(): QueueNode,
	size(): number;
	isEmpty(): boolean;
}

export enum Algorithm {
	NONE = "None",
	BrFS = "Breadth First Search",
	DFS = "Depth First Search",
	IDDFS = "Iterative Deepening Depth First Search",
	BeFS = "Greedy Best First Search",
	AS = "A*",
}

export enum Heuristic {
	NONE = "H(x)=0",
	HD = "Hamming distance",
	MD = "Manhattan distance",
	LC = "Linear conflict",
	ED = "Euclidean distance",
}

// overengineered solution to display chosen algorithm and heuristic as its abbreviation
export function getEnumKeyByValue(myEnum: any, enumValue: string) {
    let keys = Object.keys(myEnum).filter(x => myEnum[x] === enumValue);
    return keys.length > 0 ? keys[0] : null;
}