import { Typography } from '@mui/material'
import { FC } from 'react'

type H1Type = {
	text: string
	mB?: number
}

const H1: FC<H1Type> = ({ text, mB = 4 }) => {
	return (
		<Typography
			sx={{
				fontFamily: 'Montserrat',
				fontWeight: 700,
				fontSize: '32px',
				lineHeight: '39px',
				color: '#64C4ED',
			}}
			mb={mB}
		>
			{text}
		</Typography>
	)
}

export default H1
