import {useContext, useState} from "react";

import {AppBar, Divider} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { ProfitTracker } from "./ProfitTracker";

export const AppHeader = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	function toggleSidebar() {
		setSidebarOpen(!sidebarOpen);
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

						<ProfitTracker />
					</Toolbar>
				</AppBar>
				<Toolbar />

				<Drawer open={sidebarOpen}
						onClose={toggleSidebar}
						anchor='left'>
					<Typography variant="h4" sx={{m: 2}}>
						Sidebar Menu
					</Typography>
					<Divider />
				</Drawer>
			</>;
}