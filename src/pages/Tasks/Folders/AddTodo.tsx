import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import { UserAuth } from '../../../core/context/AuthContext'
import { db } from '../../../core/firebase-config'

export default function AddTodo() {
	const [title, setTitle] = useState('')
	const { user } = UserAuth()

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (title !== '') {
			await addDoc(collection(db, 'todos'), {
				title,
				completed: false,
				userID: user.uid,
			})
			setTitle('')
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className='input_container'>
				<input
					type='text'
					placeholder='Enter todo...'
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</div>
			<div className='btn_container'>
				<button>Add</button>
			</div>
		</form>
	)
}
