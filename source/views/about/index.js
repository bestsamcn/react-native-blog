import React from 'react';
import { StackNavigator } from 'react-navigation';
import AboutScreen from './About';

const AboutStack = StackNavigator(
	{
		Message:{
			screen:AboutScreen,
			navigationOptions:{
				header:null
			}
		}
	},
	{
		initialRouteName:'Message',
	}
)

export default AboutStack;