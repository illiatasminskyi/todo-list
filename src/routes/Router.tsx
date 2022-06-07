import { Box } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Protected } from '../components/Smart/Protected/Protected'
import SignIn from '../pages/SignIn'
import Tasks from '../pages/Tasks'

const Router = () => {
	const location = useLocation()

	return (
		<AnimatePresence exitBeforeEnter>
			<Box>
				<Routes location={location} key={location.pathname}>
					<Route
						path='/'
						element={
							<Protected>
								<Tasks />
							</Protected>
						}
					/>

					<Route path='sign-in' element={<SignIn />} />
				</Routes>
			</Box>
		</AnimatePresence>
	)
}

export default Router
