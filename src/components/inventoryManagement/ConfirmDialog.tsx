import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"

type CDProps = {
	open: boolean,
	close: () => void,
	undo: () => void
}

export const ConfirmDialog = ({open, close, undo}: CDProps) => {
	function handleUndo(): void {
		close();
		undo();
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