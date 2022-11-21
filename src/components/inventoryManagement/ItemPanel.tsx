import { Card, CardActions, CardContent, CardHeader, Collapse, Icon, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { rootCertificates } from "tls";
import { CommodityStack } from "./CommodityStack"
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
							style={{
								transform: props.expand ? 'rotate(180deg)' : 'rotate(0deg)',
								marginLeft: 'auto'
							}}
							size="small"
				>
					<ExpandMoreIcon />
				</IconButton>;
	})

	return (
		<Card>
			<Typography
				color="text.secondary"
				component="div"
				gutterBottom
			>
				{item.name}
			</Typography>
			<CardContent>
				<Typography variant="h2" component="div">
					{item.count}
				</Typography>
			</CardContent>
			<CardActions>
				<ExpandMore expand={expand} />
			</CardActions>

			<Collapse in={expand}>
				<Typography variant="h3" color="darkred">
					-{item.count * item.unitPrice}
				</Typography>
			</Collapse>
		</Card>
	);
}