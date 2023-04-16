import { Add } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { InventoryControl } from "../../App";
import { CommodityStack } from "./CommodityStack";
import { ConfirmDialog } from "./ConfirmDialog";
import { InventoryDialog } from "./InventoryDialog";
import { ItemPanel } from "./ItemPanel";

export const InventoryManagement = () => {
	const inventoryHandler = useContext(InventoryControl);

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
								return	<Grid item xs={2} key={keyStack[1]}>
											<ItemPanel item={keyStack[0]} undo={() => handleRemove(keyStack[1])} />
										</Grid>
							})
						}
						<Grid item>
							<IconButton size="large"
										onClick={() => {toggleInvDialog()}}
										style={{marginTop:"100%"}}
							>
								<Add />
							</IconButton>
						</Grid>
					</>
				</Grid>

				<InventoryDialog
					open={invDialogOpen}
					close={toggleInvDialog}
				/>

				<ConfirmDialog	open={confirmDialogOpen}
								close={toggleCDialogOpen}
								itemToRemove={itemToRemove}
				/>
			</>;
}