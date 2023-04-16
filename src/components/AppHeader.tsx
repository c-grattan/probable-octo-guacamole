import {useState} from "react";
import {AppBar, Button, Divider} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { ProfitTracker } from "./ProfitTracker";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { SellDialog } from "./sellDialog/SellDialog";

export const AppHeader = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	function toggleSidebar() {
		setSidebarOpen(!sidebarOpen);
	}

	const [sellDialogOpen, setSellDialogOpen] = useState(false);
	function toggleSellDialog() {
		setSellDialogOpen(!sellDialogOpen);
	}

	return	<>
				<AppBar>
					<Toolbar>
						<IconButton
							onClick={toggleSidebar}
							size="medium"
							edge="start"
							sx={{
								mr: 2
							}}
						>
							<MenuIcon />
						</IconButton>

						<Typography variant="h4">
							Starport
						</Typography>

						<Button	variant="contained"
								endIcon={<MonetizationOnOutlinedIcon />}
								size="medium"
								style={{marginLeft: 'auto'}}
								onClick={toggleSellDialog}
						>
							Sell
						</Button>
					</Toolbar>
				</AppBar>
				<Toolbar />

				<Drawer open={sidebarOpen}
						onClose={toggleSidebar}
						anchor='left'>
					<Typography variant="h4" sx={{m: 2}}>
						Current Running Total
					</Typography>
					<Divider />
					<ProfitTracker />
				</Drawer>

				<SellDialog open={sellDialogOpen} close={toggleSellDialog} />
			</>;
}