import { createTheme } from "@mui/material";


const palette = {
	primary: {
		light: '#fdfdfd',
		main: '#fff3e0',
		dark: '#ccc0ae',
	},
	secondary: {
		light: '#fffffb',
		main: '#d7ccc8',
		dark: '#a69b97',
	}
}

export const theme = createTheme({
	palette: palette,
});