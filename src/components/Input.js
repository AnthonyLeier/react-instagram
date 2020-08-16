import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import commonColors from '../info/commonColors';

export default props => {
	return (
		<TextInput
			placeholderTextColor={commonColors.secondary}
			color={commonColors.secondary}
			multiline={true}
			numberOfLines={4}
			style={styles.default}
			placeholder={props.placeholder}
			value={props.value}
			onChangeText={props.onChangeText}
		/>
	);
};

const styles = StyleSheet.create({
	default: {
		marginTop: 20,
		width: '90%',
		backgroundColor: commonColors.darker,
		height: 100,
		justifyContent: 'flex-start',
		borderWidth: 1,
		borderColor: commonColors.border,
		paddingLeft: 15,
	},
});
