import { AppBar, styled } from "@mui/material";
import { FC } from "react";
import Tile from "./Tile";

interface RowProps {
	rowContent: number[],
}

const RowContainer = styled('div')(({ theme }) => ({
	display: 'flex',
}));

const Row: FC<RowProps> = (props) => {
	
	function displayRow(row: number[]) {
		return(
			row.map((value: number) => {
				return (
					<Tile value={value}/>
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