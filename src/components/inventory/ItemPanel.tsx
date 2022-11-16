import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Item } from "./Item"

type IPProps = {
	item: Item
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