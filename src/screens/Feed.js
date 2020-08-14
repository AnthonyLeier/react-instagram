import React, {Component} from 'react';
import {StyleSheet, Flatlist, ScrollView, TouchableWithoutFeedback} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';
import examplePosts from '../info/examplePosts';

export default class Feed extends Component {
	state = {
		posts: examplePosts,
	};

	render() {
		return (
			<ScrollView style={{flex: 1}}>
				<Header />
				<Post
					image={this.state.posts[0].image}
					comments={this.state.posts[0].comments}
					email={this.state.posts[0].email}
					nickname={this.state.posts[0].nickname}
				/>
				<Post
					image={this.state.posts[1].image}
					comments={this.state.posts[1].comments}
					email={this.state.posts[1].email}
					nickname={this.state.posts[1].nickname}
				/>
				<Post
					image={this.state.posts[2].image}
					comments={this.state.posts[2].comments}
					email={this.state.posts[2].email}
					nickname={this.state.posts[2].nickname}
				/>
				<Post
					image={this.state.posts[3].image}
					comments={this.state.posts[3].comments}
					email={this.state.posts[3].email}
					nickname={this.state.posts[3].nickname}
				/>
			</ScrollView>
		);
	}
}
