import ModeIcon from '@mui/icons-material/Mode'
import { Grid, IconButton, Stack, TextField } from '@mui/material'
import { FC, memo, useEffect, useState } from 'react'
import H1 from '../../../components/ui/H1/H1'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

// firebase
import { getDatabase, onValue, ref } from 'firebase/database'
import { UserAuth } from '../../../core/context/AuthContext'

interface TodoType {
	activeFolder: string
}

const Todo: FC<TodoType> = ({ activeFolder }) => {
	const { user } = UserAuth()
	const db = getDatabase()

	// useState
	const [todos, setTodos] = useState<any>([])
	const [valueFolder, setValueFolder] = useState('Text')

	// Getting tasks
	useEffect(() => {
		const getFolder = ref(db, `${user.uid}/tasks`)
		onValue(getFolder, snapshot => {
			let taskArray: any[] = []
			snapshot.forEach(data => {
				taskArray.push({
					id: data.key,
					name: data.val().name,
					completed: data.val().completed,
					folder: data.val().folder,
				})
			})
			setTodos(taskArray)
		})
	}, [user])

	// Functions for update name folders
	const handleUpdateFoldser = (e: {
		preventDefault: () => void
		target: { value: any }
	}) => {
		e.preventDefault()
		// const getFolder = ref(db, `${user.uid}/folder`)
		const Update = async () => {
			await setValueFolder(e.target.value)
		}
		Update()
	}

	return (
		<Grid
			item
			p={8}
			md={9}
			sx={{ backgroundColor: '#FFFFFF', borderRadius: '0 20px 20px 0' }}
		>
			<Stack direction='column' alignItems='flex-start' spacing={2} my={4}>
				<H1 text={activeFolder} mB={0} mL={4} />
				{todos
					.filter(
						(itemF: any) =>
							itemF.folder === activeFolder || activeFolder === 'All tasks'
					)
					.map((item: any) => (
						<TodoItem {...item} key={item.id} />
					))}
				<AddTodo activeFolder={activeFolder} />
			</Stack>
		</Grid>
	)
}

export default memo(Todo)
