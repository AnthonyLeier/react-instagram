import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../store/actions/user';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import {Gravatar} from 'react-native-gravatar';
import Button from '../components/Button';
import commonColors from '../info/commonColors';
import Header from '../components/Header';

class Profile extends Component {
	logout = () => {
		this.props.onLogout();
		this.props.navgation.navigate('Auth');
	};
	options = {nickname: 'anthonyleier', email: 'anthonyleierlw@gmail.com', secure: true};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Header />
				<Gravatar options={{email: options.email, secure: options.secure}} style={styles.avatar} />
				<Text style={styles.nickname}>{this.props.name}</Text>
				<Text style={styles.email}>{this.props.email}</Text>
				<Button color={commonColors.danger} style={styles.button}>
					Sair
				</Button>
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
	avatar: {
		width: 150,
		height: 150,
		borderRadius: 75,
		marginTop: 100,
	},
	nickname: {
		marginTop: 30,
		fontSize: 30,
		fontWeight: 'bold',
		color: commonColors.title,
	},
	email: {
		marginTop: 15,
		fontSize: 25,
		color: commonColors.subtitle,
	},
	button: {
		marginTop: 100,
	},
});

const mapStateToProps = ({user}) => {
	return {
		email: user.email,
		name: user.name,
	};
};

const mapDispatchToProps = dispatch => {
	onLogout: () => dispatch(logout());
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
