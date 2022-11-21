import { Autocomplete, Button, DialogActions, DialogContent, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { commodities } from "./Commodities";
import { CommodityStack } from "./CommodityStack";

type IDProps = {
	open: boolean,
	close: () => void,
	updateInventory: (newStack: CommodityStack) => void,
}

export const InventoryDialog = ({open, close, updateInventory}: IDProps) => {
	const [name, setName] = useState("");
	const [count, setCount] = useState(0);
	const [unitPrice, setUnitPrice] = useState(0);

	function reset(): void {
		setName("");
		setCount(0);
		setUnitPrice(0);
	}

	function handleClose(): void {
		reset();
		close();
	}

	function submit(): void {
		const newStack: CommodityStack = {
			name: name,
			count: count,
			unitPrice: unitPrice
		}
		updateInventory(newStack);
		handleClose();
	}

	function changeName(
		event: any,
		newValue: any
	){
		console.log(newValue);
		if(newValue) {
			setName(typeof newValue == "string"
						? newValue
						: newValue.label);
		}
	}

	const canSubmit: boolean =
		name.length == 0 ||
		count == 0;

	return	<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
			>
				<DialogContent>
					<Autocomplete
						renderInput={(params) =>
							<TextField
								{...params}
								label="Commodity"
							/>
						}
						options={commodities}
						inputValue={name}
						onInputChange={(event, value) => setName(value)}
						freeSolo
					/>

					<TextField
						label="Count"
						type="number"
						margin="normal"
						value={count == 0 ? null : count}
						onChange={(event) => setCount(+event.target.value)}
					/>

					<TextField
						label="Unit Price"
						type="number"
						margin="normal"
						value={unitPrice == 0 ? null : unitPrice}
						onChange={(event) => setUnitPrice(+event.target.value)}
					/>
				</DialogContent>
				
				<DialogActions>
					<Button onClick={submit}
							disabled={canSubmit}
					>
						Submit
					</Button>
					<Button onClick={handleClose}>Close Window</Button>
				</DialogActions>
			</Dialog>;
}