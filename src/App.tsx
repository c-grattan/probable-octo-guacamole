import Box from "@mui/material/Box";
import { createContext, useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { Content } from "./components/Content";
import { CommodityStack } from "./components/inventoryManagement/CommodityStack";
import { InventoryController } from "./components/inventoryManagement/InventoryController";

export type InventoryType = {
	profits: number,
	inventory: Map<number, CommodityStack>
}

const newInv: InventoryType = {
	profits: 0,
	inventory: new Map<number, CommodityStack>()
}

export const InventoryControl = createContext(new InventoryController(null, null));
export const InventoryContext = createContext(newInv);

function App() {
	const [inventory, setInventory] = useState({
		profits: 0,
		inventory: new Map<number, CommodityStack>()
	});
	const [invControl,] = useState(new InventoryController(inventory, setInventory));

	return (
		<InventoryControl.Provider value={invControl}>
			<InventoryContext.Provider value={inventory}>
				<Box>
					<header>
						<AppHeader />
					</header>
				</Box>
				<Box>
					<Content />
				</Box>
			</InventoryContext.Provider>
		</InventoryControl.Provider>
	);
}

export default App;