import CloseIcon from '@mui/icons-material/Close'
import ModeIcon from '@mui/icons-material/Mode'
import {
	Box,
	Button,
	Checkbox,
	colors,
	FormControlLabel,
	Grid,
	IconButton,
	Stack,
	TextField,
	Typography,
} from '@mui/material'
import './Folders.sass'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CircleIcon from '@mui/icons-material/Circle'
import { v4 } from 'uuid'

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
					<Typography
						sx={{
							fontFamily: 'Montserrat',
							fontWeight: 700,
							fontSize: '32px',
							lineHeight: '39px',
							color: '#64C4ED',
						}}
					>
						Фронтенд
					</Typography>
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
					<TextField
						id='outlined-basic'
						label='Task text'
						variant='outlined'
						sx={{
							background: '#FFFFFF',
							boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
							width: '60%',
						}}
					/>
					<Stack direction='row' alignItems='flex-start' spacing={2}>
						<Button
							color='secondary'
							style={{
								background: 'rgba(77, 213, 153, 1)',
								boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
								border: '0px',
								borderRadius: '4px',
								padding: '13px 33px',
							}}
						>
							<Typography
								sx={{ fontWeight: '600', color: 'white' }}
								variant='button'
							>
								Add
							</Typography>
						</Button>
						<Button
							color='secondary'
							style={{
								background: '#E8E8E8',
								boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
								border: '0px',
								borderRadius: '4px',
								padding: '13px 23px',
							}}
						>
							<Typography
								sx={{ fontWeight: '600', color: '#9C9C9C' }}
								variant='button'
							>
								Cancel
							</Typography>
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Grid>
	)
}

export default Folders
