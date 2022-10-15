import {useState} from "react";

import {AppBar} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	function toggleSidebar() {
		setSidebarOpen(!sidebarOpen)
	}

	return (
		<div>
			<header>
				<AppBar>
					<Toolbar>
						<IconButton onClick={toggleSidebar}><MenuIcon /></IconButton>
						<Typography variant="h4">probable-octo-guacamole</Typography>
					</Toolbar>
				</AppBar>
				<Drawer open={sidebarOpen}
						onClose={toggleSidebar}
						anchor='left'>
					<Typography variant="h3">Sidebar Menu</Typography>
				</Drawer>
			</header>
		</div>
	);
}

export default App;