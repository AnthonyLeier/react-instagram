import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableWithoutFeedback as TWF, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import commonColors from '../info/commonColors';

export default class AddComment extends Component {
	state = {
		comment: '',
		editMode: false,
	};

	handleAddComment = () => {
		Alert.alert('Adicionado!', this.state.comment);
	};

	render() {
		let commentArea = null;
		if (this.state.editMode) {
			commentArea = (
				<View style={styles.containerEdit}>
					<TextInput
						placeholder="Adicione um comentário..."
						style={styles.input}
						autofocus
						placeholderTextColor={commonColors.secondary}
						color={commonColors.secondary}
						value={this.state.comment}
						onChangeText={comment => this.setState({comment})}
						onSubmitEditing={() => {
							this.handleAddComment();
							this.setState({editMode: false});
						}}
					/>
					<TWF onPress={() => this.setState({editMode: false})}>
						<Icon name="times" size={15} color={commonColors.subtitle} />
					</TWF>
				</View>
			);
		} else {
			commentArea = (
				<TWF onPress={() => this.setState({editMode: true})}>
					<View style={styles.containerView}>
						<Icon name="comment-o" size={20} color={commonColors.subtitle} />
						<Text style={styles.caption}>Adicione um comentário...</Text>
					</View>
				</TWF>
			);
		}

		return <View style={{flex: 1}}>{commentArea}</View>;
	}
}

const styles = StyleSheet.create({
	containerView: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
		marginLeft: 15,
		width: '100%',
	},
	containerEdit: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 15,
		justifyContent: 'space-between',
	},
	caption: {
		marginLeft: 10,
		fontSize: 12,
		color: commonColors.lighter,
	},
});
