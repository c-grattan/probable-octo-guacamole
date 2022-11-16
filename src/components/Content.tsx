import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add"
import { useState } from "react";
import { InventoryDialog } from "./InventoryDialog";
import { Item } from "./inventory/Item";
import { ItemPanel } from "./inventory/ItemPanel";

export const Content = () => {
	const [invDialogOpen, setInvDialogOpen] = useState(false);

	const toggleInvDialog = () => {
		setInvDialogOpen(!invDialogOpen);
	}

	const inventory: Item[] = [{name: "Bananas", count: 20}];

	return <>
		<Grid container spacing={2}
						justifyContent="center"
						alignContent="center"
		>
			{
				inventory.map((item) => {
					return (<>
						<Grid item spacing={1}>
							<ItemPanel item={item} />
						</Grid>
					</>);
				})
			}
			<Grid item spacing={1}>
				<IconButton size="large"
							onClick={toggleInvDialog}
							style={{marginTop:"75%"}}
				>
					<Add />
				</IconButton>
			</Grid>
		</Grid>

		<InventoryDialog open={invDialogOpen} close={toggleInvDialog} />
	</>;
}