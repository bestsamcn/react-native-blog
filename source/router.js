import React from 'react';
import { StackNavigator } from 'react-navigation';

import { Home } from './views';

const MainNavigation = StackNavigator(
	{
		Home:{screen: Home}
	},
	{
		headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            cardStack: {
                gesturesEnabled: false,
            }
        }
	}
)



export default class Router extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <MainNavigation />
	}
}