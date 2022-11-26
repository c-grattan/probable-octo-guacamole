import { Typography } from "@mui/material"

type PTProps = {
	profits: number;
}

export const ProfitTracker = ({profits}: PTProps) => {
	const color: string = profits == 0 ? "" : profits > 0 ? "darkgreen" : "darkred";

	return <>
		<Typography variant="h2" color={color} style={{marginLeft: 'auto'}}>
			{profits < 0 ? '-': null}₡{Math.abs(profits)}
		</Typography>
	</>
}