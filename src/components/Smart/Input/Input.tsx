import { Button, Stack, TextField, Typography } from '@mui/material'
import { FC } from 'react'

interface InputType {
	l1: string
	l2?: string
	b1: string
	b2?: string
	input2?: boolean
	widthTF?: string
}

const Input: FC<InputType> = ({ l1, l2, b1, b2, input2 = false, widthTF }) => {
	return (
		<>
			<TextField
				id='outlined-basic'
				label={l1}
				variant='outlined'
				sx={{
					background: '#FFFFFF',
					boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
					width: widthTF,
				}}
			/>
			{input2 === false ? null : (
				<TextField
					id='outlined-basic'
					label={l2}
					variant='outlined'
					sx={{
						background: '#FFFFFF',
						boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
					}}
				/>
			)}
			<Stack direction='row' alignItems='flex-start' spacing={2}>
				<Button
					color='secondary'
					style={{
						background: 'rgba(77, 213, 153, 1)',
						boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
						border: '0px',
						borderRadius: '4px',
						padding: '13px 33px',
					}}
				>
					<Typography
						sx={{ fontWeight: '600', color: 'white' }}
						variant='button'
					>
						{b1}
					</Typography>
				</Button>
				<Button
					color='secondary'
					style={{
						background: '#E8E8E8',
						boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
						border: '0px',
						borderRadius: '4px',
						padding: '13px 23px',
					}}
				>
					<Typography
						sx={{ fontWeight: '600', color: '#9C9C9C' }}
						variant='button'
					>
						{b2}
					</Typography>
				</Button>
			</Stack>
		</>
	)
}

export default Input
