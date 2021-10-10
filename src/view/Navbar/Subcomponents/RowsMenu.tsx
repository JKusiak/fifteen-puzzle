import { styled } from "@mui/material";
import { useContext } from "react";
import { GameReducerContext } from "../../../App";
import { ActionTypes } from "../../../logic/reducers/GameReducer";
import AddIcon from '@mui/icons-material/Add';
import ChangeButton from "../../ChangeButton";
import RemoveIcon from '@mui/icons-material/Remove';

const MenuWrapper = styled('div')(({ theme }) => ({
	fontSize: '18px',
	fontWeight: 'bold',
	marginRight: theme.spacing(4),
}));


const RowsMenu = () => {
	const { gameState } = useContext(GameReducerContext);
	
	return(
		<MenuWrapper>
			Rows {gameState.rows}
			<ChangeButton actionType={ActionTypes.AddRow} icon={<AddIcon/>}/>
			<ChangeButton actionType={ActionTypes.DeleteRow} icon={<RemoveIcon/>}/>
		</MenuWrapper>
	)
}

export default RowsMenu;