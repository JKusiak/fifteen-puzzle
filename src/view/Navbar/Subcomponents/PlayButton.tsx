import { IconButton, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { GameReducerContext } from "../../../App";
import PlayIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { ActionTypes } from "../../../logic/reducers/GameReducer";
import { chooseAlgorithm } from "../../../logic/algorithms/chooseAlgorithm";
import { Algorithm } from "../../../types";
import { isFinished } from "../../../logic/utils/checkFinished";


const StyledIconButton = styled(IconButton)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.dark,
	padding: theme.spacing(1),
	'&:hover': {
		backgroundColor: theme.palette.secondary.main,
	},
	'& > svg': {
		transform: 'scale(1.1)',
		color: theme.palette.primary.main,
	},
	boxShadow: theme.shadows[3],
}));


const PlayButton = () => {
	const { gameState, dispatch } = useContext(GameReducerContext);

	// TODO this is a sad solution and it surely could be implemented better
	// try to make it only compute once and display depending on the button clicks
	useEffect(() => {
		if (gameState.isPlaying && gameState.algorithm !== Algorithm.NONE) {
			const solution = chooseAlgorithm(gameState.board, gameState.algorithm, gameState.heuristic);
			let iterateDelay: number = 0;

			for (const boardState of solution) {
				const newTimeout = (setTimeout(() => {
					dispatch({ type: ActionTypes.UpdateBoard, payload: boardState });
					if (isFinished(boardState as number[][])) {
						dispatch({ type: ActionTypes.SetSolved, payload: true });
					}
				}, ((10000 * iterateDelay) / gameState.playSpeed)));

				dispatch({ type: ActionTypes.AddTimeout, payload: newTimeout });
				iterateDelay++;
			}
		}
	}, [gameState.isPlaying])

	useEffect(() => {
		if (!gameState.isPlaying) {
			for (let i = 0; i < gameState.timeouts.length; i++) {
				dispatch({ type: ActionTypes.ClearTimeouts });
				clearTimeout(gameState.timeouts[i]);
			}
		}
	}, [gameState.isPlaying])


	function handlePlay() {
		dispatch({ type: ActionTypes.SetPlaying, payload: !gameState.isPlaying})
	}


	return (
		<>
			<StyledIconButton onClick={handlePlay}>
				{gameState.isPlaying ? <PauseIcon /> : <PlayIcon />}
			</StyledIconButton>
		</>
	)
}

export default PlayButton;