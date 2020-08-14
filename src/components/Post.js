import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Author from './Author';
import Comments from './Comments';
import AddComment from './AddComment';
import commonColors from '../info/commonColors';

export default class Post extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Author email={this.props.email} nickname={this.props.nickname} />
				<Image source={this.props.image} style={styles.image} />
				<Comments comments={this.props.comments} />
				<AddComment />
			</View>
		);
	}
}

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
