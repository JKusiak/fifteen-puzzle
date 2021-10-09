import { AppBar, styled } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import { ActionTypes, boardContentReducer } from "../logic/reducers/BoardReducer";
import { createBoard } from "../logic/utils/createBoard";
import Row from "./Row";
import Tile from "./Tile";


const BoardFrame = styled('div')(({ theme }) => ({
	height: '600px',
	width: '600px',
}));


const Board = () => {
	// for now has to be NxN type grid, no way to check solvability for non-square matrix
	const newBoard = createBoard(4, 4);
	const [boardState, dispatch] = useReducer(boardContentReducer, newBoard);

	function displayBoard() {
		return (
			boardState.map((row: number[]) => {
				return (
					<Row rowContent={row} />
				)
			})
		)
	}


	return (
		<>
			<BoardFrame>
				{displayBoard()}
			</BoardFrame>
		</>
	)
}

export default Board;