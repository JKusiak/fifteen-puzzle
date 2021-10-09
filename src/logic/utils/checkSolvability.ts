import { isEven } from "./isEven";

function getInversions(array: number[], N: number) {
	let invCount = 0;

	for (let i = 0; i < N * N - 1; i++) {
		for (let j = i + 1; j < N * N; j++) {
			// count all pairs(i, j) such that i appears before j, but i > j
			if (array[j] && array[i] && array[i] > array[j])
			invCount++;
		}
	}
	
	return invCount;
}

function getBlankTileRow(board: number[][], N: number) {
	// start from bottom-right corner of matrix
	for (let i = N - 1; i >= 0; i--) {
		for (let j = N - 1; j >= 0; j--) {
			if (board[i][j] == 0) {
				return N - i;
			}
		}
	}
}

/* game is solvable when for N denoting size of the grid and X denoting number of inversions:
	- if N is odd, X is even in the input state
	- if N is even:
		- the blank is on an even row counting from the bottom and X is odd or
		- the blank is on an odd row counting from the bottom and X is even

*/

export function isSolvable(array: number[], board: number[][], N: number) {
	let invCount = getInversions(array, N);
	

	if (!(isEven(N))) {
		return isEven(invCount);
	} else {
		const blankPosition = getBlankTileRow(board, N) || 0;

		if (isEven(blankPosition)) {
			return !(isEven(invCount));
		} else {
			return isEven(invCount);
		}
	}
}
