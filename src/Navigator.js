import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';
import commonColors from './info/commonColors';

const Tab = createBottomTabNavigator();

export default Navigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({route}) => ({
					tabBarIcon: ({color, size}) => {
						let iconName;

						if (route.name === 'Feed') {
							iconName = 'home';
						} else if (route.name === 'Search') {
							iconName = 'search';
						} else if (route.name === 'AddPhoto') {
							iconName = 'plus';
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
					tabStyle: {borderColor: 'red'},
				}}
				hideShadow={true}>
				<Tab.Screen name="Feed" component={Feed} />
				<Tab.Screen name="Search" component={Feed} />
				<Tab.Screen name="AddPhoto" component={Feed} />
				<Tab.Screen name="Notifications" component={Feed} />
				<Tab.Screen name="Profile" component={Feed} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};
