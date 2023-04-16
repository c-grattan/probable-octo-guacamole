import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { useContext } from "react"
import { InventoryControl } from "../../App"
import { CommodityStack } from "../inventoryManagement/CommodityStack"
import { SellRow } from "./SellRow"

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
					return <SellRow stack={stack} key={index} />
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