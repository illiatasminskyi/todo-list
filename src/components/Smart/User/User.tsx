import { Button, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { UserAuth } from '../../../core/context/AuthContext'

const User: FC = () => {
	const { user, logOut } = UserAuth()

	const handleSignOut = async () => {
		try {
			await logOut()
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<Stack
			direction='row'
			spacing={3}
			sx={{
				position: 'absolute',
				top: { xs: 'auto', md: '20px' },
				bottom: { xs: '20px', md: 'auto' },
				right: { xs: '50%', md: '30px' },
				transform: { xs: 'translate(50%, 0%)', md: 'translate(0%, 0%)' },
				zIndex: 1,
			}}
			alignItems='center'
		>
			<Typography color='primary' variant='button' sx={{ whiteSpace: 'pre' }}>
				{user?.displayName}
			</Typography>
			{user?.displayName && (
				<Button
					variant='contained'
					color='warning'
					sx={{ boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)' }}
					onClick={handleSignOut}
				>
					Logout
				</Button>
			)}
		</Stack>
	)
}

export default User
