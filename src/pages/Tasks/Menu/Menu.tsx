import CloseIcon from '@mui/icons-material/Close'
import {
	Box,
	Button,
	Grid,
	IconButton,
	Stack,
	TextField,
	Typography,
} from '@mui/material'
import { FC, memo, useEffect, useState } from 'react'
import { v4 } from 'uuid'
import ListIcon from './entypoList.svg'
import './Menu.sass'

// firebase
import { UserAuth } from '../../../core/context/AuthContext'
import { getDatabase, ref, onValue, remove } from 'firebase/database'

const colors: string[] = [
	'rgba(66, 184, 131, 1)',
	'rgba(100, 196, 237, 1)',
	'rgba(255, 187, 204, 1)',
	'rgba(82, 82, 82, 1)',
	'rgba(195, 85, 245, 1)',
	'rgba(255, 100, 100, 1)',
]

interface MenuType {
	addNewFolder: any
	activeFolder: string
	buttonSetActiveFolder: any
}

const Menu: FC<MenuType> = ({
	addNewFolder,
	activeFolder,
	buttonSetActiveFolder,
}) => {
	const { user } = UserAuth()
	const db = getDatabase()
	// useState
	const [valueFolderName, setValueFolderName] = useState('')
	const [valueFolderColor, setValueFolderColor] = useState('')
	const [menu, setMenu] = useState<any>([])
	const [allTasks, setAllTasks] = useState({
		name: 'All tasks',
		active: false,
	})

	// Getting folders
	useEffect(() => {
		const getFolder = ref(db, `${user.uid}/folder`)
		onValue(getFolder, snapshot => {
			let folderArray: any[] = []
			snapshot.forEach(data => {
				folderArray.push({
					id: data.key,
					name: data.val().folder_name,
					color: data.val().folder_color,
				})
			})
			setMenu(folderArray)
		})
	}, [user])

	// Functions for creating new folders
	const handleChangeFoldser = (e: {
		preventDefault: () => void
		target: { value: any }
	}) => {
		e.preventDefault()
		setValueFolderName(e.target.value)
	}

	const pushFolder = () => {
		addNewFolder(user.uid, valueFolderName, valueFolderColor)
		setValueFolderName('')
		setValueFolderColor('')
	}

	// Delete folder
	const DeleteFolder = (menuId: any) => {
		const getFolder = ref(db, `${user.uid}/folder/${menuId}`)
		remove(getFolder)
	}

	return (
		<Grid
			item
			md={3}
			p={6}
			sx={{ backgroundColor: '#F4F6F8', borderRadius: '20px' }}
		>
			<Stack my={4}>
				<Button
					onClick={() => buttonSetActiveFolder(`${allTasks.name}`)}
					color='success'
					variant='text'
					className={allTasks.name === activeFolder ? 'items_active' : 'items'}
					style={{
						backgroundColor:
							allTasks.name === activeFolder ? '#FFFFFF' : 'transparent',
						color: allTasks.name === activeFolder ? '#FFFFFF' : 'none',
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
					{menu.map((menuItem: any) => (
						<Box
							onClick={() => buttonSetActiveFolder(`${menuItem.name}`)}
							key={v4()}
							className={
								menuItem.name === activeFolder ? 'items_active' : 'items'
							}
							style={{
								backgroundColor:
									menuItem.name === activeFolder ? '#FFFFFF' : 'none',
								color: menuItem.name === activeFolder ? '#FFFFFF' : 'none',
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
									<IconButton
										aria-label='delete'
										onClick={() => DeleteFolder(menuItem.id)}
									>
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
						</Box>
					))}
				</Stack>
				<Stack direction='column' alignItems='flex-start' spacing={2} mt={5}>
					<TextField
						type='text'
						value={valueFolderName}
						onChange={handleChangeFoldser}
						className='list'
						id='outlined-basic'
						label='Folder name'
						variant='outlined'
						fullWidth
						sx={{
							background: '#FFFFFF',
							boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
						}}
						disabled={menu.length >= 8 ? true : false}
					/>
					<Stack
						direction='row'
						alignItems='center'
						justifyContent='center'
						spacing={1}
						py={2}
					>
						{colors.map(color => (
							<IconButton
								aria-label='color'
								key={v4()}
								onClick={() => setValueFolderColor(`${color}`)}
								disabled={menu.length >= 8 ? true : false}
							>
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
						onClick={pushFolder}
						color='secondary'
						style={{
							background:
								menu.length >= 8
									? 'rgba(180, 180, 180, 1)'
									: 'rgba(77, 213, 153, 1)',
							boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
							border: '0px',
							borderRadius: '4px',
							padding: '13px',
							width: '100%',
						}}
						disabled={menu.length >= 8 ? true : false}
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

export default memo(Menu)
