import { Container } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import User from '../components/Smart/User'
import Router from '../routes/Router'

function App() {
	return (
		<BrowserRouter>
			<Container maxWidth='lg'>
				<User />
				<Router />
			</Container>
		</BrowserRouter>
	)
}

export default App
