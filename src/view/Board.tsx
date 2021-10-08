import { AppBar, styled } from "@mui/material";
import Tile from "./Tile";


// const StyledAppBar = styled(AppBar)(({ theme }) => ({
// 	height: theme.spacing(8.5),
// 	boxShadow: theme.shadows[5],
// 	zIndex: 100,
// 	backgroundColor: theme.palette.primary.main,
// }));


const Board = () => {
	

	return(
		<>
			<Tile/>
			<Tile/>
		</>
	)
}

export default Board;