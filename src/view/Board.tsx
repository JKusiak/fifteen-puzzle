import { styled } from "@mui/material";
import { Fragment, useContext, useEffect } from "react";
import { GameReducerContext } from "../App";
import { ActionTypes } from "../logic/reducers/GameReducer";
import Row from "./Row";


const BoardFrame = styled('div')(({ theme }) => ({
	maxHeight: '500px',
	maxWidth: '500px',
}));


const Board = () => {
	const { gameState, dispatch } = useContext(GameReducerContext);

	useEffect(() => {
		dispatch({ type: ActionTypes.CreateNewBoard, payload: {rows: gameState.rows, columns: gameState.columns}})
	}, [gameState.rows, gameState.columns])


	function displayBoard() {
		return (
			gameState.board.map((row: number[], rowNumber: number) => {
				return (
					<Fragment key={rowNumber}>
						<Row rowContent={row} rowNumber={rowNumber}/>
					</Fragment>
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