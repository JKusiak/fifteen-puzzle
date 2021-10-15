import { CssBaseline, ThemeProvider } from "@mui/material";
import { Helmet } from "react-helmet";
import { theme } from "./theme";
import Navbar from "./view/Navbar/Navbar";
import PuzzlePage from "./view/PuzzlePage";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createContext, Dispatch, useReducer } from "react";
import { Action, gameReducer } from "./logic/reducers/GameReducer";
import { initiateGame } from "./logic/utils/initiateGame";
import { Game } from "./types";


export const GameReducerContext = createContext<{ gameState: Game, dispatch: Dispatch<Action> }>({} as any);


const App = () => {
	const [gameState, dispatch] = useReducer(gameReducer, initiateGame(4, 4));

	return (
		<GameReducerContext.Provider value={{ gameState, dispatch }}>
			<ThemeProvider theme={theme}>
			<CssBaseline>
				<Helmet>
					<title>Fifteen</title>
					<meta name="description" content="Algorithmically solved puzzle game" />
					<style>{`body { background-color: ${theme.palette.primary.light}; }`}</style>
				</Helmet>

				<Router>
					<Navbar />
					<Route path="/">
						<PuzzlePage/>
					</Route>
				</Router>
				
			</CssBaseline>
		</ThemeProvider>
		</GameReducerContext.Provider>
	);
}

export default App;
