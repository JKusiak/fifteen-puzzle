import { IconButton, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import RefreshIcon from '@mui/icons-material/Refresh';
import { ActionTypes } from "../logic/reducers/GameReducer";
import { GameReducerContext } from "../App";


const StyledIconButton = styled(IconButton)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.dark,
	padding: theme.spacing(2),
	marginLeft: '550px',
	boxShadow: theme.shadows[2],
	'&:hover': {
		backgroundColor: theme.palette.secondary.main,
	},
	'& > svg': {
		transform: 'scale(1.5)',
		color: theme.palette.primary.main,
	},
}));


const RefreshButton = () => {
	const { gameState, dispatch } = useContext(GameReducerContext);

	function handleRefresh() {
		if (gameState.isPlaying) {
			dispatch({ type: ActionTypes.SetPlaying, payload: false});
		}
		
		for (let i = 0; i < gameState.timeouts.length; i++) {
			dispatch({ type: ActionTypes.ClearTimeouts });
			clearTimeout(gameState.timeouts[i]);
		}
		
		dispatch({ type: ActionTypes.CreateNewBoard, payload: { rows: gameState.rows, columns: gameState.columns } });
		dispatch({ type: ActionTypes.SetSolved, payload: false });
	}

	return (
		<>
			<StyledIconButton onClick={handleRefresh}>
				<RefreshIcon />
			</StyledIconButton>
		</>
	)
}

export default RefreshButton;