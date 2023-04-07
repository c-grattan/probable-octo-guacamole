import { Typography } from "@mui/material"
import { useContext } from "react";
import { InventoryContext } from "../App";

export const ProfitTracker = () => {
	const inventory = useContext(InventoryContext);
	const profits = inventory.profits;

	const color: string = profits == 0 ? "" : profits > 0 ? "darkgreen" : "darkred";

	return	<Typography variant="h2" color={color} textAlign="center">
				{profits < 0 ? '-' : '+'}₡{Math.abs(profits)}
			</Typography>
}