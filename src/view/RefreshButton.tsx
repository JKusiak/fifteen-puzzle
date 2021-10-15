import { IconButton, styled } from "@mui/material";
import { FC, useContext } from "react";
import RefreshIcon from '@mui/icons-material/Refresh';
import { ActionTypes } from "../logic/reducers/GameReducer";
import { GameReducerContext } from "../App";


const StyledIconButton = styled(IconButton)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.dark,
	padding: theme.spacing(2),
	marginLeft: '550px',
	'&:hover': {
		backgroundColor: theme.palette.secondary.main,
	},
	'& > svg': {
		transform: 'scale(1.5)',
		color: theme.palette.primary.main,
	},
	boxShadow: theme.shadows[2],
}));

interface RefreshProps {

}

const RefreshButton: FC<RefreshProps> = (props) => {
	const { gameState, dispatch } = useContext(GameReducerContext);
	
	function handleRefresh() {
		dispatch({ type: ActionTypes.CreateNewBoard, payload: {rows: gameState.rows, columns: gameState.columns}});
		dispatch({ type: ActionTypes.SetSolved, payload: false});
	}

	return (
		<>
			<StyledIconButton onClick={handleRefresh}>
				<RefreshIcon/>
			</StyledIconButton>
		</>
	)
}

export default RefreshButton;