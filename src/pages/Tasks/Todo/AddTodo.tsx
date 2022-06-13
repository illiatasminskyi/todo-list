import { TextField, Stack, Button, Typography, Box } from '@mui/material'
import { FC, useState } from 'react'

// firebase
import { getDatabase, ref, push, set } from 'firebase/database'
import { UserAuth } from '../../../core/context/AuthContext'

interface AddTodoType {
	activeFolder: string
}

const AddTodo: FC<AddTodoType> = ({ activeFolder }) => {
	const [title, setTitle] = useState('')
	const { user } = UserAuth()

	// useState
	const [valueTaskName, setValueTaskName] = useState('')

	// Create a new task
	const addNewTask = (name: string, completed: boolean, folder: string) => {
		const db = getDatabase()
		const postTask = ref(db, `${user.uid}/tasks`)
		const newTask = push(postTask)
		set(newTask, {
			name: name,
			completed: completed,
			folder: folder,
		})
	}

	const handleChangeTask = (e: {
		preventDefault: () => void
		target: { value: any }
	}) => {
		e.preventDefault()
		if (e.target.value.length <= 30) setValueTaskName(e.target.value)
	}

	const pushTask = () => {
		addNewTask(valueTaskName, false, activeFolder)
		setValueTaskName('')
	}

	return (
		<Box sx={{ width: '100%' }} pt={4}>
			<TextField
				type='text'
				value={valueTaskName}
				onChange={handleChangeTask}
				id='outlined-basic'
				label='Task text'
				variant='outlined'
				sx={{
					background: '#FFFFFF',
					boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
					width: { xs: '100%', sm: '80%', md: '60%' },
				}}
			/>
			<Stack direction='row' alignItems='flex-start' spacing={2} mt={2}>
				<Button
					onClick={pushTask}
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
						Add task
					</Typography>
				</Button>
				<Button
					onClick={() => setValueTaskName('')}
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
		</Box>
	)
}

export default AddTodo
