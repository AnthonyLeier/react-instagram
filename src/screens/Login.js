import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../store/actions/user';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import commonColors from '../info/commonColors';

class Login extends Component {
	state = {
		name: '',
		email: '',
		password: '',
	};

	login = () => {
		this.props.onLogin({...this.state});
		this.props.navigation.navigate('Profile');
	};

	register = () => {
		this.props.navigation.navigate('Register');
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<TextInput
					placeholder="Nome"
					style={styles.input}
					autofocus
					value={this.state.name}
					onChangeText={name => this.setState({name})}
				/>
				<TextInput
					placeholder="Email"
					style={styles.input}
					autofocus
					keyboardType="email-address"
					value={this.state.email}
					onChangeText={email => this.setState({email})}
				/>
				<Button function={this.login} style={styles.entrarButton}>
					Entrar
				</Button>
				{/* <Button function={this.register}>Registrar</Button> */}
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

	entrarButton: {
		backgroundColor: commonColors.main,
	},
});

const mapDispatchToProps = dispatch => {
	return {
		onLogin: user => dispatch(login(user)),
	};
};

export default connect(null, mapDispatchToProps)(Login);
