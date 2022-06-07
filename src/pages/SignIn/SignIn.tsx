import { Grid, Stack } from '@mui/material'
import { useEffect } from 'react'
import Wrapper from '../../components/Ordinary/Wrapper/Wrapper'
import H1 from '../../components/ui/H1/H1'

// firebase
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../core/context/AuthContext'

const SignIn = () => {
	const { googleSignIn, user } = UserAuth()
	const navigate = useNavigate()

	const handleGoogleSignIn = async () => {
		try {
			await googleSignIn()
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		if (user) {
			navigate('/')
		}
	}, [navigate, user])

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
					<Stack
						direction='column'
						justifyContent='center'
						alignItems='center'
						spacing={2}
						my={5}
					>
						<H1 text={'Sign in'} />
						<GoogleButton onClick={handleGoogleSignIn} />
					</Stack>
				</Grid>
			</Grid>
		</Wrapper>
	)
}

export default SignIn
