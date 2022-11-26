import { useState } from "react";
import { InventoryManagement } from "./inventoryManagement/InventoryManagement";
import { ProfitTracker } from "./ProfitTracker";

export const Content = () => {
	const [profits, setProfits] = useState(0);

	function updateProfits(change: number): void {
		setProfits(profits + change);
	}

	return <>
		<InventoryManagement updateProfits={(change: number) => updateProfits(change)} />
		<ProfitTracker profits={profits} />
	</>;
}