import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput, Image, Dimensions, Platform, Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import commonColors from '../info/commonColors';
import Button from '../components/Button';
import Input from '../components/Input';
import Header from '../components/Header';

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
			<SafeAreaView style={styles.container}>
				<Header />
				<Text style={styles.title}>Compartilhe uma imagem</Text>
				<View style={styles.imageContainer}>
					<Image source={this.state.image} style={styles.image} />
				</View>
				<Input
					placeholder="Descrição da Foto"
					value={this.state.comment}
					onChangeText={comment => this.setState({comment})}
					style={styles.input}
				/>
				<View style={styles.buttonContainer}>
					<Button function={this.pickImage} color={commonColors.info}>
						Escolher Foto
					</Button>
					<Button function={this.save} color={commonColors.success}>
						Salvar
					</Button>
				</View>
			</SafeAreaView>
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
		fontSize: 25,
		marginTop: Platform.OS === 'ios' ? 40 : 20,
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
	buttonContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 40,
	},
	input: {},
});
