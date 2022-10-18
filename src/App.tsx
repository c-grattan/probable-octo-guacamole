import Box from "@mui/material/Box";
import { AppHeader } from "./components/AppHeader";
import { Content } from "./components/Content";

function App() {
	return (
		<Box>
			<Box>
				<header>
					<AppHeader />
				</header>
			</Box>
			<Box>
				<Content />
			</Box>
		</Box>
	);
}

export default App;