import { AppBar, styled, Toolbar } from "@mui/material";
import PlayButton from "./Subcomponents/PlayButton";
import ColumnsMenu from "./Subcomponents/ColumnsMenu";
import RowsMenu from "./Subcomponents/RowsMenu";
import AlgorithmsList from "./Subcomponents/AlgorithmsList";
import HeuristicsList from "./Subcomponents/HeuristicsList";
import SpeedSlider from "./Subcomponents/SpeedSlider";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
	height: theme.spacing(8.5),
	boxShadow: theme.shadows[5],
	zIndex: 100,
	backgroundColor: theme.palette.primary.main,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	position: "sticky",
	top: 0,
}));

const RightContainer = styled('div')(({ theme }) => ({
	marginLeft: 'auto',
}));

const LeftContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

const Logo = styled('span')(({ theme }) => ({
	fontSize: '26px',
	fontWeight: 'bold',
	marginRight: theme.spacing(4),
}));

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);


const Navbar = () => {

	return (
		<>
			<Offset />
			<StyledAppBar>
				<StyledToolbar>
					<LeftContainer>
						<Logo>N-Puzzle</Logo>
						<RowsMenu />
						<ColumnsMenu />
						
					</LeftContainer>


					<RightContainer>
						
						<AlgorithmsList />
						<HeuristicsList />
						<SpeedSlider />
						<PlayButton />
					</RightContainer>
				</StyledToolbar>
			</StyledAppBar>
		</>
	)
}

export default Navbar;