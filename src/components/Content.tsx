import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add"
import { useState } from "react";
import { InventoryDialog } from "./InventoryDialog";
import { CommodityStack } from "./inventoryManagement/Item";
import { ItemPanel } from "./inventoryManagement/ItemPanel";
import { InventoryController } from "./inventoryManagement/InventoryController";

export const Content = () => {
	const [invDialogOpen, setInvDialogOpen] = useState(false);

	const toggleInvDialog = () => {
		setInvDialogOpen(!invDialogOpen);
	}

	const [inventoryHandler,] = useState(new InventoryController);

	return <>
		<Grid container spacing={2}
						justifyContent="center"
						alignContent="center"
		>
			{
				inventoryHandler.getInventory().map((item) => {
					return 	<Grid item spacing={1}>
								<ItemPanel item={item} />
							</Grid>;
				})
			}
			<Grid item spacing={1}>
				<IconButton size="large"
							onClick={() => {toggleInvDialog(); inventoryHandler.add({name:"Banana", count: 20})}}
							style={{marginTop:"75%"}}
				>
					<Add />
				</IconButton>
			</Grid>
		</Grid>

		<InventoryDialog open={invDialogOpen} close={toggleInvDialog} />
	</>;
}