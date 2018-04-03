import React from 'react';
import { StackNavigator } from 'react-navigation';

import { Home, About } from './views';

const MainNavigation = StackNavigator(
	{
		Home:{
			screen: Home,
			navigationOptions:{
				title:'首页',
				headerTitle:'首页',
	            headerBackTitle:'',
			}
		},
		About:{
			screen: About,
			navigationOptions:{
			headerTitle:'关于',
            headerBackTitle:'',
			}
		}
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