import { useState } from "react";
import { InventoryManagement } from "./inventoryManagement/InventoryManagement";
import { ProfitTracker } from "./ProfitTracker";

type CProps = {
	updateProfits: (change: number) => void
}

export const Content = ({updateProfits}: CProps) => {
	return <InventoryManagement updateProfits={(change: number) => updateProfits(change)} />
}