import { Card, styled, SvgIcon } from "@mui/material";
import { FC } from "react";

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
}

const Tile: FC<TileProps> = (props) => {
	
	const isBlank = props.value.valueOf() === 0 ? true : false;

	return (
		<>
			{isBlank
			// no clue why text y offset must be 20, just don't touch, it works perfectly
				? <EmptyCard/>
				: <NumberCard>
					<StyledNumber>
						
						<text x='50%' y='20' text-anchor='middle'>
							{props.value}
						</text>
					</StyledNumber>
				</NumberCard>
			}
		</>
	)
}

export default Tile;