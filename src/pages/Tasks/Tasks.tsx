import { getDatabase, ref, push, set } from 'firebase/database'
import { useState } from 'react'
import Wrapper from '../../components/Ordinary/Wrapper/Wrapper'
import Todo from './Todo'
import Menu from './Menu'
import ListIcon from '@mui/icons-material/List'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const Tasks = () => {
	const [activeFolder, setActiveFolder] = useState('All tasks')
	const [menuBurger, setMenuBurger] = useState(false)

	// Create a new Folder
	const addNewFolder = async (userId: string, name: string, color: string) => {
		const db = await getDatabase()
		const postFolder = await ref(db, `${userId}/folder`)
		const newFolder = await push(postFolder)
		await set(newFolder, {
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
				<IconButton
					onClick={() => setMenuBurger(!menuBurger)}
					sx={{
						position: 'absolute',
						top: '20px',
						left: '17px',
						fontSize: '20px',

						display: { xs: 'block', md: 'none' },
					}}
				>
					{menuBurger ? <CloseIcon /> : <ListIcon />}
				</IconButton>
				<Menu
					addNewFolder={addNewFolder}
					activeFolder={activeFolder}
					buttonSetActiveFolder={buttonSetActiveFolder}
					menuBurger={menuBurger}
					setMenuBurger={setMenuBurger}
				/>
				<Todo activeFolder={activeFolder} menuBurger={menuBurger} />
			</>
		</Wrapper>
	)
}

export default Tasks
