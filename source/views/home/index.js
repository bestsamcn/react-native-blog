import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Home';
import TabHomeScreen from './TabHome';

const HomeStack = StackNavigator(
	{
		Home:{
			screen:HomeScreen,
		},
		TabHome:{
			screen:TabHomeScreen,
		}
	},
	{
		initialRouteName:'TabHome',
	}
)

export default HomeStack;