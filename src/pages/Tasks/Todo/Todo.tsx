import { Grid, Stack } from '@mui/material'
import { FC, memo, useEffect, useState } from 'react'
import H1 from '../../../components/ui/H1/H1'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

// firebase
import { getDatabase, onValue, ref } from 'firebase/database'
import { UserAuth } from '../../../core/context/AuthContext'

interface TodoType {
	activeFolder: string
	menuBurger: boolean
}

const Todo: FC<TodoType> = ({ activeFolder, menuBurger }) => {
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

	return (
		<Grid
			item
			p={8}
			xs={menuBurger == true ? 0 : 12}
			md={8.5}
			sx={{
				backgroundColor: '#FFFFFF',
				borderRadius: { xs: '20px', md: '0 20px 20px 0' },
				display: { xs: menuBurger == true ? 'none' : 'block', md: 'block' },
			}}
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
