import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonColors from '../info/commonColors';

export default props => {
	let commentsList = null;
	if (props.comments) {
		commentsList = props.comments.map((item, index) => {
			return (
				<View style={styles.commentContainer} key={index}>
					<Text style={styles.nickname}>{item.nickname}</Text>
					<Text style={styles.comment}>{item.comment}</Text>
				</View>
			);
		});
	}

	return <View style={styles.container}>{commentsList}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginLeft: 10,
		marginTop: 5,
	},
	commentContainer: {
		flexDirection: 'row',
		marginTop: 5,
	},
	nickname: {
		marginLeft: 5,
		fontWeight: 'bold',
		color: commonColors.title,
	},
	comment: {
		color: commonColors.subtitle,
		marginLeft: 5,
	},
});
