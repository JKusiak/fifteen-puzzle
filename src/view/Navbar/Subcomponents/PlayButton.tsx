import { IconButton, styled } from "@mui/material";
import { FC, useContext, useState } from "react";
import { GameReducerContext } from "../../../App";
import PlayIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';


const StyledIconButton = styled(IconButton)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.dark,
	padding: theme.spacing(1),
	'&:hover': {
		backgroundColor: theme.palette.secondary.main,
	},
	'& > svg': {
		transform: 'scale(1.1)',
		color: theme.palette.primary.main,
	},
}));

interface PlayProps {

}

const PlayButton: FC<PlayProps> = (props) => {
	const [isPlaying, setPlaying] = useState<boolean>(false);
	const { gameState, dispatch } = useContext(GameReducerContext);
	
	function handlePlay() {
		setPlaying(!isPlaying);
	}

	return (
		<>
			<StyledIconButton onClick={handlePlay}>
				{isPlaying ? <PauseIcon/> : <PlayIcon/>}		
			</StyledIconButton>
		</>
	)
}

export default PlayButton;