import { Card, styled, SvgIcon } from "@mui/material";
import { FC, useContext } from "react";
import { GameReducerContext } from "../App";
import { ActionTypes } from "../logic/reducers/GameReducer";
import { isFinished } from "../logic/utils/checkFinished";
import { isMovable } from "../logic/utils/checkMovability";

const NumberCard = styled(Card)(({ theme }) => ({
	display: 'flex',
	flex: '1 1 0px',
	height: 'auto',
	justifyContent: 'center',
	alignItems: 'center',
	margin: theme.spacing(1),
	backgroundColor: theme.palette.primary.main,
	border: '2px solid',
	borderColor: theme.palette.secondary.dark,
	'&:hover': {
		cursor: 'pointer',
		boxShadow: theme.shadows[5],
	},
	'&:before': {
		content: '""',
		float: 'left',
		paddingTop: '100%',
	},
}));

const EmptyCard = styled('div')(({ theme }) => ({
	display: 'flex',
	flex: '1 1 0px',
	height: 'auto',
	//padding to compensate for the border in number card
	padding: '2px',
	margin: theme.spacing(1),
	'&:before': {
		content: '""',
		float: 'left',
		paddingTop: '100%',
	},
}));

const StyledNumber = styled(SvgIcon)(({ theme }) => ({
	width: '100%',
	height: '50%',
	color: '#171717',
}));


interface TileProps {
	value: number,
	rowNumber: number,
	columnNumber: number,
}

const Tile: FC<TileProps> = (props) => {
	const { gameState, dispatch } = useContext(GameReducerContext);
	const isBlank = props.value.valueOf() === 0 ? true : false;

	function handleClick() {
		const {movable, tile} = isMovable(gameState.board, props.rowNumber, props.columnNumber);

		if (movable) {
			const swapPayload = {
				board: gameState.board,
				xPos: props.rowNumber,
				yPos: props.columnNumber,
				xMovPos: tile?.xPos,
				yMovPos: tile?.yPos,
			}

			dispatch({type: ActionTypes.SwapTiles, payload: swapPayload});
			dispatch({type: ActionTypes.AddMove, payload: {}});
		}
		
		if (isFinished(gameState.board)) {
			dispatch({type: ActionTypes.SetSolved, payload: true});
		}
	}

	return (
		<>
			{// no clue why text y offset must be 20, just don't touch, it works perfectly
			isBlank
				? <EmptyCard/>
				: <NumberCard onClick={handleClick}>
					<StyledNumber>
						<text x='50%' y='20' textAnchor='middle'>
							{props.value}
						</text>
					</StyledNumber>
				</NumberCard>
			}
		</>
	)
}

export default Tile;