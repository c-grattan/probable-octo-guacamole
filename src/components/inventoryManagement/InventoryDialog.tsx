import { Autocomplete, Button, DialogActions, DialogContent, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { commodities } from "./Commodities";
import { CommodityStack } from "./Item";

type IDProps = {
	open: boolean,
	close: () => void,
	updateInventory: (newStack: CommodityStack) => void,
}

export const InventoryDialog = ({open, close, updateInventory}: IDProps) => {
	const [name, setName] = useState("");
	const [count, setCount] = useState(0);

	function handleClose(): void {
		setName("");
		setCount(0);
		close();
	}

	function submit(): void {
		const newStack: CommodityStack = {
			name: name,
			count: count
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
						value={count}
						onChange={(event) => setCount(+event.target.value)}
					/>
				</DialogContent>
				
				<DialogActions>
					<Button onClick={submit}
							disabled={name.length == 0 || count == 0}
					>
						Submit
					</Button>
					<Button onClick={handleClose}>Close Window</Button>
				</DialogActions>
			</Dialog>;
}