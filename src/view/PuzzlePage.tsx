import { styled,} from "@mui/material";
import Puzzle from "./Board";

const PageContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexBasis: 'auto',
	width: '100%',
	height: '90vh',
	justifyContent: 'center',
	alignItems: 'center',
}));


const PuzzlePage = () => {
	

	return(
		<>
			<PageContainer>
				<Puzzle/>
			</PageContainer>
		</>
	)
}

export default PuzzlePage;