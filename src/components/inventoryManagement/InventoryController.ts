import { InventoryType } from "../../App";
import { CommodityStack } from "./CommodityStack";

export class InventoryController {
	cargoData: InventoryType;
	setInventory: (inventory: InventoryType) => any;

	constructor(inv: any, setInv: any) {
		this.cargoData = inv;
		this.setInventory = setInv;
	}

	updateProfits(change: number): void {
		let newProfits = this.cargoData.profits + change;
		this.setInventory({
			...this.cargoData,
			profits: newProfits
		})
		this.cargoData.profits = newProfits;
	}

	addStack(id: number, stack: CommodityStack): void {
		let newInventory = this.cargoData.inventory;
		newInventory.set(id, stack);
		this.setInventory({
			...this.cargoData,
			inventory: newInventory
		})
	}

	removeStack(id: number): void {
		let newInventory = this.cargoData.inventory;
		newInventory.delete(id);
		this.setInventory({
			...this.cargoData,
			inventory: newInventory
		})
	}

	getInventory(): [CommodityStack, number][] {
		const inv: [CommodityStack, number][] = [];
		this.cargoData.inventory.forEach((stack, key) => {
			inv.push([stack, key]);
		})
		return inv;
	};

	calcStackValue(cs: CommodityStack): number {
		return cs.unitPrice * cs.count;
	}

	purchaseStack(cs: CommodityStack): void {
		this.updateProfits(-this.calcStackValue(cs));
	}

	add(cs: CommodityStack): number {
		let id = 0;
		while(id < this.cargoData.inventory.size) {
			if(!this.cargoData.inventory.has(id)) {
				break;
			} else {
				id++;
			}
		}
		this.addStack(id, cs);
		this.purchaseStack(cs);
		return id;
	}

	getStack(id: number): CommodityStack {
		const stack = this.cargoData.inventory.get(id);
		return stack == undefined ? {name: '', count: 0, unitPrice: 0} : stack;
	}

	remove(id: number): void {
		const stack: CommodityStack | undefined = this.getStack(id);
		if(stack != undefined) {
			this.updateProfits(this.calcStackValue(stack));
			this.removeStack(id);
		}
	}

	getCollapsedInventory(): CommodityStack[] {
		const collapsedInventory: CommodityStack[] = [];
		return collapsedInventory;
	};
};