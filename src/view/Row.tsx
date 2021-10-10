import { styled } from "@mui/material";
import { FC } from "react";
import Tile from "./Tile";


const RowContainer = styled('div')(({ theme }) => ({
	display: 'flex',
}));

interface RowProps {
	rowContent: number[],
	rowNumber: number,
}

const Row: FC<RowProps> = (props) => {
	
	function displayRow(row: number[]) {
		return(
			row.map((value: number, columnNumber: number,) => {
				return (
					<Tile value={value} rowNumber={props.rowNumber} columnNumber={columnNumber}/>
				)
			})
		)
	}

	return (
		<>
			<RowContainer> {displayRow(props.rowContent)} </RowContainer>
		</>
	)
	
}

export default Row;