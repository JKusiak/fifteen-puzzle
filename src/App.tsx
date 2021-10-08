import { CssBaseline, styled, ThemeProvider } from "@mui/material";
import { Helmet } from "react-helmet";
import { theme } from "./theme";
import Navbar from "./view/Navbar";
import PuzzlePage from "./view/PuzzlePage";
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
	

	return (
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
	);
}

export default App;
