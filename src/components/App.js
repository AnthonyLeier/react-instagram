import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from './Header';
import Post from './Post';

//Imagens
import boat from '../../assets/imgs/boat.jpg';
import bw from '../../assets/imgs/bw.jpg';
import fence from '../../assets/imgs/fence.jpg';
import gate from '../../assets/imgs/gate.jpg';

export default class App extends Component {
	render() {
		const comments = [
			{nickname: 'viniciusbortolini', comment: 'Linda foto'},
			{nickname: 'vieira.doc', comment: 'Belo barco'},
			{nickname: 'acaue_', comment: 'Comi tua mãe'},
		];
		return (
			<View style={{flex: 1}}>
				<Header />
				<Post image={boat} comments={comments} />
			</View>
		);
	}
}
