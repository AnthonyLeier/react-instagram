import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import commonColors from '../info/commonColors';

export default props => {
	return (
		<View style={styles.container}>
			<View style={styles.rowContainer}>
				<Icon name="camera" color={commonColors.secondary} style={styles.icon} size={20} />
				<Text style={styles.title}>Instagram</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: Platform.OS === 'ios' ? 20 : 0,
		padding: 10,
		borderColor: commonColors.border,
		width: '100%',
	},
	rowContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		marginHorizontal: 10,
	},
	title: {
		color: commonColors.secondary,
		fontFamily: 'Billabong',
		height: 40,
		fontSize: 32,
		marginHorizontal: 5,
	},
});
