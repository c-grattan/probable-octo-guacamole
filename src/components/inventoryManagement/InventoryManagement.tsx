import { Add } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { useState } from "react";
import { JsxElement } from "typescript";
import { CommodityStack } from "./CommodityStack";
import { ConfirmDialog } from "./ConfirmDialog";
import { InventoryController } from "./InventoryController";
import { InventoryDialog } from "./InventoryDialog";
import { ItemPanel } from "./ItemPanel";

export const InventoryManagement = () => {
	const [invDialogOpen, setInvDialogOpen] = useState(false);

	const toggleInvDialog = () => {
		setInvDialogOpen(!invDialogOpen);
	}

	const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

	const toggleCDialogOpen = () => {
		setConfirmDialogOpen(!confirmDialogOpen);
	}

	const [itemToRemove, setItemToRemove] = useState(0);

	const handleRemove = (id: number) => {
		setItemToRemove(id);
		toggleCDialogOpen();
	}

	const [inventoryHandler,] = useState(new InventoryController);

	return	<>
				<Grid	container
						spacing={2}
						justifyContent="center"
						alignContent="center"
						paddingTop={"1%"}
				>
					<>
						{
							inventoryHandler.getInventory().map((keyStack: [CommodityStack, number]) => {
								return	<Grid item spacing={1} xs={2} key={keyStack[1]}>
											<ItemPanel item={keyStack[0]} undo={() => handleRemove(keyStack[1])} />
										</Grid>
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
					</>
				</Grid>

				<InventoryDialog
					open={invDialogOpen}
					close={toggleInvDialog}
					updateInventory={(stack) => {inventoryHandler.add(stack)}}
				/>

				<ConfirmDialog	open={confirmDialogOpen}
								close={toggleCDialogOpen}
								undo={() => inventoryHandler.remove(itemToRemove)}
				/>
			</>;
}