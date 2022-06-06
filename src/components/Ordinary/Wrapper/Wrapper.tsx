import { Grid } from '@mui/material'
import { FC } from 'react'

type WrapperType = {
	children: JSX.Element
}

const Wrapper: FC<WrapperType> = ({ children }) => {
	return (
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
				{children}
			</Grid>
		</Grid>
	)
}

export default Wrapper
