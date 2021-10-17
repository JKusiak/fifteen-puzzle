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
	marginRight: theme.spacing(2),
}));


const ColumnsMenu = () => {
	const { gameState } = useContext(GameReducerContext);
	
	return(
		<MenuWrapper>
			Columns {gameState.columns}
			<ChangeButton actionType={ActionTypes.DeleteColumn} icon={<RemoveIcon/>}/>
			<ChangeButton actionType={ActionTypes.AddColumn} icon={<AddIcon/>}/>
		</MenuWrapper>
	)
}

export default ColumnsMenu;