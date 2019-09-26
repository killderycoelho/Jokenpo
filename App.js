import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Image, Text } from 'react-native'
import { theme } from './src/themetheme'

/** importacao das imagens */
import pedra from './src/assets/pedra.png'
import papel from './src/assets/papel.png'
import tesoura from './src/assets/tesoura.png'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		const initial = {
			user: null,
			comp: null,
			winner: '',
			styleUser: null,
			styleComp: null,
		}
		this.state = initial
	}

	render() {
		const { dimensions, components } = theme
		return (
			<SafeAreaView style={[dimensions.container]}>
				<Text style={[components.title]}>JOKENPO</Text>
				<View style={[components.board]}>
					<View style={[components.boardPanel, this.state.styleUser]}>
						<Text style={[components.boardTitle]}>SUA JOGADA</Text>
						<Image source={this.state.user} />
					</View>
					<View style={[components.boardPanel, this.state.styleComp]}>
						<Text style={[components.boardTitle]}>COMPUTADOR</Text>
						<Image source={this.state.comp} />
					</View>
				</View>
				<View style={[components.viewResult]}>
					<Text style={[components.textResult]}>{this.state.winner}</Text>
				</View>
				<View style={[components.controls]}>
					<TouchableOpacity style={[components.button]} onPress={() => this.play(pedra)}>
						<Image source={pedra} />
						<Text style={[components.buttonLabel]}>Pedra</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[components.button]} onPress={() => this.play(papel)}>
						<Image source={papel} />
						<Text style={[components.buttonLabel]}>Papel</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[components.button]} onPress={() => this.play(tesoura)}>
						<Image source={tesoura} />
						<Text style={[components.buttonLabel]}>Tesoura</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		)
	}

	
  rafflePlay() {
		const plays = [pedra, papel, tesoura]
		let indice = Math.floor(Math.random() * plays.length)
		return plays[indice]
	}

	infoWinner(player, computador) {
		if (player === computador) {
			this.setState({ styleUser: null, styleComp: null })
			return 'Empate'
		} else if (
			(player === pedra && computador !== papel) ||
			(player === papel && computador !== tesoura) ||
			(player === tesoura && computador !== pedra)
		) {
			this.setState({ styleUser: { backgroundColor: 'green' }, styleComp: { backgroundColor: 'red' } })
			return 'Usuário vence'
		} else {
			this.setState({ styleUser: { backgroundColor: 'red' }, styleComp: { backgroundColor: 'green' } })
			return 'Computador vence'
		}
	}

	play(option = null) {
		const user = option
		const comp = this.rafflePlay()
		const winner = this.infoWinner(user, comp)
		this.setState({ user, comp, winner })
	}
}