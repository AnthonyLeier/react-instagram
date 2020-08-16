import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import commonColors from '../info/commonColors';

export default props => {
	return <TextInput {...props} style={styles.default} />;
};

const styles = StyleSheet.create({
	default: {
		marginTop: 20,
		width: '90%',
		backgroundColor: '#EEE',
		height: 40,
		borderWidth: 1,
		borderColor: '#333',
		paddingLeft: 15,
	},
});
