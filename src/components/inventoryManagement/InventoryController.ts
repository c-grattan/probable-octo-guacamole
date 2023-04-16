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

	reduceStack(id: number, amount: number): void {
		let newInventory = this.cargoData.inventory;
		const newStack = newInventory.get(id);
		if(newStack) {
			newStack.count -= amount;
		}
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
			if(this.cargoData.inventory.has(id)) {
				id++;
			} else {
				break;
			}
		}
		this.addStack(id, cs);
		this.purchaseStack(cs);
		return id;
	}

	getStack(id: number): CommodityStack {
		const stack = this.cargoData.inventory.get(id);
		return stack === undefined ? {name: '', count: 0, unitPrice: 0} : stack;
	}

	remove(id: number): void {
		const stack: CommodityStack | undefined = this.getStack(id);
		if(stack !== undefined) {
			this.updateProfits(this.calcStackValue(stack));
			this.removeStack(id);
		}
	}

	private stackArrayHas(stackArray: CommodityStack[], name: string): number {
		for(let i = 0; i < stackArray.length; i++) {
			if(stackArray[i].name === name) {
				return i;
			}
		}
		return -1;
	}

	getCollapsedInventory(): CommodityStack[] {
		const collapsedInventory: CommodityStack[] = [];

		this.cargoData.inventory.forEach((stack: CommodityStack) => {
			const stackPos = this.stackArrayHas(collapsedInventory, stack.name);
			if(stackPos > -1) {
				const totalCount = collapsedInventory[stackPos].count + stack.count;
				collapsedInventory[stackPos].unitPrice = (collapsedInventory[stackPos].unitPrice * collapsedInventory[stackPos].count
				 + stack.unitPrice * stack.count)
				 / totalCount;
				collapsedInventory[stackPos].count = totalCount;
			} else {
				const newStack: CommodityStack = {
					name: stack.name,
					count: stack.count,
					unitPrice: stack.unitPrice
				}
				collapsedInventory.push(newStack);
			}
		});

		return collapsedInventory;
	};

	private getCheapestStackId(commodityName: string): number {
		let id = -1;
		let cheapestPrice = -1;
		this.cargoData.inventory.forEach((stack: CommodityStack, index: number) => {
			if(stack.name === commodityName && (id === -1 || stack.unitPrice < cheapestPrice)) {
				id = index;
				cheapestPrice = stack.unitPrice;
			}
		});
		return id;
	}

	sell(name: string, amount: number, sellPrice: number) {
		while(amount > 0) {
			const cheapestId = this.getCheapestStackId(name);
			const cheapestStack = this.getStack(cheapestId);
			if(cheapestStack.count > amount) {
				this.updateProfits(amount * sellPrice);
				cheapestStack.count -= amount;
				amount = 0;
			} else {
				amount -= cheapestStack.count;
				this.updateProfits(cheapestStack.count * sellPrice);
				this.removeStack(cheapestId);
			}
		}
	}
};