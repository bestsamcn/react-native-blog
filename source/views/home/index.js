import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Home';

const HomeStack = StackNavigator(
	{
		Home:{
			screen:HomeScreen,
		}
	},
	{
		initialRouteName:'Home',
	}
)

export default HomeStack;