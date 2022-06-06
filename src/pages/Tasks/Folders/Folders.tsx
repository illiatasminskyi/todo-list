import CloseIcon from '@mui/icons-material/Close'
import ModeIcon from '@mui/icons-material/Mode'
import {
	Checkbox,
	FormControlLabel,
	Grid,
	IconButton,
	Stack,
	Typography,
} from '@mui/material'
import Input from '../../../components/Smart/Input'
import './Folders.sass'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CircleIcon from '@mui/icons-material/Circle'
import H1 from '../../../components/ui/H1/H1'

const Folders = () => {
	return (
		<Grid
			item
			p={8}
			md={9}
			sx={{ backgroundColor: '#FFFFFF', borderRadius: '0 20px 20px 0' }}
		>
			<Stack direction='column' alignItems='flex-start' spacing={2} my={4}>
				<Stack direction='row' alignItems='center' spacing={3}>
					<H1 text={'Фронтенд'} mB={0} />
					<IconButton aria-label='delete'>
						<ModeIcon
							sx={{
								color: '#DFDFDF',
								width: '20px',
								height: '20px',
							}}
						/>
					</IconButton>
				</Stack>
				<Stack direction='column' alignItems='flex-start' spacing={2} pt={8}>
					<Stack direction='row' alignItems='center' spacing={2} pt={2}>
						<FormControlLabel
							control={
								<Checkbox
									sx={{
										'& .MuiSvgIcon-root': {
											fontSize: 20,
										},
									}}
									icon={
										<CircleIcon
											sx={{
												color: 'white',
												border: '1px solid #DFDFDF',
												borderRadius: '50%',
												width: '20px',
											}}
										/>
									}
									checkedIcon={
										<CheckCircleIcon
											sx={{
												color: 'rgba(77, 213, 153, 1)',
												border: '1px solid rgba(77, 213, 153, 1)',
												borderRadius: '50%',
												width: '20px',
											}}
										/>
									}
									defaultChecked
								/>
							}
							label={
								<Typography color='primary' variant='body1'>
									Изучить JavaScript
								</Typography>
							}
						/>
						<IconButton aria-label='delete'>
							<CloseIcon
								sx={{
									color: '#DFDFDF',
									width: '23px',
									height: '23px',
								}}
							/>
						</IconButton>
					</Stack>
				</Stack>
				<Stack
					direction='column'
					alignItems='flex-start'
					spacing={2}
					mt={10}
					sx={{ width: '100%' }}
				>
					<Input l1='Task text' b1='Add' b2='Cancel' widthTF='60%' />
				</Stack>
			</Stack>
		</Grid>
	)
}

export default Folders
