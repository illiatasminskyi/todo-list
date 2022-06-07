import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCGMIIliAWfw0p1vasv3E0nXWv1yMtVf9Q',
	authDomain: 'todolist-63537.firebaseapp.com',
	projectId: 'todolist-63537',
	storageBucket: 'todolist-63537.appspot.com',
	messagingSenderId: '513687179990',
	appId: '1:513687179990:web:0f6ef11f0d4ed1e969af77',
	measurementId: 'G-ZC1HMXHGP4',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
