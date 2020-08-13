import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Author from './Author';
import Comments from './Comments';

export default class Post extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Author email="anthonyleierlw@gmail.com" nickname="anthonyleier" />
				<Image source={this.props.image} style={styles.image} />
				<Comments comments={this.props.comments} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121212',
		paddingTop: 5
	},
	image: {
		width: Dimensions.get('window').width,
		height: (Dimensions.get('window').width * 3) / 4,
		padding: 0,
		resizeMode: 'cover',
		backgroundColor: '#171717',
	},
});
