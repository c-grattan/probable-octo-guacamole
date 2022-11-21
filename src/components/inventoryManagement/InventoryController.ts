import { CommodityStack } from "./CommodityStack";

export class InventoryController {
	inventory: CommodityStack[] = [];

	getInventory(): CommodityStack[] {
		return this.inventory;
	};

	add(cs: CommodityStack): void {
		this.inventory.push(cs);
	}

	getCollapsedInventory(): CommodityStack[] {
		const collapsedInventory: CommodityStack[] = [];

		this.inventory.forEach((element: CommodityStack) => {
			
		});

		return collapsedInventory;
	};
};