import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.sass'
import App from './App/App'
import { ThemeProvider } from '@emotion/react'
import { theme } from './core/theme/Theme'
import reportWebVitals from './reportWebVitals'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCGMIIliAWfw0p1vasv3E0nXWv1yMtVf9Q',
	authDomain: 'todolist-63537.firebaseapp.com',
	projectId: 'todolist-63537',
	storageBucket: 'todolist-63537.appspot.com',
	messagingSenderId: '513687179990',
	appId: '1:513687179990:web:0f6ef11f0d4ed1e969af77',
	measurementId: 'G-ZC1HMXHGP4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
