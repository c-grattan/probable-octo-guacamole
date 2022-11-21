import { Add } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { useState } from "react";
import { InventoryController } from "./InventoryController";
import { InventoryDialog } from "./InventoryDialog";
import { ItemPanel } from "./ItemPanel";

export const InventoryManagement = () => {
	const [invDialogOpen, setInvDialogOpen] = useState(false);

	const toggleInvDialog = () => {
		setInvDialogOpen(!invDialogOpen);
	}

	const [inventoryHandler,] = useState(new InventoryController);

	return <><Grid	container
				spacing={2}
				justifyContent="center"
				alignContent="center"
				paddingTop={"1%"}
		>
			{
				inventoryHandler.getInventory().map((item) => {
					return 	<Grid item spacing={1} xs={2}>
								<ItemPanel item={item} />
							</Grid>;
				})
			}
			<Grid item spacing={1}>
				<IconButton size="large"
							onClick={() => {toggleInvDialog()}}
							style={{marginTop:"75%"}}
				>
					<Add />
				</IconButton>
			</Grid>
		</Grid>

		<InventoryDialog
			open={invDialogOpen}
			close={toggleInvDialog}
			updateInventory={(stack) => {inventoryHandler.add(stack)}}
		/></>;
}