import { Card, CardActions, CardContent, CardHeader, Collapse, Divider, Icon, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { rootCertificates } from "tls";
import { CommodityStack } from "./CommodityStack"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

type IPProps = {
	item: CommodityStack,
	undo: () => void;
}

export const ItemPanel = ({item, undo}: IPProps) => {
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

	const handleUndo = () => {
		undo();
	}

	return (
		<Card style={{padding: "2.5%"}}>
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
				<Divider />
				<Typography variant="h3">
					Total: ₡{item.count * item.unitPrice}
				</Typography>
				<CardActions>
					<IconButton	size="small"
								style={{marginLeft: 'auto'}}
								onClick={() => handleUndo()}
					>
						<DeleteIcon />
					</IconButton>
				</CardActions>
			</Collapse>
		</Card>
	);
}