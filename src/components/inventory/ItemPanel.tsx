import { Item } from "./Item"

type IPProps = {
	item: Item
}

export const ItemPanel = ({item}: IPProps) => {
	return (
		<div>
			{item.name}
		</div>
	);
}