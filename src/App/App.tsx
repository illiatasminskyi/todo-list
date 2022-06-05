import { Container, Grid } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import Menu from '../containers/Menu'
import Folders from '../containers/Folders'

function App() {
	return (
		<BrowserRouter>
			<Container maxWidth='lg'>
				<Grid
					container
					direction='row'
					justifyContent='center'
					alignItems='center'
					sx={{
						height: '100vh',
					}}
				>
					<Grid
						item
						container
						sx={{
							height: '85vh',
							boxShadow: '0px 0px 20px 1px rgba(0, 0, 0, 0.12)',
							borderRadius: '20px',
						}}
					>
						<Menu />
						<Folders />
					</Grid>
				</Grid>
			</Container>
		</BrowserRouter>
	)
}

export default App
