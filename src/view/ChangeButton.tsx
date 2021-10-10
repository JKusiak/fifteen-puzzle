import { IconButton, styled, SvgIconProps } from "@mui/material";
import { FC, useContext } from "react";
import { GameReducerContext } from "../App";
import { ActionTypes } from "../logic/reducers/GameReducer";


const StyledIconButton = styled(IconButton)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.dark,
	padding: theme.spacing(0.1),
	marginLeft: theme.spacing(1),
	'&:hover': {
		backgroundColor: theme.palette.secondary.main,
	},
	'& > svg': {
		color: theme.palette.primary.main,
	}
}));

interface ChangeProps {
	actionType: ActionTypes,
	icon: React.ReactElement<SvgIconProps>,
}

const ChangeButton: FC<ChangeProps> = (props) => {
	const { dispatch } = useContext(GameReducerContext);


	function changeValue() {
		dispatch({ type: props.actionType, payload: {}});
	}

	return (
		<>
			<StyledIconButton onClick={changeValue}>
				{props.icon}
			</StyledIconButton>
		</>
	)
}

export default ChangeButton;