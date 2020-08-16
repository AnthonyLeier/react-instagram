import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

export default class Register extends Component {
	state = {
		name: '',
		email: '',
		password: '',
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Input
					placeholder="Nome"
					style={styles.input}
					autofocus
					value={this.state.name}
					onChangeText={email => this.setState({name})}
				/>
				<Input
					placeholder="Email"
					style={styles.input}
					keyboardType="email-address"
					value={this.state.email}
					onChangeText={email => this.setState({email})}
				/>
				<Input
					placeholder="Senha"
					style={styles.input}
					secureTextEntry
					value={this.state.password}
					onChangeText={password => this.setState({password})}
				/>
				<Button function={this.login}>Registrar</Button>
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
});
