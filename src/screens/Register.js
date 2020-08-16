import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default class Register extends Component {
	state = {
		name: '',
		email: '',
		password: '',
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<TextInput
					placeholder="Nome"
					style={styles.input}
					autofocus
					value={this.state.name}
					onChangeText={email => this.setState({name})}
				/>
				<TextInput
					placeholder="Email"
					style={styles.input}
					keyboardType="email-address"
					value={this.state.email}
					onChangeText={email => this.setState({email})}
				/>
				<TextInput
					placeholder="Senha"
					style={styles.input}
					secureTextEntry
					value={this.state.password}
					onChangeText={password => this.setState({password})}
				/>
				<TouchableOpacity onPress={this.login} style={styles.button}>
					<Text style={styles.buttonText}>Salvar</Text>
				</TouchableOpacity>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		marginTop: 30,
		padding: 10,
		backgroundColor: '#4286f4',
	},
	buttonText: {
		fontSize: 20,
		color: 'white',
	},
	input: {
		marginTop: 20,
		width: '90%',
		backgroundColor: '#EEE',
		height: 40,
		borderWidth: 1,
		borderColor: '#333',
		paddingLeft: 15,
	},
});
