import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"
import { useContext } from "react"
import { InventoryControl } from "../../App"
import { CommodityStack } from "./CommodityStack"

type SDProps = {
	open: boolean,
	close: () => void,
}

export const SellDialog = ({open, close}: SDProps) => {
	const inventoryHandler = useContext(InventoryControl);

	return <Dialog open={open} onClose={close}>
		<DialogTitle>
			Sell Commodities
		</DialogTitle>

		<DialogContent>
			{
				inventoryHandler.getCollapsedInventory().map((stack: CommodityStack, index: number) => {
					return <Typography key={index}>
						{stack.name}: {stack.count}@{stack.unitPrice}
					</Typography>;
				})
			}
		</DialogContent>

		<DialogActions>
			<Button onClick={close}>
				Close
			</Button>
		</DialogActions>
	</Dialog>;
}