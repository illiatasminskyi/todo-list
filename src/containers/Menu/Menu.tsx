import { Box, Grid, Stack, TextField, Typography } from '@mui/material'
import ListIcon from './entypoList.svg'
import CloseIcon from '@mui/icons-material/Close'
import { v4 } from 'uuid'
import './Menu.sass'

interface MenuType {
	name: string
	color: string
}

const menu: MenuType[] = [
	{
		name: 'Покупки',
		color: 'rgba(66, 184, 131, 1)',
	},
	{
		name: 'Фронтенд',
		color: 'rgba(100, 196, 237, 1)',
	},
	{
		name: 'Фильмы и сериа...',
		color: 'rgba(255, 187, 204, 1)',
	},
]

const colors: string[] = [
	'rgba(66, 184, 131, 1)',
	'rgba(100, 196, 237, 1)',
	'rgba(255, 187, 204, 1)',
	'rgba(82, 82, 82, 1)',
	'rgba(182, 230, 189, 1)',
	'rgba(195, 85, 245, 1)',
	'rgba(9, 1, 26, 1)',
	'rgba(255, 100, 100, 1)',
]

const Menu = () => {
	return (
		<Grid
			item
			md={3}
			p={6}
			sx={{ backgroundColor: '#F4F6F8', borderRadius: '20px' }}
		>
			<Stack my={4}>
				<Stack direction='row' alignItems='center' spacing={2} py={2} px={3}>
					<img src={ListIcon} alt='Menu' />
					<Typography color='primary' variant='button'>
						All tasks
					</Typography>
				</Stack>
				<Stack direction='column' alignItems='flex-start' spacing={2} my={8}>
					{menu.map(menuItem => (
						<Grid
							container
							direction='row'
							py={2}
							px={3}
							alignItems='center'
							justifyContent='space-between'
							sx={{
								backgroundColor: '#FFFFFF',
								boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
								borderRadius: '4px',
							}}
							key={v4()}
						>
							<Grid item xs={1.3} alignItems='center'>
								<Box
									sx={{
										width: '10px',
										height: '10px',
										borderRadius: '50%',
										backgroundColor: `${menuItem.color}`,
									}}
								/>
							</Grid>
							<Grid item xs={9} alignItems='center'>
								<Typography color='primary' variant='button'>
									{menuItem.name}
								</Typography>
							</Grid>
							<Grid item xs={1}>
								<CloseIcon
									sx={{
										color: 'rgba(180, 180, 180, 1)',
										width: '16px',
										height: '15px',
									}}
								/>
							</Grid>
						</Grid>
					))}
				</Stack>
				<Stack direction='column' alignItems='flex-start' spacing={2} mt={10}>
					<TextField
						id='outlined-basic'
						label='Folder name'
						variant='outlined'
						fullWidth
						sx={{
							background: '#FFFFFF',
							boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
						}}
					/>
					<Stack
						direction='row'
						alignItems='center'
						justifyContent='center'
						spacing={2}
						py={2}
					>
						{colors.map(color => (
							<Box
								key={v4()}
								sx={{
									width: '20px',
									height: '20px',
									borderRadius: '50%',
									backgroundColor: `${color}`,
									boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
								}}
							/>
						))}
					</Stack>
					<button
						style={{
							background: 'rgba(77, 213, 153, 1)',
							boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
							border: '0px',
							borderRadius: '4px',
							padding: '13px',
							width: '100%',
						}}
					>
						<Typography
							sx={{ fontWeight: '600', color: 'white' }}
							variant='button'
						>
							Add
						</Typography>
					</button>
				</Stack>
			</Stack>
		</Grid>
	)
}

export default Menu
