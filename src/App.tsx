import React from 'react';

import {AppBar} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <div>
      <header>
		<AppBar>
			<Toolbar>
				<IconButton><MenuIcon /></IconButton>
				<Typography variant="h6">probable-octo-guacamole</Typography>
			</Toolbar>
		</AppBar>
      </header>
    </div>
  );
}

export default App;