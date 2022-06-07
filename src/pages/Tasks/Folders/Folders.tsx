import ModeIcon from '@mui/icons-material/Mode'
import { Grid, IconButton, Stack } from '@mui/material'
import H1 from '../../../components/ui/H1/H1'
import AddTodo from './AddTodo'
import './Folders.sass'
import Todo from './Todo'

// firebase
import {
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	query,
	updateDoc,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { UserAuth } from '../../../core/context/AuthContext'
import { db } from '../../../core/firebase-config'

const Folders = () => {
	const [todos, setTodos] = useState<any>([])
	const { user } = UserAuth()

	useEffect(() => {
		const q = query(collection(db, `${user.uid}`))

		const unsub = onSnapshot(q, querySnapshot => {
			let todosArray: any[] = []
			//console.log(todosArray)
			querySnapshot.forEach(doc => {
				todosArray.push({ ...doc.data(), id: doc.id })
			})
			setTodos(todosArray)
		})
		return () => unsub()
	}, [user])

	const toggleComplete = async (todo: any) => {
		await updateDoc(doc(db, `${user.uid}`, todo.id), {
			completed: !todo.completed,
		})
	}

	const handleEdit = async (todo: any, title: any) => {
		await updateDoc(doc(db, `${user.uid}`, todo.id), { title: title })
	}
	const handleDelete = async (id: any) => {
		await deleteDoc(doc(db, `${user.uid}`, id))
	}

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
				{todos.map((todo: any) => (
					<Todo
						key={todo.id}
						todo={todo}
						toggleComplete={toggleComplete}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
					/>
				))}
				<AddTodo />
			</Stack>
		</Grid>
	)
}

export default Folders
