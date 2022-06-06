import {
	Box,
	Button,
	Grid,
	IconButton,
	Stack,
	TextField,
	Typography,
} from '@mui/material'
import ListIcon from './entypoList.svg'
import CloseIcon from '@mui/icons-material/Close'
import { v4 } from 'uuid'
import './Menu.sass'
import { useState } from 'react'

// interface MenuType {
// 	name: string
// 	color: string
// }

// const menu: MenuType[] = [
// 	{
// 		name: 'Покупки',
// 		color: 'rgba(66, 184, 131, 1)',
// 	},
// 	{
// 		name: 'Фронтенд',
// 		color: 'rgba(100, 196, 237, 1)',
// 	},
// 	{
// 		name: 'Фильмы и сериа...',
// 		color: 'rgba(255, 187, 204, 1)',
// 	},
// ]

const colors: string[] = [
	'rgba(66, 184, 131, 1)',
	'rgba(100, 196, 237, 1)',
	'rgba(255, 187, 204, 1)',
	'rgba(82, 82, 82, 1)',
	'rgba(195, 85, 245, 1)',
	'rgba(255, 100, 100, 1)',
]

const Menu = () => {
	const [allTasks, setAllTasks] = useState({
		name: 'All tasks',
		active: false,
	})
	const [menu, setMenu] = useState([
		{
			name: 'Покупки',
			color: 'rgba(66, 184, 131, 1)',
			active: true,
		},
		{
			name: 'Фронтенд',
			color: 'rgba(100, 196, 237, 1)',
			active: false,
		},
		{
			name: 'Фильмы и сериа...',
			color: 'rgba(255, 187, 204, 1)',
			active: false,
		},
	])

	return (
		<Grid
			item
			md={3}
			p={6}
			sx={{ backgroundColor: '#F4F6F8', borderRadius: '20px' }}
		>
			<Stack my={4}>
				<Button
					color='success'
					variant='text'
					className={allTasks.active ? 'items_active' : 'items'}
					style={{
						backgroundColor: allTasks.active ? '#FFFFFF' : 'none',
						color: allTasks.active ? '#FFFFFF' : 'none',
						justifyContent: 'flex-start',
						padding: '17px 13px',
						width: '100%',
					}}
				>
					<img src={ListIcon} alt='Menu' />
					<Typography color='primary' variant='button' ml={3}>
						{allTasks.name}
					</Typography>
				</Button>

				<Stack direction='column' alignItems='flex-start' spacing={2} my={5}>
					{menu.map(menuItem => (
						<Button
							color='success'
							variant='text'
							key={v4()}
							className={menuItem.active ? 'items_active' : 'items'}
							style={{
								backgroundColor: menuItem.active ? '#FFFFFF' : 'none',
								color: menuItem.active ? '#FFFFFF' : 'none',
								width: '100%',
							}}
						>
							<Grid
								container
								direction='row'
								py={1}
								px={3}
								alignItems='center'
								sx={{ cursor: 'pointer' }}
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
								<Grid
									item
									xs={9}
									alignItems='center'
									justifyContent='flex-start'
									textAlign='left'
								>
									<Typography color='primary' variant='button' align='left'>
										{menuItem.name}
									</Typography>
								</Grid>
								<Grid item xs={1}>
									<IconButton aria-label='delete'>
										<CloseIcon
											sx={{
												color: 'rgba(180, 180, 180, 1)',
												width: '16px',
												height: '15px',
											}}
										/>
									</IconButton>
								</Grid>
							</Grid>
						</Button>
					))}
				</Stack>
				<Stack direction='column' alignItems='flex-start' spacing={2} mt={5}>
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
						spacing={1}
						py={2}
					>
						{colors.map(color => (
							<IconButton aria-label='color' key={v4()}>
								<Box
									sx={{
										width: '20px',
										height: '20px',
										borderRadius: '50%',
										backgroundColor: `${color}`,
										boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
									}}
								/>
							</IconButton>
						))}
					</Stack>
					<Button
						color='secondary'
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
					</Button>
				</Stack>
			</Stack>
		</Grid>
	)
}

export default Menu
