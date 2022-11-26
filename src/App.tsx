import Box from "@mui/material/Box";
import { useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { Content } from "./components/Content";

function App() {
	const [profits, setProfits] = useState(0);

	function updateProfits(change: number): void {
		setProfits(profits + change);
	}

	return (
		<Box>
			<Box>
				<header>
					<AppHeader profits={profits} />
				</header>
			</Box>
			<Box>
				<Content updateProfits={updateProfits} />
			</Box>
		</Box>
	);
}

export default App;