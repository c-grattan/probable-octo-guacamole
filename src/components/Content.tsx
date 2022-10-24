import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add"
import { useState } from "react";
import { InventoryDialog } from "./InventoryDialog";

export const Content = () => {
	const [invDialogOpen, setInvDialogOpen] = useState(false);

	const toggleInvDialog = () => {
		setInvDialogOpen(!invDialogOpen);
	}

	return <>
		<Grid container spacing={2}
						justifyContent="center"
						alignContent="center">
			<Grid item spacing={1}>
				<IconButton size="large"
							onClick={toggleInvDialog}>
				<Add /></IconButton>
			</Grid>
		</Grid>

		<InventoryDialog open={invDialogOpen} close={toggleInvDialog} />
	</>;
}