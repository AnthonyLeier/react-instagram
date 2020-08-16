import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import {Gravatar} from 'react-native-gravatar';
import Button from '../components/Button';
import commonColors from '../info/commonColors';
import Header from '../components/Header';

export default props => {
	const options = {nickname: 'anthonyleier', email: 'anthonyleierlw@gmail.com', secure: true};

	const logout = () => {
		props.navigation.navigate('Login');
	};

	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<Gravatar options={{email: options.email, secure: options.secure}} style={styles.avatar} />
			<Text style={styles.nickname}>{options.nickname}</Text>
			<Text style={styles.email}>{options.email}</Text>
			<Button function={logout} color={commonColors.danger} style={styles.button}>
				Sair
			</Button>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: commonColors.main,
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
		color: commonColors.title,
	},
	email: {
		marginTop: 15,
		fontSize: 25,
		color: commonColors.subtitle,
	},
	button: {
		marginTop: 100,
	},
});
