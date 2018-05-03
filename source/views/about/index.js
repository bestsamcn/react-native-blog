import React from 'react';
import { StackNavigator } from 'react-navigation';
import AboutScreen from './About';

const AboutStack = StackNavigator(
	{
		About:{
			screen:AboutScreen,
			navigationOptions:{
				header:null
			}
		}
	},
	{
		initialRouteName:'About',
	}
)

export default AboutStack;