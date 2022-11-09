import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add"
import { useState } from "react";
import { InventoryDialog } from "./InventoryDialog";
import { Item } from "./inventory/Item";

export const Content = () => {
	const [invDialogOpen, setInvDialogOpen] = useState(false);

	const toggleInvDialog = () => {
		setInvDialogOpen(!invDialogOpen);
	}

	const inventory: Item[] = [{name: "Bananas", count: 20}];

	return <>
		<Grid container spacing={2}
						justifyContent="center"
						alignContent="center">
			<Grid item spacing={1}>
				{
					inventory.map((item) => {
						return item.name + ": " + item.count;
					})
				}
				<IconButton size="large"
							onClick={toggleInvDialog}>
				<Add /></IconButton>
			</Grid>
		</Grid>

		<InventoryDialog open={invDialogOpen} close={toggleInvDialog} />
	</>;
}