import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';
import commonColors from './info/commonColors';
import Default from './screens/Default';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function LoginOrRegister() {
	return (
		<Stack.Navigator initialRouteName="Login">
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Register" component={Register} />
		</Stack.Navigator>
	);
}

export default props => {
	const isLogged = () => {
		logged = true;
		if (logged) return Profile;
		else return LoginOrRegister;
	};

	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="AddPhoto"
				screenOptions={({route}) => ({
					tabBarIcon: ({color, size}) => {
						let iconName;

						if (route.name === 'Feed') {
							iconName = 'home';
						} else if (route.name === 'Search') {
							iconName = 'search';
						} else if (route.name === 'AddPhoto') {
							iconName = 'plus-square';
						} else if (route.name === 'Notifications') {
							iconName = 'heart';
						} else if (route.name === 'Profile') {
							iconName = 'user';
						}

						return <Icon name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: commonColors.secondary,
					inactiveTintColor: commonColors.subtitle,
					style: {backgroundColor: commonColors.main, borderTopWidth: 0},
					showLabel: false,
				}}>
				<Tab.Screen name="Feed" component={Feed} />
				<Tab.Screen name="Search" component={Default} />
				<Tab.Screen name="AddPhoto" component={AddPhoto} />
				<Tab.Screen name="Notifications" component={Default} />
				<Tab.Screen name="Profile" component={isLogged()} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};
