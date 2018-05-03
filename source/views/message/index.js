import React from 'react';
import { StackNavigator } from 'react-navigation';
import MessageScreen from './Message';

const MessageStack = StackNavigator(
	{
		Message:{
			screen:MessageScreen,
		}
	},
	{
		initialRouteName:'Message',
	}
)

export default MessageStack;