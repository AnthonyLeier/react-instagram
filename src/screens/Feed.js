import React, {Component} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';
import examplePosts from '../info/examplePosts';
import commonColors from '../info/commonColors';

export default class Feed extends Component {
	state = {
		posts: examplePosts,
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Header />
				<FlatList
					data={this.state.posts}
					keyExtractor={item => `${item.id}`}
					renderItem={({item}) => <Post key={item.id} {...item} />}
				/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: commonColors.main,
	},
});
