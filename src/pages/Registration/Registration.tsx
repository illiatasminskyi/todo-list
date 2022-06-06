import { Grid, Stack } from '@mui/material'
import Wrapper from '../../components/Ordinary/Wrapper/Wrapper'
import Input from '../../components/Smart/Input'
import H1 from '../../components/ui/H1/H1'

const Registration = () => {
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
						/>
					</Stack>
				</Grid>
			</Grid>
		</Wrapper>
	)
}

export default Registration
