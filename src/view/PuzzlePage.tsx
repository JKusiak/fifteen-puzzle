import { styled,} from "@mui/material";
import { useContext } from "react";
import { GameReducerContext } from "../App";
import Board from "./Board";
import RefreshButton from "./RefreshButton";

const PageContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexGrow: 0,
	flexDirection: 'column',
	width: '100%',
	height: '90vh',
	justifyContent: 'center',
	alignItems: 'center',
}));

const WinCommunicate = styled('div')(({ theme }) => ({
	fontSize: '36px',
	fontWeight: 'bold',
}));

const MovesCounter = styled('div')(({ theme }) => ({
	fontSize: '36px',
	fontWeight: 'bold',
	marginBottom: theme.spacing(2),
}));


const PuzzlePage = () => {
	const { gameState } = useContext(GameReducerContext);

	return (
		<>
			<PageContainer>
				<MovesCounter>Moves: {gameState.moves} </MovesCounter>
				<Board/>
				<RefreshButton />
				{gameState.isFinished && 
					<WinCommunicate>
						Puzzle solved 🎉
					</WinCommunicate>
				}
			</PageContainer>
		</>
	)
}

export default PuzzlePage;