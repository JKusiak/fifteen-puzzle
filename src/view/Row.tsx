import { styled } from "@mui/material";
import { FC, Fragment } from "react";
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
					<Fragment key={columnNumber}>
						<Tile value={value} rowNumber={props.rowNumber} columnNumber={columnNumber}/>
					</Fragment>
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