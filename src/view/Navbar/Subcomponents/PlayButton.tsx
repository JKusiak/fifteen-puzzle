import { IconButton, styled } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
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

interface PlayProps {

}

const PlayButton: FC<PlayProps> = (props) => {
	const [isPlaying, setPlaying] = useState<boolean>(false);
	const { gameState, dispatch } = useContext(GameReducerContext);
	let timeouts: NodeJS.Timeout[] = [];

	useEffect(() => {
		if (isPlaying && gameState.algorithm !== Algorithm.NONE) {
			const solution = chooseAlgorithm(gameState.board, gameState.algorithm, gameState.heuristic);
			let iterateDelay: number = 0;

			for (const boardState of solution) {
				timeouts.push(setTimeout(() => {
					dispatch({ type: ActionTypes.UpdateBoard, payload: boardState });
					if (isFinished(boardState as number[][])) {
						dispatch({ type: ActionTypes.SetSolved, payload: true });
					}
				}, ((10000 * iterateDelay) / gameState.playSpeed )));
				iterateDelay++;
			}
		}
	}, [isPlaying])

	return (
		<>
			<StyledIconButton onClick={() => setPlaying(!isPlaying)}>
				{isPlaying ? <PauseIcon /> : <PlayIcon />}
			</StyledIconButton>
		</>
	)
}

export default PlayButton;