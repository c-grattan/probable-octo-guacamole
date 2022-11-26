import { Typography } from "@mui/material"

type PTProps = {
	profits: number;
}

export const ProfitTracker = ({profits}: PTProps) => {
	return <>
		<Typography variant="h2">
			{profits}
		</Typography>
	</>
}