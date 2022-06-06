import { Box, Grid } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Auth from '../pages/Auth'
import Registration from '../pages/Registration'
import Tasks from '../pages/Tasks'

const Router = () => {
	const location = useLocation()
	return (
		<AnimatePresence exitBeforeEnter>
			<Box>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Tasks />} />
					<Route path='auth' element={<Auth />} />
					<Route path='registration' element={<Registration />} />
				</Routes>
			</Box>
		</AnimatePresence>
	)
}

export default Router
