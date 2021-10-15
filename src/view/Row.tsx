import { styled } from "@mui/material";
import { FC, Fragment } from "react";
import { Tile } from "../types";
import TileElem from "./TileElem";


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
				const tile: Tile = {
					xPos: columnNumber, 
					yPos: props.rowNumber, 
					value: value
				}

				return (
					<Fragment key={columnNumber}>
						<TileElem tile={tile}/>
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