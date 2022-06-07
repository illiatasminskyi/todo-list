import { Grid, Stack } from '@mui/material'
import { useState } from 'react'
import Wrapper from '../../components/Ordinary/Wrapper/Wrapper'
import Input from '../../components/Smart/Input'
import H1 from '../../components/ui/H1/H1'

// firebase
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../../core/firebase-config'

const Registration = () => {
	const [registerEmail, setregisterEmail] = useState('')
	const [registerPassword, setregisterPassword] = useState('')
	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			)
			console.log(user)
		} catch (error: any) {
			console.log(error.message)
		}
	}

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			)
			console.log(user)
		} catch (error: any) {
			console.log(error.message)
		}
	}

	return (
		<Wrapper>
			<Grid
				item
				container
				p={8}
				md={12}
				sx={{ backgroundColor: '#FFFFFF', borderRadius: '20px' }}
				justifyContent='center'
				alignItems='center'
			>
				<Grid item xs={6}>
					<Stack direction='column' justifyContent='center' spacing={2} my={5}>
						<H1 text={'Registration'} />
						<Input
							l1='Username'
							l2='Password'
							b1='Add'
							b2='Cancel'
							input2={true}
							onChangeI1={(e: React.ChangeEvent<HTMLInputElement>) => {
								setregisterEmail(e.target.value)
							}}
							onChangeI2={(e: React.ChangeEvent<HTMLInputElement>) => {
								setregisterPassword(e.target.value)
							}}
							onClickB1={() => register()}
							onClickB2={login}
						/>
					</Stack>
				</Grid>
			</Grid>
		</Wrapper>
	)
}

export default Registration
