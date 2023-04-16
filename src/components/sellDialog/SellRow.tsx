import { Box, Button, TextField, Typography } from "@mui/material";
import { CommodityStack } from "../inventoryManagement/CommodityStack";
import { useContext, useState } from "react";
import { InventoryControl } from "../../App";

type SRProps = {
	stack: CommodityStack
}

export const SellRow = ({stack}: SRProps) => {
	const inventoryHandler = useContext(InventoryControl);
	const [amount, setAmount] = useState(0);
	const [sellPrice, setSellPrice] = useState(0);

	function clamp(value: number, minimum: number, maximum?: number): number {
		const positiveAmount = Math.max(minimum, value);
		if(maximum) {
			return Math.min(maximum, positiveAmount);
		} else {
			return positiveAmount;
		}
	}

	function sell() {
		if(amount > 0) {
			inventoryHandler.sell(stack.name, amount, sellPrice);
		}
	}

	return <Box display="flex" alignItems="center">
		<Typography variant="body1"></Typography>
		<TextField
			label={`${stack.name} (${stack.count})`}
			type="number"
			margin="normal"
			value={amount < 0 ? 0 : amount}
			onChange={(event) => setAmount(clamp(+event.target.value, 0, stack.count))}
		/>
		<TextField
			label="Unit Price"
			type="number"
			margin="normal"
			value={sellPrice < 0 ? 0 : sellPrice}
			onChange={(event) => setSellPrice(clamp(+event.target.value, 0))}
		/>
		<Button onClick={sell}>Sell</Button>
	</Box>
}