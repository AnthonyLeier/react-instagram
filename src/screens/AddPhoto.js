import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, Platform, ScrollView, Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import commonColors from '../info/commonColors';

export default class AppPhoto extends Component {
	state = {
		image: null,
		comment: '',
	};

	pickImage = () => {
		ImagePicker.showImagePicker(
			{
				title: 'Escolha a imagem',
				maxWidth: 800,
				maxHeight: 600,
			},
			res => {
				if (!res.didCancel) {
					this.setState({image: {uri: res.uri, base64: res.data}});
				}
			}
		);
	};

	save = async () => {
		Alert.alert('Imagem adicionada!', this.state.comment);
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Compartilhe uma imagem</Text>
				<View style={styles.imageContainer}>
					<Image source={this.state.image} style={styles.image} />
				</View>
				<View style={styles.input}>
					<TextInput
						placeholder="Descrição da Foto"
						placeholderTextColor={commonColors.secondary}
						value={this.state.comment}
						onChangeText={comment => this.setState({comment})}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={this.pickImage} style={styles.button}>
						<Text style={styles.buttonText}>Escolher Foto</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.save} style={[styles.button, styles.buttonSave]}>
						<Text style={styles.buttonText}>Salvar</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: commonColors.main,
	},
	title: {
		fontSize: 20,
		marginTop: Platform.OS === 'ios' ? 30 : 10,
		fontWeight: 'bold',
		color: commonColors.title,
	},
	imageContainer: {
		width: '90%',
		height: Dimensions.get('window').width / 2,
		backgroundColor: '#EEE',
		marginTop: 10,
		backgroundColor: commonColors.main,
	},
	image: {
		width: '100%',
		height: Dimensions.get('window').width / 2,
		resizeMode: 'center',
	},
	button: {
		marginTop: 30,
		padding: 10,
		backgroundColor: commonColors.secondary,
		borderRadius: 15,
	},
	buttonSave: {
		backgroundColor: '#28a745',
	},
	buttonText: {
		fontSize: 20,
		color: commonColors.main,
	},
	input: {
		marginTop: 20,
		width: '90%',
		height: '40%',
		color: commonColors.secondary,
		borderWidth: 1,
		borderColor: commonColors.secondary,
	},
	buttonContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
