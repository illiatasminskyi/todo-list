import { Button, Stack, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { auth } from '../../../core/firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'

interface IUser {
	email: string
}

const User: FC = () => {
	const [user, setUser] = useState<IUser>({ email: '' })

	onAuthStateChanged(auth, (currentUser: any) => {
		setUser(currentUser)
	})

	const logOut = async () => {
		await signOut(auth)
	}

	return (
		<Stack
			direction='row'
			spacing={3}
			sx={{ position: 'absolute', right: '30px', top: '20px' }}
			alignItems='center'
		>
			<Typography color='primary' variant='button'>
				{user?.email}
			</Typography>
			<Button
				variant='contained'
				color='warning'
				sx={{ boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)' }}
				onClick={logOut}
			>
				Sign out
			</Button>
		</Stack>
	)
}

export default User
