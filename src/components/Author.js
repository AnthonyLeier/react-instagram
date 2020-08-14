import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Gravatar} from 'react-native-gravatar';
import commonColors from '../info/commonColors';

export default props => {
	return (
		<View style={styles.container}>
			<Gravatar options={{email: props.email, secure: true}} style={styles.avatar} />
			<Text style={styles.nickname}>{props.nickname || 'nickname'}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: commonColors.main,
		marginBottom: 8,
	},
	avatar: {
		width: 30,
		height: 30,
		borderRadius: 15,
		marginHorizontal: 10,
	},
	nickname: {
		color: commonColors.title,
		marginVertical: 10,
		fontSize: 15,
		fontWeight: 'bold',
	},
});
