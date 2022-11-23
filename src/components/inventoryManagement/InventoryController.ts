import { CommodityStack } from "./CommodityStack";

export class InventoryController {
	inventory: Map<number, CommodityStack> = new Map();

	getInventory(): [CommodityStack, number][] {
		const inv: [CommodityStack, number][] = [];
		this.inventory.forEach((stack, key) => {
			inv.push([stack, key]);
		})
		return inv;
	};

	add(cs: CommodityStack): number {
		let id = 0;
		while(id < this.inventory.size) {
			if(!this.inventory.has(id)) {
				break;
			} else {
				id++;
			}
		}
		this.inventory.set(id, cs);
		return id;
	}

	remove(id: number): void {
		this.inventory.delete(id);
	}

	getCollapsedInventory(): CommodityStack[] {
		const collapsedInventory: CommodityStack[] = [];

		this.inventory.forEach((element: CommodityStack) => {
			
		});

		return collapsedInventory;
	};
};