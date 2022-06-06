import { Container } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import Router from '../routes/Router'

function App() {
	return (
		<BrowserRouter>
			<Container maxWidth='lg'>
				<Router />
			</Container>
		</BrowserRouter>
	)
}

export default App
