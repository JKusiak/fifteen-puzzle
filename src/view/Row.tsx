import { styled } from "@mui/material";
import { FC, Fragment } from "react";
import { ITile } from "../types";
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
				const tile: ITile = {
					xPos: columnNumber, 
					yPos: props.rowNumber, 
					value: value
				}

				return (
					<Fragment key={columnNumber}>
						<Tile tile={tile}/>
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