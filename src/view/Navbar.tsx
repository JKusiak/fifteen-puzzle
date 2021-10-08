import { AppBar, styled, Toolbar } from "@mui/material";

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

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Navbar = () => {
	
	
	return(
		<>
		<Offset/>
		<StyledAppBar>
			<StyledToolbar>
				<div>
					123
				</div>
				<RightContainer>
					456
				</RightContainer>
			</StyledToolbar>
		</StyledAppBar>
		</>
	)
}

export default Navbar;