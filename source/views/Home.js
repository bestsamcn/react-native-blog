import React from 'react';
import { StackNavigator, navigate } from 'react-navigation';
import { Button, View, Text } from 'react-native';


class Home extends React.Component{
	constructor(props){
		super(props);
	}
	pushState(){
		this.props.navigation.navigate('About')
	}
	render(){
		return(
			<View>
				<Text>Hello Home</Text>
				<Button title="About" onPress={this.pushState.bind(this)}/>
			</View>		
		)
	}
}
export default Home;
