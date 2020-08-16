import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import commonColors from '../info/commonColors';

export default props => {
	return (
		<TouchableOpacity onPress={props.function} style={styles.container}>
			<Text style={styles.text}>{props.children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		padding: 10,
		backgroundColor: commonColors.secondary,
		borderRadius: 15,
	},
	text: {
		fontSize: 20,
		color: commonColors.main,
	},
});
