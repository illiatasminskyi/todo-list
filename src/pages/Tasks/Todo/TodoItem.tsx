import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CircleIcon from '@mui/icons-material/Circle'
import CloseIcon from '@mui/icons-material/Close'
import {
	Checkbox,
	FormControlLabel,
	IconButton,
	Stack,
	Typography,
} from '@mui/material'
import { getDatabase, ref, remove, update } from 'firebase/database'
import { FC, useState } from 'react'
import { UserAuth } from '../../../core/context/AuthContext'

interface TodoItemType {
	id: string
	name: string
	completed: boolean
	folder: string
}

const TodoItem: FC<TodoItemType> = ({ id, name, completed, folder }) => {
	const { user } = UserAuth()
	const db = getDatabase()

	const [taskItem] = useState({
		name: name,
		completed: completed,
		folder: folder,
	})

	// Delete tasks
	const DeleteTasks = (todoId: string) => {
		const getTasks = ref(db, `${user.uid}/tasks/${todoId}`)
		remove(getTasks)
	}

	// Completed tasks
	const CompletedTasks = (todoId: string) => {
		const getTasksComp = ref(db, `${user.uid}/tasks/${todoId}`)
		update(getTasksComp, {
			completed: !completed,
		})
	}

	return (
		<Stack direction='column' alignItems='flex-start' spacing={2}>
			<Stack direction='row' alignItems='center' spacing={2} pt={2}>
				<FormControlLabel
					onClick={() => CompletedTasks(id)}
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
							defaultChecked={taskItem.completed}
						/>
					}
					label={
						<Typography color='primary' variant='body1'>
							{taskItem.name}
						</Typography>
					}
				/>
				<IconButton aria-label='delete' onClick={() => DeleteTasks(id)}>
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
	)
}

export default TodoItem
