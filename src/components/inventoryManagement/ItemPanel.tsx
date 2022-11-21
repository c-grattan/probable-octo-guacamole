import { Card, CardActions, CardContent, CardHeader, Collapse, Icon, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { rootCertificates } from "tls";
import { CommodityStack } from "./Item"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type IPProps = {
	item: CommodityStack
}

export const ItemPanel = ({item}: IPProps) => {
	const [expand, setExpand] = useState(false);

	const toggleExpand = () => {
		setExpand(!expand);
	}

	interface ExpandMoreProps {
		expand: Boolean;
	}

	const ExpandMore = ((props: ExpandMoreProps) => {
		return <IconButton	onClick={toggleExpand}
							style={{transform: props.expand ? 'rotate(180deg)' : 'rotate(0deg)'}}
							size="small"
				>
					<ExpandMoreIcon />
				</IconButton>;
	})

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
			<CardActions>
				<IconButton>
					<ExpandMore expand={expand} />
				</IconButton>
			</CardActions>

			<Collapse in={expand}>
				<Typography variant="h3">{item.count}x{item.name}</Typography>
			</Collapse>
		</Card>
	);
}