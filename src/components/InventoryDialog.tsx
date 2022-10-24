import Dialog from "@mui/material/Dialog";

type IDProps = {
	open: boolean,
	close: () => void
}

export const InventoryDialog = ({open, close}: IDProps) => {
	return <Dialog open={open} onClose={close}></Dialog>;
}