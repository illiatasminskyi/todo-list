import { getDatabase, ref, push, set } from 'firebase/database'
import { useState } from 'react'
import Wrapper from '../../components/Ordinary/Wrapper/Wrapper'
import Todo from './Todo'
import Menu from './Menu'

const Tasks = () => {
	const [activeFolder, setActiveFolder] = useState('')

	// Create a new Folder
	const addNewFolder = (userId: string, name: string, color: string) => {
		const db = getDatabase()
		const postFolder = ref(db, `${userId}/folder`)
		const newFolder = push(postFolder)
		set(newFolder, {
			folder_name: name,
			folder_color: color === '' ? 'rgba(255, 100, 100, 1)' : color,
		})
	}

	// Active folder selection
	const buttonSetActiveFolder = (folderProp: string) => {
		setActiveFolder(folderProp)
	}

	return (
		<Wrapper>
			<>
				<Menu
					addNewFolder={addNewFolder}
					activeFolder={activeFolder}
					buttonSetActiveFolder={buttonSetActiveFolder}
				/>
				<Todo activeFolder={activeFolder} />
			</>
		</Wrapper>
	)
}

export default Tasks
