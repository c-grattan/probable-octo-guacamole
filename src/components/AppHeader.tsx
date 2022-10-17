import {useState} from "react";

import {AppBar} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

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
							Probable octo guacamole
						</Typography>
					</Toolbar>
				</AppBar>
				<Toolbar />

				<Drawer open={sidebarOpen}
						onClose={toggleSidebar}
						anchor='left'>
					<Typography variant="h3">Sidebar Menu</Typography>
				</Drawer>
			</>;
}