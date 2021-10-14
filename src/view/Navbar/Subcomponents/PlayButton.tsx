import { IconButton, styled } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { GameReducerContext } from "../../../App";
import PlayIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { ActionTypes } from "../../../logic/reducers/GameReducer";
import { chooseAlgorithm } from "../../../logic/algorithms/chooseAlgorithm";
import { Algorithm } from "../../../types";


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
}));

interface PlayProps {

}

const PlayButton: FC<PlayProps> = (props) => {
	const [isPlaying, setPlaying] = useState<boolean>(false);
	const { gameState, dispatch } = useContext(GameReducerContext);
	
	useEffect(() => {
		if (isPlaying && gameState.algorithm !== Algorithm.NONE) {
			const solvedBoard = chooseAlgorithm(gameState.board, gameState.algorithm);

			for (const boardState of solvedBoard) {
				// console.log(boardState);
				// if (gameState.playSpeed !== 100) {
				// 	setTimeout(() => {}, 100 / gameState.playSpeed);
				// }
				dispatch({type: ActionTypes.UpdateBoard, payload: boardState});
			}
		}
	}, [isPlaying])


	return (
		<>
			<StyledIconButton onClick={() => setPlaying(!isPlaying)}>
				{isPlaying ? <PauseIcon/> : <PlayIcon/>}		
			</StyledIconButton>
		</>
	)
}

export default PlayButton;