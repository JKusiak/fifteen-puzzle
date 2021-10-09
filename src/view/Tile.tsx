import { Card, styled } from "@mui/material";
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

interface TileProps {
	value: number,
}

const Tile: FC<TileProps> = (props) => {
	
	const isBlank = props.value.valueOf() === 0 ? true : false;

	return (
		<>
			<NumberCard>{isBlank ? ' ' : props.value}</NumberCard>
		</>
	)
}

export default Tile;