import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material"
import { useContext } from "react";
import { InventoryControl } from "../../App";

type CDProps = {
	open: boolean,
	close: () => void,
	itemToRemove: number
}

export const ConfirmDialog = ({open, close, itemToRemove}: CDProps) => {
	const inventoryHandler = useContext(InventoryControl);

	function handleUndo(): void {
		close();
		inventoryHandler.remove(itemToRemove);
	}

	return	<Dialog open={open} onClose={close}>
				<DialogTitle>
					Delete stack?
				</DialogTitle>
				<DialogActions>
					<Button onClick={close}>No</Button>
					<Button onClick={handleUndo}>Yes</Button>
				</DialogActions>
			</Dialog>
}