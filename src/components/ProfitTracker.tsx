import { Typography } from "@mui/material"

type PTProps = {
	profits: number;
}

export const ProfitTracker = ({profits}: PTProps) => {
	const color: string = profits == 0 ? "" : profits > 0 ? "darkgreen" : "darkred";

	return <>
		<Typography variant="h2" color={color}>
			₡{profits}
		</Typography>
	</>
}