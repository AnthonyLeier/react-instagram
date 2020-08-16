import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import commonColors from '../info/commonColors';
import Header from '../components/Header';

export default props => {
	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<View style={styles.textContainer}>
				<Text style={styles.text}>Recurso em Desenvolvimento</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: commonColors.main,
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		color: commonColors.title,
	},
});
