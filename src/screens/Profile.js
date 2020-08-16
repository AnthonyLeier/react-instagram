import React from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {Gravatar} from 'react-native-gravatar';
import commonColors from '../info/commonColors';

export default props => {
	const options = {nickname: 'nickname', email: 'test@example.com', secure: true};

	const logout = () => {
		this.props.navigation.navigate('Auth');
	};

	return (
		<SafeAreaView style={styles.container}>
			<Gravatar options={{email: options.email, secure: options.secure}} style={styles.avatar} />
			<Text style={styles.nickname}>{options.nickname}</Text>
			<Text style={styles.email}>{options.email}</Text>
			<TouchableOpacity onPress={logout} style={styles.button}>
				<Text style={styles.buttonText}>Sair</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
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
	avatar: {
		width: 150,
		height: 150,
		borderRadius: 75,
		marginTop: 100,
	},
	nickname: {
		marginTop: 30,
		fontSize: 30,
		fontWeight: 'bold',
	},
	email: {
		marginTop: 30,
		fontSize: 25,
	},
});
