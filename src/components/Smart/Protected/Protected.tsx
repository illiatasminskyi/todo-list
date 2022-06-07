import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../../../core/context/AuthContext'

export const Protected: FC<{ children: JSX.Element }> = ({ children }) => {
	const { user } = UserAuth()

	if (!user) {
		return <Navigate to='/sign-in' />
	}

	return children
}
