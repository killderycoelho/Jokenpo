import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const theme = {
	dimensions: {
		container: {
			flex: 1,
		},
		containerScroll: {
			height,
			width,
		},
	},
	components: {
		title: {
			alignSelf: 'center',
			fontSize: 40,
			marginTop: 10,
			marginBottom: 10,
		},
		board: {
			flex: 2,
			flexDirection: 'row',
			padding: 5,
		},
		boardPanel: {
			flex: 1,
			alignItems: 'center',
			backgroundColor: '#c9c9c9',
			minHeight: 200,
			margin: 10,
			borderWidth: 1,
			borderRadius: 10,
			borderColor: '#ccc',
		},
		boardTitle: {
			fontSize: 20,
			fontWeight: 'bold',
			marginTop: 10,
			marginBottom: 10,
		},
		viewResult: {
			backgroundColor: '#c9c9c9',
			borderRadius: 10,
			margin: 10,
			marginTop: 10,
			marginBottom: 10,
			height: 100,
			justifyContent: 'center',
		},
		textResult: {
			alignSelf: 'center',
			fontSize: 30,
			fontWeight: 'bold',
		},
		controls: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			alignItems: 'center',
		},
		button: {
			borderWidth: 1,
			borderRadius: 10,
			borderColor: '#ccc',
			alignItems: 'center',
		},
		buttonLabel: {
			marginTop: 5,
			marginBottom: 5,
			fontSize: 16,
			fontWeight: 'bold',
		},
	},
}