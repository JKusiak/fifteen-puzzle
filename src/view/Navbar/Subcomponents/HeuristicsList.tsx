import { Button, Menu, MenuItem, styled, Typography } from "@mui/material";
import { FC, useContext, useState } from "react";
import { ActionTypes } from "../../../logic/reducers/GameReducer";
import { GameReducerContext } from "../../../App";
import { Algorithm, getEnumKeyByValue, Heuristic } from "../../../types";


const StyledButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.dark,
	color: theme.palette.primary.main,
	padding: theme.spacing(0.5),
	marginLeft: theme.spacing(1),
	width: '80px',
	'&:hover': {
		backgroundColor: theme.palette.secondary.main,
	},
	'& > svg': {
		transform: 'scale(1.1)',
		color: theme.palette.primary.main,
	}
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
	"& .MuiList-root": {
		backgroundColor: theme.palette.secondary.dark,
	},
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
	color: theme.palette.primary.main,

}));

const StyledText = styled(Typography)(({ theme }) => ({
	textTransform: 'none',
}));

const MenuWrapper = styled('span')(({ theme }) => ({
	fontSize: '18px',
	fontWeight: 'bold',
	marginRight: theme.spacing(4),
}));


const HeuristicsList = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const openList = Boolean(anchorEl);
	const { gameState, dispatch } = useContext(GameReducerContext);
	let isAlgorithmInformed = (
		gameState.algorithm === "Best First Search"
		|| gameState.algorithm === "A*"
		|| gameState.algorithm === "Simplified Memory Bounded A*"
	);

	function handleClose() {
		setAnchorEl(null);
	}

	function handleMenu(event: React.MouseEvent<HTMLElement>) {
		setAnchorEl(event.currentTarget);
	}

	function handleChoose(heuristic: string) {
		dispatch({ type: ActionTypes.ChooseHeuristic, payload: heuristic });
		handleClose();
	}

	function displayAlgorithms() {
		return (
			<StyledMenu
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				open={openList}
				onClose={handleClose}
			>
				{Object.values(Heuristic).map((heuristic: Heuristic) => {
					return (
						<StyledMenuItem
							key={heuristic}
							onClick={() => handleChoose(heuristic)}
						>
							{heuristic}
						</StyledMenuItem>
					)
				})}
			</StyledMenu>
		)
	}

	return (
		<>
			<MenuWrapper>
				Heuristic
				<StyledButton onClick={handleMenu} disabled={!isAlgorithmInformed}>
					<StyledText noWrap fontSize='16px'>
						{getEnumKeyByValue(Heuristic, gameState.heuristic)}
					</StyledText>
				</StyledButton>
				{displayAlgorithms()}
			</MenuWrapper>
		</>
	)
}

export default HeuristicsList;