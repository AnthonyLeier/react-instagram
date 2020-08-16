import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import commonColors from '../info/commonColors';

export default props => {
	return (
		<TouchableOpacity onPress={props.function} style={[styles.container, {backgroundColor: props.color}, props.style]}>
			<Text style={styles.text}>{props.children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 5,
	},
	text: {
		fontSize: 20,
		marginVertical: 10,
		marginHorizontal: 15,
		color: commonColors.secondary,
	},
});
