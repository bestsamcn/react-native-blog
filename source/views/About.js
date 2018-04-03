import React from 'react';
import { Button, View, Text } from 'react-native';
import { navigate } from 'react-navigation';


class About extends React.Component{
	constructor(props){
		super(props);
	}
	goBack(){
		this.props.navigation.navigate('Home')
	}
	render(){
		return(
			<View>
				<Text>Hello About</Text>
				<Button title="Home" onPress={this.goBack.bind(this)}/>
			</View>		
		)
	}
}
export default About;
