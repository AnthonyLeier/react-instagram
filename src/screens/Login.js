import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

export default class Login extends Component {
	state = {
		email: '',
		password: '',
	};

	login = () => {
		this.props.navigation.navigate('Profile');
	};

	register = () => {
		this.props.navigation.navigate('Register');
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Input
					placeholder="Email"
					style={styles.input}
					autofocus
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
				<Button function={this.login}>Login</Button>
				<Button function={this.register}>Registrar</Button>
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
