import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { CommodityStack } from "./Item"

type IPProps = {
	item: CommodityStack
}

export const ItemPanel = ({item}: IPProps) => {
	return (
		<Card>
			<Typography
				color="text.secondary"
				gutterBottom
			>
				{item.name}
			</Typography>
			<CardContent>
				<Typography variant="h4" component="div">
					{item.count}
				</Typography>
			</CardContent>
		</Card>
	);
}