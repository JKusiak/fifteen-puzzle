import { Game } from "../../types";
import { createBoard } from "../utils/createBoard";
import { swapTiles } from "../utils/swapTiles";

// helper function for ensuring the find function result never equals undefined
export function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
	if (argument === undefined || argument === null) {
		throw new TypeError(message);
	}

	return argument;
}

export enum ActionTypes {
	CreateNewBoard = 'CREATE NEW BOARD',
	AddColumn = 'ADD COLUMN',
	DeleteColumn = 'DELETE COLUMN',
	AddRow = 'ADD ROW',
	DeleteRow = 'DELETE ROW',
	SwapTiles = 'SWAP TILES',
	ChooseAlgorithm = 'CHOOSE ALGORITHM',
	ChooseHeuristic = 'CHOOSE HEURISTIC',
	SetPlayed = 'SET PLAYED',
	SetSpeed = 'SET SPEED',
	UpdateBoard = 'UPDATE BOARD',
	SetSolved = 'SET SOLVED',
	AddTimeout = 'ADD TIMEOUT',
	ClearTimeouts = 'CLEAR TIMEOUTS',
}

export type Action = {
	type: ActionTypes,
	payload?: any,
}

export const gameReducer = (state: Game, action: Action) => {
	const { type, payload } = action;

	switch (type) {
		case ActionTypes.CreateNewBoard:
			const newBoard = createBoard(payload.rows, payload.columns);
			return {
				...state,
				board: newBoard,
				moves: 0,
			}
		case ActionTypes.AddColumn:
			return {
				...state,
				columns: state.columns + 1,
			}
		case ActionTypes.DeleteColumn:
			if (state.columns > 2) {
				return {
					...state,
					columns: state.columns - 1,
				}
			} else {
				return state;
			}
		case ActionTypes.AddRow:
			return {
				...state,
				rows: state.rows + 1,
			}
		case ActionTypes.DeleteRow:
			if (state.rows > 2) {
				return {
					...state,
					rows: state.rows - 1,
				}
			} else {
				return state;
			}
		case ActionTypes.SwapTiles:
			return {
				...state,
				board: swapTiles(payload.board, payload.clickedTile, payload.movableTile),
				moves: state.moves + 1,
			}
		case ActionTypes.ChooseAlgorithm:
			return {
				...state,
				algorithm: payload,
			}
		case ActionTypes.ChooseHeuristic:
			return {
				...state,
				heuristic: payload,
			}
		case ActionTypes.SetPlayed:
			return {
				...state,
				isPlayed: payload,
			}
		case ActionTypes.SetSpeed:
			return {
				...state,
				playSpeed: payload,
			}
		case ActionTypes.UpdateBoard:
			return {
				...state,
				board: payload,
				moves: state.moves + 1,
			}
		
		case ActionTypes.AddTimeout:
			return {
				...state,
				timeouts: [...state.timeouts, payload],
			}
		case ActionTypes.ClearTimeouts:
			return {
				...state,
				timeouts: [],
			}
		case ActionTypes.SetSolved:
			return {
				...state,
				isFinished: payload,
			}
		default:
			return state;
	}
}