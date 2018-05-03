import React from 'react';
import { StackNavigator } from 'react-navigation';
import AboutScreen from './About';
import InformationScreen from './Information';


const AboutStack = StackNavigator(
	{
		About:{
			screen:AboutScreen,
			navigationOptions:{
				header:null
			}
		},
		Info:{
			screen:InformationScreen
		}
	},
	{
		initialRouteName:'Info',
	}
)

export default AboutStack;