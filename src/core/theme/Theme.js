import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
	spacing: 5,
	palette: {
		mode: 'light',
		primary: {
			main: 'rgba(0, 0, 0, 1)',
		},
		secondary: {
			main: 'rgba(180, 180, 180, 1)',
		},
		info: {
			main: 'rgba(100, 196, 237, 1)',
		},
	},
	typography: {
		fontWeight: 300,
		fontStyle: 'normal',
		fontFamily: "'Roboto', sans-serif",
		htmlFontSize: 0,
		fontSize: 14,
		button: {
			fontSize: 14,
			lineHeight: '16px',
			textTransform: 'none',
			fontWeight: 400,
		},
		body1: {
			fontWeight: 400,
			fontSize: 16,
			lineHeight: '19px',
		},
	},
})
