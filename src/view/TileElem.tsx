import { Card, styled, SvgIcon } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { GameReducerContext } from "../App";
import { ActionTypes } from "../logic/reducers/GameReducer";
import { isFinished } from "../logic/utils/checkFinished";
import { isMovable } from "../logic/utils/checkMovability";
import { Tile } from "../types";

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
	tile: Tile,
}

const TileElem: FC<TileProps> = (props) => {
	const { gameState, dispatch } = useContext(GameReducerContext);
	const [moved, setMoved] = useState(false);
	const isBlank = props.tile.value.valueOf() === 0 ? true : false;

	useEffect(() => {
		if (isFinished(gameState.board)) {
			dispatch({type: ActionTypes.SetSolved, payload: true});
		}
	}, [moved])


	function handleClick() {
		const {movable, movableTile} = isMovable(gameState.board, props.tile);
		if (movable) {
			const swapPayload = {
				board: gameState.board,
				clickedTile: props.tile,
				movableTile: movableTile,
			}

			dispatch({type: ActionTypes.SwapTiles, payload: swapPayload});
			setMoved(!moved);
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
							{props.tile.value}
						</text>
					</StyledNumber>
				</NumberCard>
			}
		</>
	)
}

export default TileElem;