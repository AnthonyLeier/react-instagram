import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Author from './Author';
import Comments from './Comments';
import AddComment from './AddComment';
import commonColors from '../info/commonColors';

export default props => {
	return (
		<View style={styles.container}>
			<Author email={props.email} nickname={props.nickname} />
			<Image source={props.image} style={styles.image} />
			<Comments comments={props.comments} />
			<AddComment />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: commonColors.main,
		paddingTop: 5,
		paddingBottom: 20,
	},
	image: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').width,
		padding: 0,
		resizeMode: 'contain',
		backgroundColor: commonColors.darker,
	},
});
