import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Alert} from 'react-native';

export default class Comments extends Component {
	render() {
		let view = null;
		if (this.props.comments) {
			view = this.props.comments.map((item, index) => {
				return (
					<View style={styles.commentContainer} key={index}>
						<Text>Oi</Text>
					</View>
				);
			});
		}
	}
}
