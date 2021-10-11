import { Slider, styled } from "@mui/material";
import { useContext } from "react";
import { ActionTypes } from "../../../logic/reducers/GameReducer";
import { GameReducerContext } from "../../../App";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const SliderWrapper = styled('span')(({ theme }) => ({
	fontSize: '18px',
	fontWeight: 'bold',
	marginRight: theme.spacing(4),
}));

const StyledSpeedNumber = styled('span')(({ theme }) => ({
	marginLeft: theme.spacing(1),
	marginRight: theme.spacing(1),
	marginTop: theme.spacing(1),
}));

const StyledSlider = styled(Slider)(({ theme }) => ({
	width: '100px',
	marginLeft: theme.spacing(1),
	padding: theme.spacing(0.5),
}));


const SpeedSLider = () => {
	const { gameState, dispatch } = useContext(GameReducerContext);


	function handleValueChange(event: Event | React.SyntheticEvent<Element, Event>, value: number | number[]) {
		dispatch({ type: ActionTypes.SetSpeed, payload: value });
	}

	return (
		<SliderWrapper>
			Speed
			<StyledSpeedNumber>
				{gameState.playSpeed === 100 ? <AllInclusiveIcon /> : gameState.playSpeed}
			</StyledSpeedNumber>
			<StyledSlider
				defaultValue={50}
				step={1}
				min={1}
				max={100}
				color={'secondary'}
				onChangeCommitted={handleValueChange}
			/>
		</SliderWrapper>
	)
}

export default SpeedSLider;