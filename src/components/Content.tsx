import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add"

export const Content = () => {
	return <>
		<Grid container spacing={2}
						justifyContent="center"
						alignContent="center">
			<Grid item spacing={1}>
				<IconButton size="large">
					<Add />
				</IconButton>
			</Grid>
		</Grid>
	</>;
}